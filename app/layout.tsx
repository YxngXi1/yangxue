import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInitializer } from "@/components/AOSInitializer";

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
      <AOSInitializer/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
