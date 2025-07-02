import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Multiple Root Layouts",
  description: "A Next.js app demonstrating multiple root layouts",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }} >
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor: "lightgreen",
          padding: "1rem",
        }} >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
