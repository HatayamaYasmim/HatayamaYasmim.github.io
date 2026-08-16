import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Yasmim | Desenvolvedora Full Stack",

  description:
    "Portfólio profissional de Yasmim, Desenvolvedora Full Stack.",

  keywords: [
    "Full Stack",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Next.js",
    "Desenvolvedora",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}