import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/app/_components/auth/SessionProvider";

export const metadata: Metadata = {
  title: "Focus Learning Bali",
  description: "",
  icons: "./assets/icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionWrapper>
  );
}
