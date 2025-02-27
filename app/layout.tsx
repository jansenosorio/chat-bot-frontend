import type { Metadata } from "next";
import { Manrope, Sigmar } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sigmar = Sigmar({
  weight: ["400"],
  variable: "--font-sigmar",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jansen Chatbot",
  description: "A conversational AI application to assist users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sigmar.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
