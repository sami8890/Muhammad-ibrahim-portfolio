import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ibrahim", 
  description: "SEO-Content Writer, Digital Marketer, and Web Developer",
  openGraph: {
    title: "Muhammad Ibrahim",
    description: "SEO-Content Writer, Digital Marketer, and Web Developer",
    url: "https://muhammadibrahim.dev",
    siteName: "Muhammad Ibrahim",
    images: [
      {
        url: "https://muhammadibrahim.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ibrahim",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
