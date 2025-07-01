export const metadata = {
  title: "AutoFix | Reliable Auto Repair Shop",
  description:
    "AutoFix is your trusted local auto repair shop offering top-notch car services, parts, and expert mechanics. Fast, affordable, and reliable auto repair solutions.",
  keywords: [
    "auto repair shop",
    "car services",
    "mechanic near me",
    "car parts",
    "vehicle maintenance",
  ],
  openGraph: {
    title: "AutoFix | Your Trusted Auto Repair Partner",
    description:
      "AutoFix offers premium car maintenance, repair services, and parts with expert mechanics and great customer support.",
    url: "https://autofix-shop.vercel.app/",
    siteName: "AutoFix",
    images: [
      {
        url: "/images/herocover.jpg",
        width: 1200,
        height: 630,
        alt: "Auto repair shop hero image",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Services from "@/components/Services";
// import CarBrands from "@/components/CarBrands";
// import CarParts from "@/components/CarParts";
// import Location from "@/components/Location";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Services />
        <CarBrands />
        <CarParts />
        <Location />
        <ContactForm /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
