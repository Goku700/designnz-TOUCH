import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; // Import fonts
import "./globals.css";


import { CustomCursor } from "@/components/CustomCursor";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

// Configure fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Designrz TOUCH",
  description:
    "Designrz Touch is a full-service advertising, branding & digital marketing agency delivering strategy-led creative and measurable growth.",
  openGraph: {
    title: "Designrz TOUCH",
    description:
      "Branding, advertising, web and digital marketing campaigns that turn businesses into recognizable brands.",
    url: "https://designrztouch.example.com",
    siteName: "Designrz TOUCH",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        <CustomCursor />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}

