"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { VideoCarousel } from "@/components/video-carousel";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <VideoCarousel />
        <CTASection />
      </main>
    </>
  );
}
