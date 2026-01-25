import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);

  if (!settings) {
    return {
      title: "Christoph Blenker",
      description: "Musiker",
    };
  }

  return {
    title: settings.title,
    description: settings.description,
    keywords: settings.keywords,
    openGraph: {
      title: settings.title,
      description: settings.description,
      images: settings.ogImage ? [{ url: urlFor(settings.ogImage).width(1200).height(630).url() }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: settings.title,
      description: settings.description,
      images: settings.ogImage ? [urlFor(settings.ogImage).width(1200).height(630).url()] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${roboto.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
