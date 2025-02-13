import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Focus Learning Bali",
  description: "",
  icons: "../assets/icon.svg",
};

export default function DonateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
