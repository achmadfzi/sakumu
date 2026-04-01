import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import N8nChat from './components/N8nChat';
import ScrollToTop from './components/ScrollToTop';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <Pricing />
      <FAQ />
      <Footer />
      <N8nChat />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
