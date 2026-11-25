import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Language, PageView } from './types';
import { BUSINESS_CONFIG } from './data/istatiehData';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

// Home Section Components
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WallpaperShowroom } from './components/WallpaperShowroom';
import { CurtainsSection } from './components/CurtainsSection';
import { MaterialStories } from './components/MaterialStories';
import { InspirationGallery } from './components/InspirationGallery';
import { WhyIstatieh } from './components/WhyIstatieh';
import { ContactSection } from './components/ContactSection';

// Dedicated Full Pages
import { AboutPage } from './pages/AboutPage';
import { WallpapersPage } from './pages/WallpapersPage';
import { CurtainsPage } from './pages/CurtainsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Arabic is the primary default language on the first visit
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('istatieh_language');
    return saved === 'en' || saved === 'ar' ? saved : 'ar';
  });

  const [activePage, setActivePage] = useState<PageView>('home');

  // Sync HTML document direction, language, and social preview metadata
  useEffect(() => {
    localStorage.setItem('istatieh_language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    const title =
      language === 'ar'
        ? 'استيتيه للديكور والستائر | ورق جدران وستائر أونلاين'
        : 'Istatieh Decor | Luxury Wallpaper & Curtains Online';
    const description =
      language === 'ar'
        ? 'متجر استيتيه للديكور والستائر أونلاين في عمّان والأردن. تشكيلة راقية من ورق الجدران الأوروبي والستائر التفصيل مع استشارة وقياسات في موقعكم.'
        : 'Istatieh Decor online showroom in Amman, Jordan. Curated European wallpaper and custom luxury curtains with on-site measurement consultations.';

    const currentUrl = window.location.origin + window.location.pathname;
    const ogImageUrl = `${window.location.origin}/images/og-istatieh-curtains.webp`;

    document.title = title;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImageUrl);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'ar' ? 'ar_JO' : 'en_US');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImageUrl);

    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = currentUrl;
    }
  }, [language]);

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCollections = () => {
    const el = document.getElementById('wallpaper-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('wallpapers');
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('contact');
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        className={`min-h-screen bg-[#2A0B10] text-[#F5EFE4] flex flex-col font-sans selection:bg-[#B6975B] selection:text-[#2A0B10] ${
          language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
        }`}
      >
        {/* Accessible Skip-to-Main-Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[60] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#B6975B] focus:text-[#2A0B10] focus:font-bold focus:text-xs focus:shadow-xl"
        >
          {language === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content'}
        </a>

        {/* Desktop Fine Pointer Custom Cursor */}
        <CustomCursor language={language} />

        {/* 1. Persistent Global Luxury Navigation Header */}
        <Navbar
          language={language}
          setLanguage={setLanguage}
          activePage={activePage}
          setActivePage={handleNavigate}
        />

        {/* Main Content Router with Smooth Page Transitions */}
        <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
          <AnimatePresence mode="wait">
            {activePage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* 2. CINEMATIC HERO */}
                <HeroSection
                  language={language}
                  onExplore={handleExploreCollections}
                  onContact={handleScrollToContact}
                />

                {/* 3. BRAND INTRODUCTION */}
                <PhilosophySection language={language} />

                {/* 4. WALLPAPER COLLECTION */}
                <WallpaperShowroom language={language} />

                {/* 5. CURTAIN COLLECTION */}
                <CurtainsSection language={language} />

                {/* 6. WHY ISTATIEH DECOR */}
                <WhyIstatieh language={language} />

                {/* 7. MATERIALS & TEXTURES GALLERY */}
                <MaterialStories language={language} />

                {/* 8. INTERIOR INSPIRATION */}
                <InspirationGallery language={language} />

                {/* 9. CONTACT & WHATSAPP CTA */}
                <ContactSection language={language} />
              </motion.div>
            )}

            {activePage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <AboutPage language={language} onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'wallpapers' && (
              <motion.div
                key="wallpapers"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <WallpapersPage language={language} onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'curtains' && (
              <motion.div
                key="curtains"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <CurtainsPage language={language} onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <GalleryPage language={language} onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ContactPage language={language} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Floating Direct WhatsApp Action Button */}
        <aside aria-label={language === 'ar' ? 'تواصل سريع عبر واتساب' : 'WhatsApp Quick Contact'} className="fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-40">
          <a
            href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 min-w-[44px] min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#25D366]/92 backdrop-blur-lg text-[#1C060B] font-arabic-luxury font-bold text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_28px_rgba(0,0,0,0.4)] hover:bg-[#25D366] hover:scale-105 active:scale-95 transition-all duration-200 border border-white/40"
            title={language === 'ar' ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat with Istatieh Decor on WhatsApp'}
            aria-label={language === 'ar' ? 'واتساب استيتيه للديكور' : 'WhatsApp Istatieh Decor'}
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline whitespace-nowrap">
              {language === 'ar' ? 'واتساب استيتيه للديكور' : 'WhatsApp Istatieh'}
            </span>
          </a>
        </aside>

        {/* 10. Persistent Global Luxury Footer */}
        <Footer language={language} onNavigate={handleNavigate} />
      </div>
    </MotionConfig>
  );
}
