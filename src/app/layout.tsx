import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConqolX Technologies — Building Africa's Future",
  description:
    "Conqol-X Technologies Limited — explorers, inventors, and builders designing solutions that turn bold ideas into everyday tools for Africa and the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen bg-[#060912] text-white">{children}</body>
    </html>
  );
}
