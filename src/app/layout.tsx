import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer"; // ✅ Import Footer
import { CustomCursor } from "@/components/CustomCursor";
import { AIAgentWidget } from "@/components/AIAgentWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summiya's Portfolio",
  description: "Created with Next.js 15, Tailwind CSS, ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main> 
          <Footer />
          <CustomCursor />
          <AIAgentWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
