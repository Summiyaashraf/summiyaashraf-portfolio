import type { Metadata, Viewport } from "next";
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

/* Pin the layout to the real device width so 320-430px phones render at their
   native width instead of a scaled-down 980px desktop canvas. Zoom stays
   user-controlled (no maximumScale) for accessibility. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07080c",
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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#7c3aed] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <CustomCursor />
          <AIAgentWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
