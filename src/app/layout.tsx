import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Poppins, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Thoburn",
  description: "Portfolio of James Thoburn, an aspiring software engineer, aspiring data scientist and current Mathematics student at Durham University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body 
        className={`${font.className} antialiased bg-[#ffffff] overflow-y-scroll`}
      >
        <Navbar/>
        <main className="pt-18 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
