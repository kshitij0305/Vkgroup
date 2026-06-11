import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VK Solar Group - Premium Solar Energy Solutions for Your Home",
  description:
    "Transform your home with VK Solar Group's premium solar energy solutions. Reduce electricity bills 100% with our 25-year warranty solar panels. Free consultation available.",
  keywords:
    "solar panels, solar energy, residential solar, solar installation, electricity savings, renewable energy, Delhi solar, VK Solar Group",
  authors: [{ name: "VK Solar Group" }],
  openGraph: {
    title: "VK Solar Group - Premium Solar Energy Solutions",
    description:
      "Reduce your electricity bills 100% with our premium solar solutions. 25-year warranty included.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
