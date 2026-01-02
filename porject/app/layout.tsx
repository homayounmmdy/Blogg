import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteConfig from "./config/site";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="light">
    <body className={`${inter.className} bg-base-100`}>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  );
}
