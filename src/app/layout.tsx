import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer} from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className ="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className = "min-h-screen flex flex-col w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2] px-44">
        <Header></Header>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
