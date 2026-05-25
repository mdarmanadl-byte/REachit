"use client";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ImpactSection from './components/ImpactSection';
import ExamplesSection from './components/ExamplesSection';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#020611] text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ImpactSection />
      <ExamplesSection />
      <MediaSection />
      <AboutSection />
      <Footer />
    </main>
  );
}