import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { IstatiehLogo } from './IstatiehLogo';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C060B] text-[#F5EFE4] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#B6975B]/20">
      <div className="mx-auto max-w-7xl">
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#B6975B]/15">
          {/* Brand Info & Original Logo */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center rounded-lg p-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B6975B]"
              aria-label={language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Return to home page'}
            >
              <IstatiehLogo tone="dark-surface" size="md" />
            </button>

            <p className="text-xs sm:text-sm text-[#F5EFE4]/80 max-w-sm font-arabic-luxury leading-relaxed pt-1">
              {language === 'ar'
                ? 'استيتيه للديكور والستائر في عمان، الأردن. وجهتكم الأولى لأرقى خامات ورق الجدران وتفصيل الستائر الفاخرة والتشطيبات المعمارية.'
                : 'Istatieh Decor in Amman, Jordan. Your premier destination for bespoke luxury wallcoverings, tailored curtains, and interior finishing details.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-arabic-luxury text-[#B6975B]">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[36px] hover:text-[#FFFDF8] transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Instagram</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[36px] hover:text-[#FFFDF8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Collection Navigation */}
          <div className="md:col-span-3 space-y-3 text-xs font-arabic-luxury">
            <span className="font-serif-luxury text-[11px] text-[#B6975B] uppercase ltr:tracking-[0.2em] rtl:tracking-normal font-bold block mb-2">
              {language === 'ar' ? 'التشكيلات والصفحات' : 'COLLECTIONS & PAGES'}
            </span>
            <ul className="space-y-1.5 text-[#F5EFE4]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wallpapers')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'ورق الجدران' : 'Wallpapers'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('curtains')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'الستائر الفاخرة' : 'Curtains & Drapery'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'معرض الإلهام' : 'Inspiration Gallery'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'عن استيتيه للديكور' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-[34px] inline-flex items-center hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Service & Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs font-arabic-luxury">
            <span className="font-serif-luxury text-[11px] text-[#B6975B] uppercase ltr:tracking-[0.2em] rtl:tracking-normal font-bold block mb-2">
              {language === 'ar' ? 'الخدمة أونلاين والتواصل' : 'ONLINE SERVICE & CONTACT'}
            </span>

            <div className="space-y-2.5 text-[#F5EFE4]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B6975B] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{language === 'ar' ? BUSINESS_CONFIG.addressAr : BUSINESS_CONFIG.addressEn}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B6975B] shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_CONFIG.telUrl}
                  dir="ltr"
                  style={{ unicodeBidi: 'isolate' }}
                  className="hover:text-[#B6975B] font-mono tabular-nums text-xs inline-block py-1"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="glass-chip-dark min-h-[40px] px-4 py-2 rounded-xl inline-flex items-center gap-2 text-xs font-arabic-luxury text-[#B6975B] hover:text-[#FFFDF8] hover:border-[#B6975B] transition-colors cursor-pointer"
              >
                <span>{language === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
                <ArrowUp className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-arabic-luxury text-[#F5EFE4]/60">
          <div>
            © <span className="tabular-nums">{new Date().getFullYear()}</span>{' '}
            {language === 'ar'
              ? 'استيتيه للديكور والستائر. جميع الحقوق محفوظة.'
              : 'ISTATIEH DECOR. All Rights Reserved.'}
          </div>

          <div className="flex items-center gap-3">
            <span>{language === 'ar' ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B6975B]">
              {language === 'ar' ? 'التفاصيل تصنع الفرق' : 'The Art of Elevated Living'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
