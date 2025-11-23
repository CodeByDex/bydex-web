import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByDex",
  description: "Professional portfolio showcasing web development and pottery work",
  keywords: [
    "ByDex", "Made By Dex", "Dex", "Ryan Spath", "Findlay Ohio", "Web Development",
    "Pottery", "Knitting", "Fiber Arts", "Sewing", "LGBTQ+"
  ],
  authors: [{ name: "Ryan Spath", url: "https://github.com/CodeByDex" }],
  alternates: {
    languages: {
      "en-US": "https://bydex.co",
    },
  },
  openGraph: {
    title: "ByDex",
    description: "Professional portfolio showcasing web development and pottery work",
    url: "https://bydex.co",
    siteName: "ByDex",
    images: [
      {
        url: "/branding/Makers Mark.png",
        width: 800,
        height: 600,
        alt: "ByDex Logo",
      },
      ]
  },
  icons: {
    icon: "/branding/Makers Mark Icon.png",
  },
  metadataBase: new URL("https://bydex.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
