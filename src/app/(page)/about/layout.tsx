import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Focus Learning Bali",
  description: "",
  icons: "../assets/icon.svg",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
