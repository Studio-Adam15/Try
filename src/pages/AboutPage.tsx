import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { PhilosophySection } from '../components/PhilosophySection';
import { WhyIstatieh } from '../components/WhyIstatieh';

interface AboutPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language, onNavigate }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Editorial Header */}
      <div className="bg-[#4A101B] text-[#F5EFE4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B6975B]/25">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'من نحن' : 'ABOUT ISTATIEH DECOR'}
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">قصة شغف بتفاصيل المكان</span>
            ) : (
              <span>Elevating Amman Interiors</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'من قلب عمان، نقدم حلول الديكور المتكاملة التي تجمع بين جمال ورق الجدران وانسيابية الستائر لإضفاء طابع فريد يعكس شخصيتكم.'
              : 'From the heart of Amman, we deliver integrated interior finishing solutions uniting wallpaper textures and custom drapery.'}
          </p>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <PhilosophySection language={language} />

      {/* Craft Values Section */}
      <WhyIstatieh language={language} />

      {/* Online & On-Site Consultation CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'الطلب والاستشارة أونلاين' : 'ONLINE CONSULTATION'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">نصل إليكم أينما كنتم في عمّان والأردن</span>
            ) : (
              <span>Experience Our Textures in Your Space</span>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury max-w-xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'نستقبل طلباتكم أونلاين ونرسل لكم العينات والكتالوجات، مع خدمة زيارة الموقع لأخذ المقاسات الدقيقة ومناقشة تفاصيل مشروعكم.'
              : 'We serve you completely online with digital catalogs and home visits for live texture previews and exact measurements.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B6975B] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider hover:bg-[#c9aa6d] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#B6975B]/40 text-[#F5EFE4] hover:border-[#B6975B] text-xs font-arabic-luxury font-bold transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#B6975B]" />
              <span>{language === 'ar' ? 'تواصل معنا لحجز موعد' : 'Schedule a Consultation'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
