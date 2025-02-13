import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities | Focus Learning Bali",
  description: "",
  icons: "../assets/icon.svg",
};

export default function FacilitiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
