import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Focus Learning Bali",
  description: "",
  icons: "../assets/icon.svg",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
