import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/app/_components/auth/SessionProvider";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/app/_components/utils/TanstackQueryProvider";

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
    <ReactQueryProvider>
      <SessionWrapper>
        <html lang="en">
          <body>
            {children}
            <Toaster />
          </body>
        </html>
      </SessionWrapper>
    </ReactQueryProvider>
  );
}
