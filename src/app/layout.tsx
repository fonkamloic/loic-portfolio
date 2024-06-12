import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import "simplebar-react/dist/simplebar.min.css";
import { seoInformation } from "./data";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: seoInformation.title,
  description: seoInformation.description,
  keywords: seoInformation.keywords,
  openGraph: {
    title: seoInformation.title,
    description: seoInformation.description,
    type: "website",
    locale: "en_US",
    url: seoInformation.url,
    images: [
      {
        url: seoInformation.image,
        width: 1200,
        height: 630,
        alt: seoInformation.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/images/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-secondary font-sans antialiased dark text-foreground",
          fontSans.variable,
        )}
      >
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
