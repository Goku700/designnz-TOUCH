import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

