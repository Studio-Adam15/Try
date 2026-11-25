import React from 'react';
import { Sun, Shield, Sparkles, MessageCircle, Phone, Ruler } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { CurtainsSection } from '../components/CurtainsSection';

interface CurtainsPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const CurtainsPage: React.FC<CurtainsPageProps> = ({ language, onNavigate }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Editorial Header */}
      <div className="bg-[#4A101B] text-[#F5EFE4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B6975B]/25">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'الستائر الفاخرة والتفصيل المتقن' : 'BESPOKE CURTAINS & DRAPERY'}
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">ستائر تعيد صياغة الضوء والرحابة</span>
            ) : (
              <span>The Architecture of Soft Light</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'تصاميم ستائر مخصصة من أرقى أقمشة الكتان والشيفون والمخمل الأوروبي، مصممة خصيصاً لمقاسات نوافذكم وأسلوب ديكوركم.'
              : 'Tailored window treatments handcrafted from premium natural linen, airy sheers, and rich Italian velvet.'}
          </p>
        </div>
      </div>

      {/* Main Curtains Interactive Section */}
      <CurtainsSection language={language} />

      {/* Steps of Custom Tailoring */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE4] text-[#2A0B10]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-serif-luxury text-[#4A101B] uppercase tracking-wider font-bold block mb-1">
              {language === 'ar' ? 'خطوات التفصيل' : 'TAILORING PROCESS'}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#4A101B]">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">كيف ننفذ ستائركم في استيتيه؟</span>
              ) : (
                <span>Our Bespoke Drapery Process</span>
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/90 border border-[#B6975B]/20 shadow-sm space-y-3">
              <span className="font-serif-luxury text-3xl font-bold text-[#B6975B]">01</span>
              <h4 className="font-serif-luxury text-base font-bold text-[#4A101B]">
                {language === 'ar' ? 'الاستشارة واختيار الأقمشة' : 'Fabric Consultation'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'مساعدتكم في اختيار نوع القماش واللون ودرجة الشفافية بما يلائم أثاثكم وإضاءتكم.'
                  : 'Select fabric weights, textures, and opacity to complement your existing interior aesthetics.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#B6975B]/20 shadow-sm space-y-3">
              <span className="font-serif-luxury text-3xl font-bold text-[#B6975B]">02</span>
              <h4 className="font-serif-luxury text-base font-bold text-[#4A101B]">
                {language === 'ar' ? 'أخذ القياسات في الموقع' : 'On-Site Measurements'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'زيارة موقع منزلكم في عمان وأخذ مقاسات دقيقة بالمليمتر لضمان انسدال مثالي.'
                  : 'Our technicians take millimeter-accurate dimensions of your window frames and ceiling heights in Amman.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#B6975B]/20 shadow-sm space-y-3">
              <span className="font-serif-luxury text-3xl font-bold text-[#B6975B]">03</span>
              <h4 className="font-serif-luxury text-base font-bold text-[#4A101B]">
                {language === 'ar' ? 'التفصيل والكسرات الفاخرة' : 'Precision Tailoring'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'تفصيل الستائر بنظام الكسرات الفرنسية أو الموجات الانسيابية الحديثة (Wave Style).'
                  : 'Meticulous stitching, pinch-pleats or contemporary ripple-fold drapery with hidden weights.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-[#B6975B]/20 shadow-sm space-y-3">
              <span className="font-serif-luxury text-3xl font-bold text-[#B6975B]">04</span>
              <h4 className="font-serif-luxury text-base font-bold text-[#4A101B]">
                {language === 'ar' ? 'التركيب والإكسسوارات' : 'Flawless Installation'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'تثبيت مسارات الستائر والقضبان البرونزية أو المخفية بدقة وضبط انسيابية القماش.'
                  : 'Professional mounting of tracks, motorized systems, or antique gold decorative rods.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Booking Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] text-center border-t border-[#B6975B]/20">
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">جاهزون لتجديد ستائر منزلك؟</span>
            ) : (
              <span>Ready to Transform Your Windows?</span>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury max-w-xl mx-auto">
            {language === 'ar'
              ? 'تواصلوا معنا الآن لحجز موعد قياسات مجاني في موقعكم بعمان وعرض كتالوجات الأقمشة الحية.'
              : 'Contact our Amman team to schedule your on-site measurement consultation and fabric preview.'}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'curtains')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider shadow-xl"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{language === 'ar' ? 'حجز موعد عبر واتساب' : 'Book on WhatsApp'}</span>
            </a>

            <a
              href={BUSINESS_CONFIG.telUrl}
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl border border-[#B6975B]/50 text-[#F5EFE4] font-arabic-luxury text-xs font-bold hover:border-[#B6975B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B6975B] shrink-0" aria-hidden="true" />
              <span
                dir="ltr"
                style={{ unicodeBidi: 'isolate' }}
                className="font-mono tabular-nums inline-block"
              >
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
