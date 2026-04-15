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
  title: "Pipeworks — Sales software for the trades",
  description:
    "Quoting, proposals, and follow-up on any device. Built by contractors, for contractors. Join the waitlist.",
  metadataBase: new URL("https://pipeworks.io"),
  icons: {
    icon: "/wizard-icon.png",
    apple: "/wizard-icon.png",
  },
  openGraph: {
    title: "Pipeworks — Sales software for the trades",
    description:
      "Quoting, proposals, and follow-up on any device. Built by contractors, for contractors. Join the waitlist.",
    url: "https://pipeworks.io",
    siteName: "Pipeworks",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pipeworks — Sales software for the trades",
    description:
      "Quoting, proposals, and follow-up on any device. Built by contractors, for contractors. Join the waitlist.",
  },
  other: {
    "theme-color": "#fafafa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${drukWideBold.variable}`} style={{ colorScheme: "light" }}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
