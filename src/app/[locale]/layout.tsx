import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider, useMessages} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  const messages = useMessages();
  return (

    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="../../../static/plugin/bootstrap.min.css"/>
        <link rel="stylesheet" href="../../../static/plugin/style.css"/>
        <link rel="stylesheet" href="../../../static/plugin/themify-icons.css"/>
        <link rel="stylesheet" href="../../../static/plugin/owl.carousel.min.css"/>
        <link rel="stylesheet" href="../../../static/plugin/magnific-popup.css"/>
        <link rel="stylesheet" href="../../../static/plugin/master.css"/>
      </head>
      <body className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}