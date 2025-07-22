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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#10b981',
  colorScheme: 'light',
  openGraph: {
    title: "Media Informasi Persampahan - Sendari, Mlati, Sleman",
    description: "Panduan lengkap pemilahan sampah untuk masyarakat Sendari, Mlati, Sleman",
    url: 'https://media-informasi-sampah.vercel.app',
    siteName: 'Media Informasi Persampahan',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Media Informasi Persampahan - Sendari, Mlati, Sleman",
    description: "Panduan lengkap pemilahan sampah untuk masyarakat Sendari, Mlati, Sleman",
  },
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
