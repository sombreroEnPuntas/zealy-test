import type { Metadata } from "next";
import Head from 'next/head'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patito",
  description: "Take home test for Zealy.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- https://medium.com/web-dev-survey-from-kyoto/favicon-nightmare-how-to-maintain-sanity-7628bfc39918 --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
