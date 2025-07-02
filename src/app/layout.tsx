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
  title: "Media Informasi Persampahan - Sendari, Mlati, Sleman",
  description: "Panduan lengkap pemilahan sampah untuk masyarakat Sendari, Mlati, Sleman. Pelajari cara memilah sampah organik, anorganik, B3, dan residu dengan benar.",
  keywords: "sampah, pemilahan sampah, Sendari, Mlati, Sleman, lingkungan, daur ulang, organik, anorganik",
  authors: [{ name: "KKN Universitas" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
