import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Hanken_Grotesk } from "next/font/google";
import module from "./layout.module.scss";

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Site Mais Inútil",
  description: "Seja bem-vind@ ao site mais inútil da internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${HankenGrotesk.className} ${module.content}`}>
        {children}
      </body>
    </html>
  );
}
