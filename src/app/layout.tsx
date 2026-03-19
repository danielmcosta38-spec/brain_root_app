import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#5C6FF5",
};

export const metadata: Metadata = {
  title: "BrainBreak",
  description: "Replace mindless scrolling with effortless micro-habits",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "BrainBreak",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {/* Mobile wrapper — centered, max 390px */}
        <div style={{ height: "100dvh", display: "flex", justifyContent: "center", background: "#D8DCFF", overflow: "hidden" }}>
          <div style={{ width: "100%", maxWidth: "390px", height: "100dvh", background: "#FAFAF8", position: "relative", overflowY: "auto", boxShadow: "0 0 40px rgba(0,0,0,0.15)" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
