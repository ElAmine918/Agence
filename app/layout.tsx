import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/Cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agence — AI Workflow Automation",
  description:
    "From idea to automation, powered by AI. Automate your workflows, eliminate repetitive tasks, and scale faster with powerful AI tools.",
  metadataBase: new URL("https://agence.dev"),
  openGraph: {
    title: "Agence — AI Workflow Automation",
    description:
      "Automate your workflows, eliminate repetitive tasks, and scale faster with powerful AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased cursor-none`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] cursor-none">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
