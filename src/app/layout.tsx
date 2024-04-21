import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RM Books',
  description: 'Read more bookstore for Books. Listed by Title, Author, and Price.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
