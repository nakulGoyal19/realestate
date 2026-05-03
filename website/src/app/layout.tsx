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
      <body>{children}</body>
    </html>
  );
}
