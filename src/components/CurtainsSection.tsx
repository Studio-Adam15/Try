import React, { useState } from 'react';
import { Sun, Shield, MessageCircle } from 'lucide-react';
import { Language, CurtainItem } from '../types';
import { CURTAINS, BUSINESS_CONFIG } from '../data/istatiehData';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal } from './MotionPrimitives';

interface CurtainsSectionProps {
  language: Language;
}

export const CurtainsSection: React.FC<CurtainsSectionProps> = ({ language }) => {
  const [activeCurtain, setActiveCurtain] = useState<CurtainItem>(CURTAINS[0]);

  const handleInquireCurtains = (curt: CurtainItem) => {
    const text =
      language === 'ar'
        ? `مرحباً استيتيه للديكور، أود الاستفسار عن تفصيل وتوريد ستائر: "${curt.nameAr}".`
        : `Hello Istatieh Decor, I would like to inquire about bespoke tailoring for: "${curt.nameEn}".`;
    window.open(
      `https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="curtain-collection"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] relative overflow-hidden"
    >
      {/* Ambient Radial Illumination */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -end-40 w-[440px] h-[440px] rounded-full bg-[#7a1b2d]/38 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 -start-32 w-80 h-80 rounded-full bg-[#B6975B]/12 blur-[110px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'فنون النور والخصوصية' : 'CURTAINS — THE ART OF LIGHT'}
            </span>
            <ScrollTextReveal
              as="h2"
              key={`curtain-heading-${language}`}
              text={
                language === 'ar'
                  ? 'ستائر تفصيل تحاكي روح المكان'
                  : 'Bespoke Drapery & Architectural Curtains'
              }
              className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-tight ${
                language === 'ar' ? 'font-arabic-luxury' : ''
              }`}
            />
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/78 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'الستائر ليست مجرد قماش؛ إنها العنصر الذي يحدد كمية الضوء، ويمنح الخصوصية، ويكمل التناغم البصري مع أثاثك.'
              : 'Drapery is an architectural filter shaping daylight, warmth, privacy, and atmospheric elegance in your home.'}
          </p>
        </div>

        {/* 3 Architectural Curtain Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {CURTAINS.map((curt) => {
            const isSelected = activeCurtain.id === curt.id;
            return (
              <article
                key={curt.id}
                className={`group rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between min-w-0 ${
                  isSelected
                    ? 'glass-panel-dark glass-panel-dark-active scale-[1.01]'
                    : 'glass-panel-dark'
                }`}
              >
                <div>
                  {/* Clickable Card Selector Area */}
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveCurtain(curt)}
                    className="w-full text-start cursor-pointer block rounded-xl focus-visible:ring-2 focus-visible:ring-[#B6975B]"
                  >
                    {/* Tall Vertical Architectural Photography */}
                    <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden mb-5 bg-[#1C060B]">
                      <SmartImage
                        src={curt.image}
                        alt={language === 'ar' ? curt.nameAr : curt.nameEn}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/70 via-transparent to-transparent opacity-60"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-arabic-luxury text-[#B6975B] font-semibold">
                        {language === 'ar' ? curt.typeLabelAr : curt.typeLabelEn}
                      </span>
                      <span className="text-[11px] font-arabic-luxury text-[#F5EFE4]/70">
                        {isSelected
                          ? language === 'ar'
                            ? 'النمط المختار'
                            : 'Selected'
                          : language === 'ar'
                          ? 'تحديد للمعاينة'
                          : 'Select'}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors">
                      {language === 'ar' ? curt.nameAr : curt.nameEn}
                    </h3>
                  </button>

                  <p className="text-xs text-[#F5EFE4]/80 mt-2 font-arabic-luxury leading-relaxed line-clamp-3">
                    {language === 'ar' ? curt.descriptionAr : curt.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 space-y-3 text-xs font-arabic-luxury">
                  <div className="flex items-center gap-2 text-[#B6975B]">
                    <Sun className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="text-[11px] text-[#F5EFE4]/90 font-medium">
                      {language === 'ar' ? curt.lightFilteringAr : curt.lightFilteringEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#F5EFE4]/75">
                    <Shield className="w-3.5 h-3.5 text-[#B6975B] shrink-0" aria-hidden="true" />
                    <span className="text-[11px]">
                      {language === 'ar' ? curt.fabricAr : curt.fabricEn}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInquireCurtains(curt)}
                    className="w-full min-h-[44px] mt-2 py-2.5 px-3 rounded-xl bg-white/[0.08] hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] font-arabic-luxury font-bold text-xs flex items-center justify-center gap-2 transition-colors duration-200 border border-white/15 hover:border-[#B6975B] backdrop-blur-md cursor-pointer active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" aria-hidden="true" />
                    <span>{language === 'ar' ? 'طلب تفصيل هذا النمط' : 'Inquire on WhatsApp'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Frosted Light Glass Consultation Strip */}
        <div className="glass-panel-light rounded-3xl text-[#2A0B10] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-serif-luxury uppercase ltr:tracking-widest rtl:tracking-normal text-[#4A101B] font-bold block">
              {language === 'ar' ? 'استشارة تفصيل وقياسات فورية' : 'BESPOKE MEASUREMENT SERVICE'}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#4A101B]">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">
                  هل تحتاج لمساعدة في تحديد نوع الستائر الأنسب لغرفتك؟
                </span>
              ) : (
                <span>Need expert guidance on fabric opacity and drapery styling?</span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[#2A0B10]/85 font-arabic-luxury leading-relaxed">
              {language === 'ar'
                ? 'فريق استيتيه للديكور مستعد لزيارتكم في موقعكم بعمان لأخذ القياسات الدقيقة وعرض عينات الأقمشة الحية أمام إضاءة منزلكم الفعلية.'
                : 'Our specialist team visits your Amman residence to take precise on-site dimensions and evaluate fabric swatches directly under your home lighting.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => handleInquireCurtains(activeCurtain)}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#4A101B] hover:bg-[#5e1523] text-[#FFFDF8] font-arabic-luxury font-bold text-xs uppercase ltr:tracking-wider rtl:tracking-normal transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(42,11,16,0.3)] cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>
                {language === 'ar'
                  ? `طلب معاينة: ${activeCurtain.typeLabelAr}`
                  : `Book Measurement: ${activeCurtain.typeLabelEn}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
