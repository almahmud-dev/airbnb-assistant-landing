import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "PropEase – Smart Property Management Platform",
  description:
    "Manage property listings, customer bookings, house cleaning schedules, guest reviews, and expenses — all in one place.",
  keywords: [
    "property management",
    "booking management",
    "short term rental",
    "airbnb management",
    "guest support",
  ],
  authors: [{ name: "PropEase Team" }],
  openGraph: {
    title: "PropEase – Smart Property Management Platform",
    description:
      "All-in-one platform to manage your rental properties professionally.",
    url: "https://yourdomain.com",
    siteName: "PropEase",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PropEase – Smart Property Management Platform",
    description:
      "All-in-one platform to manage your rental properties professionally.",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className={dmSans.className} suppressContentEditableWarning>
        <SmoothScroll>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}