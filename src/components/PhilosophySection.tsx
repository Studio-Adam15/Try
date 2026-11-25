import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Language } from '../types';
import fabricDetailImg from '../assets/images/istatieh_fabric_detail_1793184096800.webp';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal, AnimatedSection } from './MotionPrimitives';

interface PhilosophySectionProps {
  language: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ language }) => {
  return (
    <section
      id="brand-intro"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFE4] text-[#2A0B10] overflow-hidden"
    >
      {/* Background Architectural Watermark & Warm Ambient Light Orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4A101B 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 end-10 w-80 h-80 rounded-full bg-[#B6975B]/20 blur-[90px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 start-10 w-96 h-96 rounded-full bg-[#4A101B]/10 blur-[100px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Editorial Eyebrow Label */}
        <div className="flex items-center gap-2 mb-5">
          <span aria-hidden="true" className="w-8 h-[1.5px] bg-[#B6975B]" />
          <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#4A101B] uppercase font-bold">
            {language === 'ar' ? 'عن استيتيه للديكور' : 'ABOUT ISTATIEH DECOR'}
          </span>
        </div>

        {/* Main Grid: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Frosted Light Glass Text Narrative Card (6 cols) */}
          <AnimatedSection className="lg:col-span-6">
            <div className="glass-panel-light rounded-3xl p-7 sm:p-10 space-y-6">
              <ScrollTextReveal
                as="h2"
                key={`philosophy-title-${language}`}
                text={language === 'ar' ? 'الجمال يبدأ من التفاصيل' : 'Beauty Begins with Details'}
                highlightText={language === 'ar' ? 'التفاصيل' : 'Details'}
                highlightClassName="text-[#9c7b3c]"
                className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#4A101B] leading-[1.2] ${
                  language === 'ar' ? 'font-arabic-luxury' : ''
                }`}
              />

              {/* Exact Required Brand Supporting Copy */}
              <p
                className={`text-base sm:text-lg text-[#2A0B10]/90 leading-relaxed font-normal ${
                  language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
                }`}
              >
                {language === 'ar'
                  ? 'نؤمن أن جمال المكان يبدأ من تفاصيله. نقدم خيارات من ورق الجدران والستائر تساعدكم على ابتكار مساحات تعبّر عن ذوقكم.'
                  : 'We believe that the beauty of any space begins with its details. We offer a curated selection of wallpaper and curtains that helps you create spaces reflecting your authentic taste.'}
              </p>

              <ul className="pt-5 border-t border-[#4A101B]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-arabic-luxury text-[#4A101B]/90">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'أقمشة ستائر مختارة بعناية لحجب الإضاءة أو نشرها بنعومة'
                      : 'Carefully curated curtain textiles for soft diffusion or blackout'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'ورق جدران أوروبي مقاوم للرطوبة وسهل التنظيف بأحدث النقوش'
                      : 'Washable, moisture-resistant wallcoverings in trending palettes'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'أخذ مقاسات دقيقة واستشارات في موقع المشروع بعمان'
                      : 'On-site precision measurements & consultations in Amman'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'تركيب احترافي متقن بإشراف فني متخصص'
                      : 'Master installation and finishing by experienced craftsmen'}
                  </span>
                </li>
              </ul>

              <div className="flex items-center gap-3 pt-2 text-xs font-arabic-luxury text-[#4A101B]/85">
                <MapPin className="w-4 h-4 text-[#9c7b3c] shrink-0" aria-hidden="true" />
                <span>
                  {language === 'ar'
                    ? 'متجر أونلاين مع خدمة الزيارات الميدانية في عمّان وجميع المحافظات'
                    : 'Online ordering & on-site consultations across Amman & Jordan'}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Overlapping Asymmetric Imagery Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Main Architectural Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#B6975B]/40 bg-[#2A0B10]">
              <SmartImage
                src="/assets/aistudio/Screenshot_20261028-133321_14602cd9.webp"
                alt={
                  language === 'ar'
                    ? 'صالون الضيافة الزمردي — ورق جدران وستائر استيتيه للديكور'
                    : 'Istatieh Decor Emerald Wallpaper & Curtains'
                }
                className="w-full h-[380px] sm:h-[460px] object-cover object-center"
              />
              <div className="glass-chip-dark absolute bottom-4 start-4 end-4 sm:end-auto px-4 py-2.5 rounded-2xl text-xs text-[#F5EFE4] font-arabic-luxury">
                <span className="text-[#B6975B] font-semibold block text-[11px]">
                  {language === 'ar' ? 'تنفيذ استيتيه للديكور' : 'Istatieh Decor Installation'}
                </span>
                <span className="font-medium">
                  {language === 'ar' ? 'صالون الضيافة الزمردي' : 'Emerald Botanical Salon'}
                </span>
              </div>
            </div>

            {/* Overlapping Floating Frosted Glass Material Detail */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass-panel-light hidden sm:block absolute -bottom-6 -start-6 w-48 sm:w-56 rounded-2xl p-2 overflow-hidden"
            >
              <div className="rounded-xl overflow-hidden">
                <SmartImage
                  src={fabricDetailImg}
                  alt={
                    language === 'ar'
                      ? 'تفاصيل النسيج والملمس الفاخر'
                      : 'Tactile Fabric & Texture Detail'
                  }
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>
              <div className="pt-2.5 pb-1 text-center text-[#4A101B] text-[11px] font-arabic-luxury font-semibold">
                {language === 'ar' ? 'خامات منتقاة وحرفية عالية' : 'Tactile Textile Weave'}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
