import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dhruvi's Portfolio",
  description: "Welcome to Dhruvi Patel's personal portfolio.",
  icons: {
    icon: "/images/letter-d.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/images/letter-d.png" />
        <title>Dhruvi&apos;s Portfolio</title>
      </Head>
      <body>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
