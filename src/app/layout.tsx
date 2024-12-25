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
    icon: "/images/logo.svg",
  },
  openGraph: {
    title: "Focus Grid",
    description:
      "Focus Grid is a productivity tool that helps you focus on your tasks and get things done.",
    url: "https://focusgridapp.com", 
    siteName: "Focus Grid",
    images: [
      {
        url: "https://focusgridapp.com/images/focusgrid-preview.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Focus Grid Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Grid",
    description:
      "Focus Grid is a productivity tool that helps you focus on your tasks and get things done.",
    images: ["https://focusgridapp.com/images/focusgrid-preview.png"], // Replace with your actual image URL
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
