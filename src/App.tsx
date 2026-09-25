import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ProductsSection } from './components/ProductsSection';
import { QualityProcessingSection } from './components/QualityProcessingSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AwardsSection } from './components/AwardsSection';
import { ExportMarketsSection } from './components/ExportMarketsSection';
import { GallerySection } from './components/GallerySection';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>('Red Chillies');

  const handleOpenQuote = (productName?: string) => {
    if (productName) {
      setSelectedProductForInquiry(productName);
    }
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-amber-800 selection:text-white flex flex-col font-sans">
      {/* Sticky Responsive Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Trust Highlights (Immediately Below Hero) */}
        <TrustHighlights />

        {/* 3. About Raviraj Spices Exports */}
        <AboutSection />

        {/* 4. Leadership Section */}
        <LeadershipSection />

        {/* 5. Products Section & Specifications */}
        <ProductsSection onOpenQuote={handleOpenQuote} />

        {/* 6. Quality & Processing (6 Stages + Commitment) */}
        <QualityProcessingSection />

        {/* 7. Certifications & Registrations */}
        <CertificationsSection />

        {/* 8. Awards & Recognition */}
        <AwardsSection />

        {/* 9. Export Markets & Logistics Gateways */}
        <ExportMarketsSection onOpenQuote={() => handleOpenQuote()} />

        {/* 10. Company Gallery */}
        <GallerySection />

        {/* 11. Request a Quote (B2B Inquiry Form) */}
        <InquirySection
          initialProduct={selectedProductForInquiry}
          onClearInitialProduct={() => setSelectedProductForInquiry('Red Chillies')}
        />

        {/* 12. Contact Section & Verified Google Maps */}
        <ContactSection />
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
