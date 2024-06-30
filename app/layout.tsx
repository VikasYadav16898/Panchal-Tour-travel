import type { Metadata } from "next";
import { Inter, Montserrat, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Panghal Tour & Travels",
  description:
    "Choose from a diverse fleet of well-maintained vehicles including Kia Carens, Fronx, Maruti Desire, Ertiga, Innova, and many more. Serving customers since 2007, we pride ourselves on providing exceptional service around the clock, 24/7. Whether you're planning a short trip or a long journey, Panghal Tour and Travels is your go-to choice for safe, punctual, and pleasant rides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${robotoMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
