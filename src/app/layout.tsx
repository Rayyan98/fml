import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "four minute thoughts",
    template: "%s — four minute thoughts",
  },
  description: "Short reads about tech, life, and ideas.",
  metadataBase: new URL("https://fourminutes.life"),
  openGraph: {
    title: "four minute thoughts",
    description: "Short reads about tech, life, and ideas.",
    url: "https://fourminutes.life",
    siteName: "four minute thoughts",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="mx-auto max-w-2xl px-6">
          <Header />
          <main className="min-h-[60vh] py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
