import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CocktailsProvider } from "@/shared/store/cocktails/context";
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
  title: "Cocktails App",
  description: "Find your favorite cocktail recipes",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/favicon.ico",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CocktailsProvider>{children}</CocktailsProvider>
      </body>
    </html>
  );
}
