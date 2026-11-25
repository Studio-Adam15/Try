import React from 'react';
import { Palette, Layers, Sparkles, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { BRAND_VALUES } from '../data/istatiehData';
import { ScrollTextReveal, AnimatedSection } from './MotionPrimitives';

interface WhyIstatiehProps {
  language: Language;
}

export const WhyIstatieh: React.FC<WhyIstatiehProps> = ({ language }) => {
  const icons = [
    <Palette key="1" className="w-5 h-5 text-[#B6975B]" aria-hidden="true" />,
    <Layers key="2" className="w-5 h-5 text-[#B6975B]" aria-hidden="true" />,
    <Sparkles key="3" className="w-5 h-5 text-[#B6975B]" aria-hidden="true" />,
    <UserCheck key="4" className="w-5 h-5 text-[#B6975B]" aria-hidden="true" />,
  ];

  return (
    <section
      id="why-istatieh"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4A101B] text-[#F5EFE4] relative overflow-hidden border-y border-[#B6975B]/25"
    >
      {/* Ambient Radial Illumination behind Glass Cards */}
      <div
        aria-hidden="true"
        className="absolute -top-24 start-1/3 w-96 h-96 rounded-full bg-[#B6975B]/16 blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 end-1/4 w-80 h-80 rounded-full bg-[#2A0B10]/80 blur-[100px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
            {language === 'ar' ? 'قيم العمل والجودة' : 'WHY ISTATIEH DECOR?'}
          </span>
          <ScrollTextReveal
            as="h2"
            key={`why-heading-${language}`}
            text={language === 'ar' ? 'معايير الدقة والذوق الرفيع' : 'Craftsmanship & Personalized Care'}
            className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] ${
              language === 'ar' ? 'font-arabic-luxury' : ''
            }`}
          />
          <p className="text-xs sm:text-sm text-[#F5EFE4]/85 font-arabic-luxury mt-3 leading-relaxed">
            {language === 'ar'
              ? 'نحرص على تقديم خدمة متكاملة تنطلق من تلبية رغباتكم وتضمن نتيجة تليق ببيوتكم ومكاتبكم.'
              : 'Dedicated to helping homeowners and designers realize their vision through authentic materials and precise tailoring.'}
          </p>
        </div>

        {/* 4 Frosted Glass Pillar Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BRAND_VALUES.map((val, idx) => (
            <AnimatedSection key={val.number} delay={idx * 0.06}>
              <article className="glass-panel-dark h-full rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="glass-chip-dark w-11 h-11 rounded-xl flex items-center justify-center">
                      {icons[idx]}
                    </div>
                    <span
                      dir="ltr"
                      style={{ unicodeBidi: 'isolate' }}
                      className="font-mono tabular-nums text-xl font-bold text-[#B6975B]"
                    >
                      {val.number}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#FFFDF8] mb-2.5 leading-snug">
                    {language === 'ar' ? val.titleAr : val.titleEn}
                  </h3>

                  <p className="text-xs text-[#F5EFE4]/82 font-arabic-luxury leading-relaxed">
                    {language === 'ar' ? val.descAr : val.descEn}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
