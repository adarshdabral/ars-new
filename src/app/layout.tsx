// src/app/layout.tsx
import "../app/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "ARS - The Art Gallery",
  description: "Buy awesome products online!",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
