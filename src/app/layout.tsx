import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"
import "./globals.css";

import { Mulish } from 'next/font/google';
import Header from "@/components/Header";
import Home from "@/components/test-y-reunion-components/Home";
import TestInfo from "@/components/test-y-reunion-components/TestInfo";
import ReunionPersonalizada from "@/components/test-y-reunion-components/ReunionPersonalizada";
import Footer from "@/components/Footer";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-mulish',
});

export const metadata = {
  title: 'Campaigns NormaPro',
  description: 'Landing de campañas NormaPro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${mulish.variable}`}>


        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-694VJSPX6Z"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-694VJSPX6Z', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
