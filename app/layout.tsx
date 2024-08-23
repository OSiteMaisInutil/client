import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Hanken_Grotesk } from "next/font/google";
import module from "./layout.module.scss";
import Script from "next/script";

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Site Mais Inútil",
  description: "Seja bem-vind@ ao site mais inútil da internet",
  other: {
    "google-adsense-account": "ca-pub-7303180265058367",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Script
        async
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7303180265058367"
        crossOrigin="anonymous"
      ></Script>
      <body className={`${HankenGrotesk.className} ${module.content}`}>
        {children}
      </body>
    </html>
  );
}
