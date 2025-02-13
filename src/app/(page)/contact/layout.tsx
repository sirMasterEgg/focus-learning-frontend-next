import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Focus Learning Bali",
  description: "",
  icons: "../assets/icon.svg",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
