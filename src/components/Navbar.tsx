import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Globe, Menu, X } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { IstatiehLogo } from './IstatiehLogo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activePage: PageView;
  setActivePage: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  activePage,
  setActivePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape close + focus management for mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        requestAnimationFrame(() => menuToggleRef.current?.focus());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Exact 6 links:
  // الرئيسية | من نحن | ورق الجدران | الستائر | معرض التصاميم | تواصل معنا
  const navItems = [
    { id: 'home', sectionId: 'hero', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', sectionId: 'brand-intro', labelAr: 'من نحن', labelEn: 'About Us' },
    { id: 'wallpapers', sectionId: 'wallpaper-collection', labelAr: 'ورق الجدران', labelEn: 'Wallpapers' },
    { id: 'curtains', sectionId: 'curtain-collection', labelAr: 'الستائر', labelEn: 'Curtains' },
    { id: 'gallery', sectionId: 'interior-inspiration', labelAr: 'معرض التصاميم', labelEn: 'Inspiration' },
    { id: 'contact', sectionId: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setMobileMenuOpen(false);

    if (activePage === 'home') {
      if (item.sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setActivePage('home');
      setTimeout(() => {
        if (item.sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-bar-scrolled py-2 sm:py-2.5' : 'glass-bar py-2.5 sm:py-3.5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo Zone: right in RTL, left in LTR */}
        <button
          type="button"
          onClick={() => {
            setMobileMenuOpen(false);
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center rounded-lg py-1 px-1 group cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#B6975B]"
          aria-label={language === 'ar' ? 'استيتيه للديكور والستائر — الصفحة الرئيسية' : 'Istatieh Decor — Home'}
        >
          <IstatiehLogo tone="light-surface" size="sm" />
        </button>

        {/* Desktop Nav Items */}
        <nav
          aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-arabic-luxury ltr:tracking-wide rtl:tracking-normal min-w-0"
        >
          {navItems.map((item) => {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className="relative py-2 px-1.5 whitespace-nowrap shrink-0 text-[#2A0B10]/90 hover:text-[#4A101B] font-medium transition-colors duration-200 cursor-pointer group rounded-md focus-visible:ring-2 focus-visible:ring-[#B6975B]"
              >
                <span className="group-hover:text-[#9c7b3c] transition-colors">
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-[#B6975B] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"
                />
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Language Switcher, Phone & Discreet Contact Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher (Liquid Glass Chip) */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="glass-chip-light inline-flex items-center justify-center gap-1.5 min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 py-1.5 rounded-full hover:border-[#B6975B] text-[#4A101B] hover:text-[#2A0B10] text-xs font-sans-editorial transition-all cursor-pointer whitespace-nowrap shrink-0"
            title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            aria-label={language === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#9c7b3c] shrink-0" aria-hidden="true" />
            <span className="font-semibold text-xs sm:text-xs whitespace-nowrap">
              {language === 'ar' ? 'EN' : 'العربية'}
            </span>
          </button>

          {/* Quick Call Button (Glass Chip) */}
          <a
            href={BUSINESS_CONFIG.telUrl}
            className="glass-chip-light hidden sm:inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-full hover:border-[#B6975B] text-[#4A101B] text-xs transition-all hover:text-[#2A0B10] whitespace-nowrap shrink-0"
            title={language === 'ar' ? 'اتصال مباشر' : 'Call Istatieh Decor'}
          >
            <Phone className="w-3.5 h-3.5 text-[#9c7b3c] shrink-0" aria-hidden="true" />
            <span
              dir="ltr"
              style={{ unicodeBidi: 'isolate' }}
              className="font-mono text-xs tabular-nums font-semibold whitespace-nowrap"
            >
              {BUSINESS_CONFIG.phoneDisplay}
            </span>
          </a>

          {/* Discreet WhatsApp CTA Button */}
          <a
            href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 min-h-[38px] sm:min-h-[40px] px-3 sm:px-4 py-1.5 rounded-xl bg-[#4A101B]/95 hover:bg-[#5e1523] backdrop-blur-md text-[#FFFDF8] text-xs font-arabic-luxury font-bold transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_16px_rgba(42,11,16,0.2)] active:scale-95 whitespace-nowrap shrink-0 border border-[#B6975B]/30"
            title={language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Consultation'}
            aria-label={language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Consultation'}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline whitespace-nowrap">
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="glass-chip-light lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-xl text-[#4A101B] hover:text-[#2A0B10] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? (language === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (language === 'ar' ? 'فتح القائمة' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Frosted Glass Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FFFDF8]/90 backdrop-blur-2xl backdrop-saturate-150 border-b border-[#B6975B]/35 px-6 py-5 space-y-4 shadow-2xl max-h-[82vh] overflow-y-auto"
        >
          <nav
            aria-label={language === 'ar' ? 'قائمة الجوال' : 'Mobile Navigation'}
            className="flex flex-col gap-1.5 text-sm font-arabic-luxury"
          >
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                ref={idx === 0 ? firstMobileLinkRef : undefined}
                type="button"
                onClick={() => handleNavClick(item)}
                className="text-start min-h-[44px] py-2.5 px-3.5 rounded-xl text-[#2A0B10] hover:bg-[#F5EFE4]/80 hover:text-[#4A101B] font-medium transition-colors cursor-pointer"
              >
                {language === 'ar' ? item.labelAr : item.labelEn}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#B6975B]/25 flex flex-col gap-2.5">
            <a
              href={BUSINESS_CONFIG.telUrl}
              className="glass-chip-light flex items-center justify-center gap-2 min-h-[44px] py-2.5 rounded-xl text-[#4A101B] text-xs font-mono transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9c7b3c]" aria-hidden="true" />
              <span dir="ltr" style={{ unicodeBidi: 'isolate' }} className="tabular-nums font-semibold">
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </a>

            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[44px] py-3 rounded-xl bg-[#4A101B] hover:bg-[#5e1523] text-[#FFFDF8] text-xs font-bold transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
