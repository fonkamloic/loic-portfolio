import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Spotlight from "@/components/spotlight";
import SideSocials from "@/components/side-socials";
import "simplebar-react/dist/simplebar.min.css";
import { seoInformation } from "./data";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL(seoInformation.url),
  title: {
    default: seoInformation.title,
    template: `%s | Loïc Fonkam`,
  },
  description: seoInformation.description,
  keywords: seoInformation.keywords,
  authors: [{ name: "Loïc Fonkam", url: seoInformation.url }],
  creator: "Loïc Fonkam",
  openGraph: {
    title: seoInformation.title,
    description: seoInformation.description,
    type: "website",
    locale: "en_US",
    url: seoInformation.url,
    siteName: "Loïc Fonkam",
    images: [
      {
        url: seoInformation.image,
        width: 1200,
        height: 630,
        alt: seoInformation.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoInformation.title,
    description: seoInformation.description,
    creator: "@FonkamL",
    images: [seoInformation.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: seoInformation.url,
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
        <link rel="icon" href="/images/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/images/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-secondary font-sans antialiased dark text-foreground",
          fontSans.variable,
        )}
      >
        <Spotlight />
        <SideSocials />
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
