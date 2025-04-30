import { Session as NextAuthSession, User as NextAuthUser } from "next-auth";
import { JWT as NextAuthJwt } from "next-auth/jwt";

export interface CustomUser {
  id: string;
  name: string;
  title: string;
  avatar: string | null;
  email: string;
  role: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  is_oauth: boolean;
  oauth_provider: string | null;
  already_set_password: boolean;
}

declare module "next-auth" {
  interface User extends NextAuthUser {
    user: CustomUser;
    token: string;
  }
  interface Session extends NextAuthSession {
    user: CustomUser;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJwt {
    user: CustomUser;
    token: string;
  }
}
