import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/component/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The TechNova Summit",
  description:
    "TechNova, under DTCSI Academy, is a dynamic platform for tech enthusiasts to connect, learn, and innovate. We empower individuals to unlock their potential, spark creativity, and shape the future of technology in Africa.",
  applicationName: "The TechNova Summit",
  keywords:
    "Tech Conference, Event Venue, Workshops, Networking Events, Technology Events, Tech Summit, Innovation Hub, Tech Enthusiasts, DTCSI Academy",
  authors: [{ name: "TechNova" }],
  creator: "TechNova Team",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "The TechNova Summit | Tech Event",
    description:
      "TechNova, under DTCSI Academy, is a dynamic platform for tech enthusiasts to connect, learn, and innovate. We empower individuals to unlock their potential, spark creativity, and shape the future of technology in Africa.",
    url: "https://technovasummit.com",
    type: "website",
    siteName: "The TechNova Summit",
    locale: "en_US",
    images: [
      {
        url: "https://technovasummit.com/TechNova-Summit-OG.jpg",
        width: 1200,
        height: 630,
        alt: "TechNova Tech Event Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova Summit | Tech Event",
    description:
      "Experience cutting-edge technology events at The TechNova Summit, the premier venue for tech enthusiasts.",
    images: ["https://technovasummit.com/TechNova-Summit-OG.jpg"],
  },
  metadataBase: new URL("https://technovasummit.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
