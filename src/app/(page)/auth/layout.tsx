import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "",
  icons: "../assets/icon.svg",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return <>{children}</>;
}
