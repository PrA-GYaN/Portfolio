import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from 'next/font/google'

 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pragyan KC",
  description: "Protfolio Website created by Pragyan KC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
