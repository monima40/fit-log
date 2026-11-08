import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Oswald } from "next/font/google";
import { Suspense } from "react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Build your workout routine with FitLog. Explore exercises, track your daily fitness goals, save your favorite workouts, and stay consistent on your  journey.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Suspense fallback={<div className="h-[80px]" />}>
  <Navbar />
</Suspense>
         <main className="min-h-[60vh]">{children}</main>
        <Footer/> 
      <Toaster
  position="top-right"
  toastOptions={{
    duration: 2500,
    style: {
      background: "#1c1f26",
      color: "#ffffff",
      border: "1px solid #c6ff00",
      borderRadius: "12px",
      padding: "14px 18px",
      fontSize: "14px",
    },
    success: {
      iconTheme: {
        primary: "#c6ff00",
        secondary: "#000000",
      },
    },
  }}
/>
       </body>
    </html>
  );
}
