import React, { useState } from 'react';
import {
  Sprout,
  SearchCheck,
  Sparkles,
  SlidersHorizontal,
  PackageCheck,
  Ship,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PROCESSING_STAGES, QUALITY_COMMITMENT } from '../data/companyData';

export const QualityProcessingSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const getStageIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sprout className="w-5 h-5" />;
      case 1:
        return <SearchCheck className="w-5 h-5" />;
      case 2:
        return <Sparkles className="w-5 h-5" />;
      case 3:
        return <SlidersHorizontal className="w-5 h-5" />;
      case 4:
        return <PackageCheck className="w-5 h-5" />;
      case 5:
        return <Ship className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const activeStage = PROCESSING_STAGES[activeStageIndex];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Standards & Traceability
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Quality & Processing
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            From careful sourcing to export-ready packaging.
          </p>
        </div>

        {/* 6-Stage Timeline */}
        <div className="space-y-8">
          
          {/* Desktop Horizontal Timeline Stepper */}
          <div className="hidden lg:grid grid-cols-6 gap-2 border-b border-stone-200 pb-4">
            {PROCESSING_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-3 rounded-lg transition-all border ${
                    isActive
                      ? 'bg-[#0F291E] text-white border-[#0F291E] shadow-sm'
                      : 'bg-[#FAF8F5] text-stone-700 border-stone-200/80 hover:border-amber-600/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-amber-300' : 'text-stone-400'}`}>
                      {stage.step}
                    </span>
                    <span className={isActive ? 'text-amber-300' : 'text-stone-500'}>
                      {getStageIcon(idx)}
                    </span>
                  </div>
                  <h4 className="font-serif-brand text-xs font-bold tracking-wider truncate">
                    {stage.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight Box */}
          <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Stage Description & Focus */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-amber-700 bg-amber-100/70 px-3 py-1 rounded">
                      Stage {activeStage.step}
                    </span>
                    <div className="h-6 w-px bg-stone-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Processing Pipeline
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
                    {activeStage.title}
                  </h3>

                  <p className="text-base text-stone-700 leading-relaxed">
                    {activeStage.description}
                  </p>

                  <div className="p-4 bg-white rounded-lg border border-stone-200 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F291E] block">
                      Quality Control Objective:
                    </span>
                    <p className="text-sm text-stone-600 font-medium">
                      {activeStage.focus}
                    </p>
                  </div>
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-200/80">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    className="py-2 px-4 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
                  >
                    Previous Stage
                  </button>

                  <span className="text-xs font-mono text-stone-500">
                    {activeStageIndex + 1} of {PROCESSING_STAGES.length}
                  </span>

                  <button
                    type="button"
                    disabled={activeStageIndex === PROCESSING_STAGES.length - 1}
                    onClick={() => setActiveStageIndex((prev) => Math.min(PROCESSING_STAGES.length - 1, prev + 1))}
                    className="py-2 px-4 text-xs font-semibold text-white bg-[#0F291E] rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#16382B]"
                  >
                    Next Stage
                  </button>
                </div>
              </div>

              {/* Processing Visual Showcase */}
              <div className="lg:col-span-5 relative bg-stone-900 min-h-[300px]">
                <img
                  src={
                    activeStageIndex >= 4
                      ? "/src/assets/images/export_packaging_1790319011456.jpg"
                      : "/src/assets/images/processing_facility_1790318998511.jpg"
                  }
                  alt={`Raviraj Spices Exports ${activeStage.title} facility and handling`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 block">
                    Export Processing Facility
                  </span>
                  <p className="text-xs text-stone-300">
                    {activeStageIndex >= 4
                      ? "Heavy-duty export container pallets and moisture-barrier packaging."
                      : "Stainless steel inspection and sanitary spice sorting operations."}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Vertical Process Timeline */}
          <div className="lg:hidden space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block text-center mb-2">
              Browse All 6 Processing Stages:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {PROCESSING_STAGES.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-2.5 rounded text-left border text-xs flex items-center justify-between ${
                    idx === activeStageIndex
                      ? 'bg-[#0F291E] text-white border-[#0F291E]'
                      : 'bg-white text-stone-800 border-stone-200'
                  }`}
                >
                  <span className="font-semibold">{s.step}. {s.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Commitment to Quality (4 Elegant Cards) */}
        <div className="pt-8 border-t border-stone-200 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
              Core Principles
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
              Our Commitment to Quality
            </h3>
            <p className="text-sm text-stone-600">
              Rigorous agricultural practices applied across procurement, evaluation, cleaning, and dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_COMMITMENT.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200/90 space-y-3 hover:border-amber-700/30 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-[#0F291E]/10 text-[#0F291E] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif-brand text-base font-bold text-stone-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
