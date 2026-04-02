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
  title: "Pipeworks — Software so good it feels like magic",
  description:
    "Construction software designed by contractors, for contractors. Join the waitlist.",
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
