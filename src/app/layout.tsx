import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyBest from "@/components/WhyBest";
import CourseList from "@/components/CourseList";
import Testimonials from "@/components/Testimonials";
import PartnerLogos from "@/components/PartnerLogos";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Molakisi Services",
  description: "Nous connectons les élèves et apprenant adultes aux meilleurs répétiteurs du monde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
