import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ASDL - Advanced Semiconductor and Display Lab',
  description: 'Advanced Semiconductor and Display Lab at IIT Mandi, Mandi',
  icons: {
    icon: '/Untitled8-1.png',
    shortcut: '/Untitled8-1.png',
    apple: '/Untitled8-1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
