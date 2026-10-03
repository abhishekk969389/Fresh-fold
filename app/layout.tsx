import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/homelayout/navbar";
import Footer from "@/app/components/homelayout/footer";
import SmoothScroll from "./components/ui/smoothscroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FreshFold Laundry & Dry Cleaning",
  description: "Premium Laundry & Dry Cleaning Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={`${plusJakartaSans.className} h-auto min-h-screen flex flex-col font-sans antialiased text-[#0b2d4a]`}>
        <Navbar />
        <SmoothScroll>
          <div className="pt-[126px] flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
// trigger rebuild
