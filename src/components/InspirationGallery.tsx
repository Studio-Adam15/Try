import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Maximize2 } from 'lucide-react';
import { Language, InspirationItem } from '../types';
import { INSPIRATION_ITEMS } from '../data/istatiehData';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal } from './MotionPrimitives';

interface InspirationGalleryProps {
  language: Language;
}

export const InspirationGallery: React.FC<InspirationGalleryProps> = ({ language }) => {
  const [selectedItem, setSelectedItem] = useState<InspirationItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const selectedIndex = selectedItem
    ? INSPIRATION_ITEMS.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const closeModal = () => {
    setSelectedItem(null);
    requestAnimationFrame(() => {
      openerRef.current?.focus();
    });
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = INSPIRATION_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % INSPIRATION_ITEMS.length;
    setSelectedItem(INSPIRATION_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = INSPIRATION_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + INSPIRATION_ITEMS.length) % INSPIRATION_ITEMS.length;
    setSelectedItem(INSPIRATION_ITEMS[prevIndex]);
  };

  useEffect(() => {
    if (!selectedItem) return;

    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (language === 'ar') {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (language === 'ar') {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, language]);

  return (
    <section
      id="interior-inspiration"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] relative overflow-hidden"
    >
      {/* Ambient Illumination */}
      <div
        aria-hidden="true"
        className="absolute bottom-24 start-12 w-96 h-96 rounded-full bg-[#7a1b2d]/30 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-32 end-12 w-80 h-80 rounded-full bg-[#B6975B]/10 blur-[110px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'معرض الإلهام والأفكار' : 'SPACES THAT INSPIRE'}
            </span>
            <ScrollTextReveal
              as="h2"
              key={`inspiration-heading-${language}`}
              text={
                language === 'ar'
                  ? 'مساحات تلهمكم لأجمل ديكور'
                  : 'Living Spaces of Enduring Beauty'
              }
              className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-tight ${
                language === 'ar' ? 'font-arabic-luxury' : ''
              }`}
            />
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/78 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'مجموعة منتقاة من المشاريع المنفذة وتصاميم الإلهام التي توضح كيفية توظيف ورق الجدران والستائر في خلق بيئة سكنية دافئة.'
              : 'A curated gallery of executed works and bespoke interior vignettes illustrating the transformative power of decorative details.'}
          </p>
        </div>

        {/* Accessible Frosted Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSPIRATION_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setSelectedItem(item);
              }}
              data-cursor="explore"
              aria-label={
                language === 'ar'
                  ? `عرض صورة ${item.titleAr}`
                  : `Inspect ${item.titleEn}`
              }
              className="glass-panel-dark group text-start cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between min-w-0 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#B6975B]"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1C060B]">
                <SmartImage
                  src={item.image}
                  alt={language === 'ar' ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/85 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity"
                />

                {/* Frosted Inspect Icon */}
                <span
                  aria-hidden="true"
                  className="glass-chip-dark absolute top-3 end-3 w-9 h-9 rounded-full flex items-center justify-center text-[#B6975B] group-hover:bg-[#B6975B] group-hover:text-[#2A0B10] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Clean Text Caption */}
              <div className="p-5 flex-1 w-full flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-arabic-luxury text-[#B6975B] mb-1.5 font-semibold">
                    <span>{language === 'ar' ? item.categoryLabelAr : item.categoryLabelEn}</span>
                    <span aria-hidden="true" className="text-[#F5EFE4]/35">
                      ·
                    </span>
                    <span className="text-[#F5EFE4]/78 font-normal">
                      {language === 'ar' ? item.spaceAr : item.spaceEn}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors leading-snug">
                    {language === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#F5EFE4]/78 mt-2 font-arabic-luxury line-clamp-2 leading-relaxed">
                    {language === 'ar' ? item.captionAr : item.captionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-arabic-luxury text-[#F5EFE4]/70">
                  <span>
                    {item.isRealProject
                      ? language === 'ar'
                        ? 'مشروع منفذ في الأردن'
                        : 'Project in Jordan'
                      : language === 'ar'
                      ? 'نموذج إلهامي'
                      : 'Inspiration Design'}
                  </span>
                  <span className="text-[#B6975B] font-bold">
                    {language === 'ar' ? 'تكبير الصورة' : 'View Full Image'}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Spatial Frosted Glass Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <div className="fixed inset-0" onClick={closeModal} aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[#2A0B10]/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_32px_64px_rgba(0,0,0,0.75)] z-10 text-[#F5EFE4]"
            >
              {/* Glass Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/15 bg-white/[0.05]">
                <div className="flex flex-wrap items-center gap-2 text-xs font-arabic-luxury">
                  <span className="text-[#B6975B] font-bold">
                    {language === 'ar' ? selectedItem.categoryLabelAr : selectedItem.categoryLabelEn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{language === 'ar' ? selectedItem.spaceAr : selectedItem.spaceEn}</span>
                  <span aria-hidden="true" className="text-[#F5EFE4]/35">
                    ·
                  </span>
                  <span dir="ltr" className="font-mono tabular-nums text-[11px] text-[#F5EFE4]/75">
                    {selectedIndex + 1} / {INSPIRATION_ITEMS.length}
                  </span>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  className="glass-chip-dark min-w-[44px] min-h-[44px] -me-2 rounded-full flex items-center justify-center text-[#F5EFE4] hover:bg-[#B6975B] hover:text-[#2A0B10] transition-colors cursor-pointer"
                  aria-label={language === 'ar' ? 'إغلاق معرض الصور' : 'Close gallery lightbox'}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Main Full Image */}
              <div className="relative aspect-16/10 w-full bg-black/55">
                <SmartImage
                  src={selectedItem.image}
                  alt={language === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Glass Footer */}
              <div className="p-5 sm:p-6 border-t border-white/15 bg-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 id="lightbox-title" className="font-serif-luxury text-xl font-bold text-[#FFFDF8]">
                    {language === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                  </h3>
                  <p className="text-xs text-[#F5EFE4]/85 font-arabic-luxury mt-1">
                    {language === 'ar' ? selectedItem.captionAr : selectedItem.captionEn}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="glass-chip-dark min-w-[44px] min-h-[44px] p-2.5 rounded-xl hover:border-[#B6975B] hover:bg-white/10 text-[#F5EFE4] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={language === 'ar' ? 'الصورة السابقة' : 'Previous image'}
                  >
                    <ArrowRight className="w-4 h-4 ltr:rotate-180" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="glass-chip-dark min-w-[44px] min-h-[44px] p-2.5 rounded-xl hover:border-[#B6975B] hover:bg-white/10 text-[#F5EFE4] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={language === 'ar' ? 'الصورة التالية' : 'Next image'}
                  >
                    <ArrowLeft className="w-4 h-4 ltr:rotate-180" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
