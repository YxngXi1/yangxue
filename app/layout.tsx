import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInitializer } from "@/components/AOSInitializer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yang Xue",
  description: "i like doing front-end but as a professional dabbler i too enjoy to invest myself within ai/ml.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-14GX62C2YX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-14GX62C2YX');
          `}
        </script>
      </Head>
      <AOSInitializer/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
