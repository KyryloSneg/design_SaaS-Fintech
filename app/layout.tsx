import type { Metadata } from "next";
import { Manrope, Figtree, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

// main font
const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

// instead of Circular Std
const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["600", "700"],
  subsets: ["latin"],
});

// instead of Gilroy
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS-Fintech",
  description:
    "Manage business payments with massive customer support. Lead projects, develop business, create web & mobile apps, make creative designs and even more with our professional services. Original design by AR Shakir",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${figtree.variable} ${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
