import React, { useState } from 'react';
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { CERTIFICATIONS_DATA, CredentialItem, COMPANY_INFO } from '../data/companyData';
import { FssaiLogo, ApedaLogo, SpicesBoardLogo, IsoLogo } from './CertificateLogos';

export const CertificationsSection: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);

  const renderLogo = (id: string, className?: string) => {
    switch (id) {
      case 'fssai':
        return <FssaiLogo className={className} />;
      case 'apeda':
        return <ApedaLogo className={className} />;
      case 'spices-board':
        return <SpicesBoardLogo className={className} />;
      case 'iso':
        return <IsoLogo className={className} />;
      default:
        return <ShieldCheck className="w-10 h-10 text-amber-700" />;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Compliance & Registrations
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Certifications & Registrations
          </h2>
          <p className="text-base text-stone-600">
            Official trade registrations and quality oversight frameworks aligned with Indian and international export protocols.
          </p>
        </div>

        {/* 4 Cards Grid with Official Certificate Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cred) => (
            <div
              key={cred.id}
              className="bg-white rounded-lg border border-stone-200 hover:border-amber-600/40 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                
                {/* Official Certificate Logo Display */}
                <div className="h-16 flex items-center justify-center bg-stone-50/80 rounded-md p-2 border border-stone-100">
                  {renderLogo(cred.id, "w-full h-12")}
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {cred.category}
                    </span>
                  </div>
                  <h3 className="font-serif-brand text-lg font-bold text-stone-900">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-500">
                    {cred.organization}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{cred.status}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCredential(cred)}
                  className="w-full py-2 px-3 text-xs font-semibold text-stone-800 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700" />
                  <span>View Credential Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Authenticity Compliance Note */}
        <div className="max-w-2xl mx-auto text-center p-4 bg-white rounded-lg border border-stone-200/80">
          <p className="text-xs text-stone-600">
            For buyer due-diligence, authenticated certificate copies and registration certificates can be provided upon direct request by writing to{' '}
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-amber-800 font-medium underline">
              {COMPANY_INFO.contact.email}
            </a>.
          </p>
        </div>

      </div>

      {/* Credential Lightbox Modal */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="relative bg-white rounded-xl max-w-lg w-full shadow-2xl overflow-hidden border border-stone-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedCredential(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Official Logo Banner in Lightbox */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-center">
              {renderLogo(selectedCredential.id, "w-full h-14")}
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 block">
                Official Credential Record
              </span>
              <h3 className="font-serif-brand text-2xl font-bold text-stone-900">
                {selectedCredential.title}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                {selectedCredential.organization}
              </p>
            </div>

            <div className="space-y-3 text-sm text-stone-700">
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider block">Scope & Oversight:</span>
                <p className="text-stone-600 leading-relaxed text-xs">{selectedCredential.description}</p>
              </div>

              {/* Strict placeholder notice in compliance with prompt guidelines */}
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                  Document Verification
                </span>
                <p className="text-xs text-stone-600 leading-relaxed italic">
                  "{selectedCredential.documentPlaceholder}"
                </p>
                <p className="text-[11px] text-stone-500 pt-1">
                  In strict accordance with enterprise authenticity standards, official registration documents and certificate numbers are shared directly with verified trade partners upon commercial inquiry.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${COMPANY_INFO.contact.email}?subject=Inquiry%20regarding%20${encodeURIComponent(selectedCredential.title)}%20Credentials`}
                className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Certified Copy</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                className="py-2.5 px-4 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
