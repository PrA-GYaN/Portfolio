import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Pragyan KC | Full-Stack Developer Portfolio",
  description: "Portfolio website showcasing projects built with React, Next.js, Django, and more.",
  keywords: "Pragyan KC, portfolio, full-stack developer, React, Next.js, Django, web development",
  openGraph: {
    title: "Pragyan KC | Full-Stack Developer Portfolio",
    description: "Explore Pragyan KC's web development projects and expertise in full-stack development.",
    // images: ["/path-to-thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} theme-light`}>
        {children}
        <Analytics />
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>
    </html>
  );
}