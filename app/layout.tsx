import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "✨ Ghiblify.ai - Transform Your Photos into Studio Ghibli Art",
  description:
    "Upload your images and transform them into beautiful Studio Ghibli style art",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'>✨</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${ptSans.variable} font-nunito antialiased relative theme`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="texture" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
