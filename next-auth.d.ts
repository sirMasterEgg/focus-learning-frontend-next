import { Session as Sess, User as Usr } from "next-auth";

declare module "next-auth" {
  interface Session extends Sess {
    user: User;
    token: string;
  }
  interface User extends Usr {
    user: {
      id: string;
      email: string;
      email_verified_at: string | null;
      role: string;
      created_at: string;
      updated_at: string;
    };
    token: string;
  }
  interface JWT extends User {}
}
