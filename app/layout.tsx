import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Ong",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b101e"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" href="/favicon/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
