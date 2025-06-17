import { AuthOptions, User } from "next-auth";
import AxiosInstance from "@/utils/axiosInstance";
import { CustomUser } from "../../next-auth";
import Credentials from "next-auth/providers/credentials";
import { AxiosError } from "axios";
import Google from "next-auth/providers/google";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value;
};

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  events: {
    async signOut({ token }) {
      await AxiosInstance.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    },
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        if (user.user && user.token) {
          token.user = user.user;
          token.token = user.token;
        } else {
          const result = await AxiosInstance.post(
            "/auth/login/google",
            {
              id_token: account?.id_token,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          token.user = { ...result.data.data.user };
          token.token = result.data.data.token;
        }
      }
      return token;
    },
    async session({ session, token }) {
      try {
        const currentUser = await AxiosInstance.get("/auth/user", {
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        // for security reason token not stored in session
        // session.token = token.token as string;
        session.user = currentUser.data.data as CustomUser;
      } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Session update failed");
      }

      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          const user = await AxiosInstance.post(
            "/auth/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          const { data } = user.data;

          if (data) {
            return data;
          }

          return null;
        } catch (e) {
          if (e instanceof AxiosError) {
            throw e.response?.data;
          }
          throw e;
        }
      },
    }),
    Google({
      id: "google",
      name: "Google",
      clientId: getEnv("GOOGLE_CLIENT_ID"),
      clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
      httpOptions: {
        timeout: 40000,
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
