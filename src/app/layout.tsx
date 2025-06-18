import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/app/_components/auth/SessionProvider";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/app/_components/utils/TanstackQueryProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
            <Analytics />
            <SpeedInsights />
          </body>
        </html>
      </SessionWrapper>
    </ReactQueryProvider>
  );
}
