import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import sheerHeroImg from '../assets/images/istatieh_luxury_sheer_curtains_1793184061007.webp';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal } from './MotionPrimitives';

interface HeroSectionProps {
  language: Language;
  onExplore: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExplore,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2A0B10] text-[#F5EFE4]"
    >
      {/* Background Ambient Luminance & Architectural Dots */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #B6975B 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 start-1/4 w-[420px] h-[420px] rounded-full bg-[#B6975B]/15 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-12 end-1/6 w-[380px] h-[380px] rounded-full bg-[#7a1b2d]/35 blur-[110px] pointer-events-none"
      />

      {/* Cinematic Full-Bleed Photograph with Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SmartImage
          src={sheerHeroImg}
          alt={
            language === 'ar'
              ? 'ستائر فاخرة وورق جدران من استيتيه للديكور'
              : 'Istatieh Decor Luxury Wallpaper & Curtains'
          }
          loading="eager"
          className="w-full h-full object-cover object-center opacity-42"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#2A0B10] via-[#2A0B10]/68 to-[#2A0B10]/78"
        />
      </div>

      {/* Subtle Gold Horizon Rule */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute top-24 sm:top-28 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B6975B]/35 to-transparent origin-center z-10"
      />

      {/* Main Hero Content */}
      <div className="mx-auto max-w-6xl w-full flex-1 flex flex-col justify-center relative z-10 my-auto py-8">
        {/* Frosted Glass Architectural Surface framing the Hero Editorial Core */}
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-10 lg:p-12 max-w-4xl">
          {/* Frosted Editorial Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="glass-chip-dark inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-1.5 rounded-full text-xs font-arabic-luxury text-[#B6975B] mb-6"
          >
            <span className="uppercase ltr:tracking-[0.22em] rtl:tracking-normal font-semibold">
              {language === 'ar' ? 'استيتيه للديكور والستائر' : 'ISTATIEH DECOR'}
            </span>
            <span aria-hidden="true" className="text-[#F5EFE4]/35">
              ·
            </span>
            <span className="text-[#F5EFE4]/90">
              {language === 'ar' ? 'متجر أونلاين — عمّان، الأردن' : 'Online Store — Amman, Jordan'}
            </span>
          </motion.div>

          {/* Oversized Cinematic Headline */}
          <ScrollTextReveal
            as="h1"
            key={`hero-title-${language}`}
            text={language === 'ar' ? 'الجمال يبدأ من التفاصيل.' : 'BEAUTY LIVES IN THE DETAILS.'}
            highlightText={language === 'ar' ? 'التفاصيل' : 'DETAILS'}
            className={`font-serif-luxury text-4xl sm:text-6xl md:text-[4.25rem] lg:text-[4.8rem] font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-[1.15] ${
              language === 'ar' ? 'font-arabic-luxury' : ''
            }`}
          />

          {/* Supporting Statement Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`text-base sm:text-xl text-[#F5EFE4]/90 mt-5 max-w-2xl font-light leading-relaxed ${
              language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
            }`}
          >
            {language === 'ar'
              ? 'اكتشفوا عالماً من ورق الجدران والستائر المصممة لتمنح كل مساحة طابعها الخاص.'
              : 'Discover wallpaper and curtains that bring character, elegance, and individuality to every space.'}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-5 pt-6 border-t border-white/15"
          >
            {/* Primary CTA */}
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-3 min-h-[48px] px-7 py-3.5 rounded-xl bg-gradient-to-b from-[#d2b374] to-[#B6975B] hover:from-[#ddc086] hover:to-[#c9aa6d] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase ltr:tracking-wider rtl:tracking-normal transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_14px_30px_rgba(0,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>{language === 'ar' ? 'اكتشف مجموعتنا' : 'Explore Collections'}</span>
              <ArrowDown className="w-4 h-4 stroke-[2.5] shrink-0" aria-hidden="true" />
            </button>

            {/* Secondary CTA: Translucent Frosted Glass */}
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip-dark inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 rounded-xl hover:border-[#B6975B]/70 hover:bg-white/10 text-[#FFFDF8] font-arabic-luxury font-medium text-xs uppercase ltr:tracking-wider rtl:tracking-normal transition-all duration-200 shadow-lg active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>{language === 'ar' ? 'استشارة مباشرة عبر واتساب' : 'WhatsApp Consultation'}</span>
            </a>

            {/* Direct call link */}
            <a
              href={BUSINESS_CONFIG.telUrl}
              className="inline-flex items-center gap-2 min-h-[44px] text-xs font-arabic-luxury text-[#F5EFE4]/85 hover:text-[#B6975B] transition-colors py-2 px-3 rounded-lg"
            >
              <span>{language === 'ar' ? 'أو الاتصال المباشر:' : 'Or Call Us:'}</span>
              <span
                dir="ltr"
                style={{ unicodeBidi: 'isolate' }}
                className="font-mono text-[#B6975B] font-bold tabular-nums inline-block"
              >
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Frosted Glass Proof Strip & Scroll Indicator */}
      <div className="mx-auto max-w-6xl w-full z-10">
        <div className="glass-chip-dark rounded-2xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5EFE4]/80 font-arabic-luxury">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1">
            <span>{language === 'ar' ? 'ورق جدران فاخر' : 'Luxury Wallcoverings'}</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'ar' ? 'ستائر تفصيل راقية' : 'Bespoke Curtains'}</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'ar' ? 'تشطيبات وتكسيات معمارية' : 'Architectural Finishes'}</span>
          </div>

          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-2 min-h-[40px] px-2 text-[#B6975B] hover:text-[#FFFDF8] transition-colors cursor-pointer text-[11px] ltr:tracking-wider rtl:tracking-normal uppercase"
          >
            <span>{language === 'ar' ? 'مرر للأسفل للاستكشاف' : 'Scroll to Discover'}</span>
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        </div>
      </div>
    </section>
  );
};
