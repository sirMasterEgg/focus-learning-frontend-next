import type { NextAuthOptions } from "next-auth";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import AxiosInstance from "@/utils/axiosInstance";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value;
};

export const authOptions: NextAuthOptions = {
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
          const result = await AxiosInstance.post("/auth/login/google", {
            id_token: account?.id_token,
          });

          token.user = { ...result.data.data.user };
          token.token = result.data.data.token;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.token as string;
      session.user = token.user as User;

      return session;
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
              },
            }
          );

          const { data } = user.data;

          if (data) {
            return data;
          }

          return null;
        } catch (e) {
          console.error("Error in authorize:", e);
          return null;
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// export default handler;
