import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // proper import
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mian Saad Tahir",
  description: "Computer Science Student - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}
