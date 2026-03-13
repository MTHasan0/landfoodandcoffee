import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tektur } from "next/font/google";

import "./globals.css";
import Navbar from "./Navbar/page";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee",
  description: "A product of ABCD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${tektur.variable}  antialiased w-full  ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        {children}

      </body>

    </html>
  );
}
