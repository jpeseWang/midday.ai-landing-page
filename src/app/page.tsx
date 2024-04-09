import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import dashboardImg from "@/assets/images/screen-5.webp";
import Dock from "@/components/Dock";
import DashboardGallery from "@/components/DashboardGallery";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <DashboardGallery />
      <Dock />
      <Feature />
      <Footer />
    </div>
  );
}
