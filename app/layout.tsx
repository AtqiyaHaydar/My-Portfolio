import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/three/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atqiya Haydar",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[rgb(3,0,20)] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <StarsCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
