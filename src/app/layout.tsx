import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const drukWideBold = localFont({
  src: "./fonts/DrukWideBold.ttf",
  variable: "--font-druk",
});

export const metadata = {
  title: "Pipeworks — Magical Sales Tools",
  description:
    "Focused tools built to radically grow your business. Join the waitlist.",
  metadataBase: new URL("https://pipeworks.io"),
  icons: {
    icon: "/wizard-icon.png",
    apple: "/wizard-icon.png",
  },
  openGraph: {
    title: "Pipeworks — Magical Sales Tools",
    description:
      "Focused tools built to radically grow your business. Join the waitlist.",
    url: "https://pipeworks.io",
    siteName: "Pipeworks",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pipeworks — Magical Sales Tools",
    description:
      "Focused tools built to radically grow your business. Join the waitlist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${drukWideBold.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
