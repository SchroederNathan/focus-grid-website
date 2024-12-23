import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focus Grid",
  description:
    "Focus Grid is a productivity tool that helps you focus on your tasks and get things done.",
  icons: {
    icon: "/focusgridlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-lexend antialiased bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
