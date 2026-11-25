import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { MATERIAL_STORIES } from '../data/istatiehData';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal, AnimatedSection } from './MotionPrimitives';

interface MaterialStoriesProps {
  language: Language;
}

export const MaterialStories: React.FC<MaterialStoriesProps> = ({ language }) => {
  return (
    <section
      id="materials-gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] relative overflow-hidden"
    >
      {/* Subtle Ambient Aura Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 start-1/2 -translate-x-1/2 w-[520px] h-72 rounded-full bg-[#B6975B]/10 blur-[130px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'قصص الخامات والنسيج' : 'MATERIAL STORIES — CLOSE-UP GALLERY'}
            </span>
            <ScrollTextReveal
              as="h2"
              key={`materials-heading-${language}`}
              text={
                language === 'ar'
                  ? 'جمالية الملمس وعمق الألوان'
                  : 'The Tactile Poetry of Weave & Surface'
              }
              className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-tight ${
                language === 'ar' ? 'font-arabic-luxury' : ''
              }`}
            />
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/78 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'نظرة مقربة على دقة حياكة الأقمشة ونقوش الجدران البارزة التي تحول غرفكم إلى واحات من الراحة والجمال.'
              : 'Macro perspectives highlighting the fine grain of European wallpapers and the tailored structure of custom curtain weaves.'}
          </p>
        </div>

        {/* Dual Editorial Glassmorphism Material Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {MATERIAL_STORIES.map((story, idx) => (
            <AnimatedSection key={story.id} delay={idx * 0.08}>
              <article className="glass-panel-dark h-full group rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-6 bg-[#1C060B]">
                    <SmartImage
                      src={story.image}
                      alt={language === 'ar' ? story.titleAr : story.titleEn}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/70 via-transparent to-transparent opacity-50"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-serif-luxury text-[#B6975B] uppercase ltr:tracking-wider rtl:tracking-normal mb-2 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{language === 'ar' ? story.subtitleAr : story.subtitleEn}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-[#FFFDF8] mb-3">
                    {language === 'ar' ? story.titleAr : story.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury leading-relaxed">
                    {language === 'ar' ? story.descAr : story.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-arabic-luxury text-[#B6975B]">
                  <span>{language === 'ar' ? 'متوفر لدى استيتيه للديكور' : 'Curated at Istatieh Decor'}</span>
                  <span className="font-mono text-[11px] text-[#F5EFE4]/70">AMMAN, JORDAN</span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
