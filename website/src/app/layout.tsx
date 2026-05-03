import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varindit Upkram Pvt Ltd | Life Meets Luxury",
  description:
    "Ultra-luxurious 4 BHK floors in Panchkula. Premium construction with top brands like Grohe, Kone, Italian Marble. Life Meets Luxury.",
  keywords:
    "luxury apartments, 4 BHK, Panchkula, real estate, ultra luxury floors, Varindit Upkram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
