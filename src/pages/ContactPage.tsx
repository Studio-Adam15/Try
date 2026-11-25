import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Navigation, Clock } from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Editorial Header */}
      <div className="bg-[#4A101B] text-[#F5EFE4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B6975B]/25">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'معلومات التواصل والخدمة أونلاين' : 'GET IN TOUCH WITH ISTATIEH DECOR'}
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">خدمة أونلاين سريعة واستشارات في موقعكم</span>
            ) : (
              <span>Online Ordering & On-Site Visits</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'مستشارونا جاهزون لخدمتكم أونلاين ومساعدتكم في اختيار أرقى ورق الجدران وتفصيل الستائر بما يتناسب مع ذوقكم وميزانيتكم.'
              : 'Our design specialists are ready to assist you online or coordinate an on-site visit across Amman and Jordan.'}
          </p>
        </div>
      </div>

      {/* Main Full-Stack Contact Section with Form & Direct Contact */}
      <ContactSection language={language} />

      {/* Online Service Details Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] border-t border-[#B6975B]/20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-start">
          
          <div className="p-6 rounded-2xl bg-[#4A101B]/40 border border-[#B6975B]/20 space-y-3">
            <Clock className="w-6 h-6 text-[#B6975B] mx-auto sm:mx-0" />
            <h4 className="font-serif-luxury text-base font-bold text-[#FFFDF8]">
              {language === 'ar' ? 'ساعات الخدمة أونلاين' : 'Online Service Hours'}
            </h4>
            <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed">
              {language === 'ar'
                ? 'السبت إلى الخميس: من الساعة 9:30 صباحاً حتى 8:30 مساءً للرد على استفساراتكم وحجز المواعيد.'
                : 'Saturday to Thursday: 9:30 AM – 8:30 PM for online inquiries and appointment booking.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#4A101B]/40 border border-[#B6975B]/20 space-y-3">
            <MapPin className="w-6 h-6 text-[#B6975B] mx-auto sm:mx-0" />
            <h4 className="font-serif-luxury text-base font-bold text-[#FFFDF8]">
              {language === 'ar' ? 'نطاق الخدمة' : 'Service Coverage'}
            </h4>
            <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed">
              {language === 'ar'
                ? 'متجر وخدمة إلكترونية أونلاين — خدمة شاملة في عمّان وجميع محافظات الأردن.'
                : 'Online Store & Service — Serving all neighborhoods in Amman and across Jordan.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#4A101B]/40 border border-[#B6975B]/20 space-y-3">
            <Navigation className="w-6 h-6 text-[#B6975B] mx-auto sm:mx-0" />
            <h4 className="font-serif-luxury text-base font-bold text-[#FFFDF8]">
              {language === 'ar' ? 'خدمة الزيارات الميدانية' : 'On-Site Field Visits'}
            </h4>
            <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed">
              {language === 'ar'
                ? 'نوفر خدمة أخذ القياسات وعرض عينات الأقمشة الحية في جميع مناطق العاصمة عمان والمحافظات.'
                : 'We provide on-site measurement and live fabric swatch previews across Greater Amman.'}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
