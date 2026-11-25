import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Language, WallpaperItem } from '../types';
import { WALLPAPERS, BUSINESS_CONFIG } from '../data/istatiehData';
import { SmartImage } from './SmartImage';
import { ScrollTextReveal } from './MotionPrimitives';

interface WallpaperShowroomProps {
  language: Language;
}

export const WallpaperShowroom: React.FC<WallpaperShowroomProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const categories = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'botanical', labelAr: 'نباتي فاخر', labelEn: 'Botanical' },
    { id: 'statement', labelAr: 'جداريات فنية', labelEn: 'Statement Murals' },
    { id: 'geometric', labelAr: 'هندسي معاصر', labelEn: 'Geometric' },
    { id: 'classic', labelAr: 'كلاسيكي راقي', labelEn: 'Classic' },
    { id: 'modern', labelAr: 'تكسيات ثلاثية الأبعاد', labelEn: '3D Finishes' },
  ];

  const filteredWallpapers =
    selectedCategory === 'all'
      ? WALLPAPERS
      : WALLPAPERS.filter((w) => w.category === selectedCategory);

  const handleInquireWallpaper = (wp: WallpaperItem) => {
    const text =
      language === 'ar'
        ? `مرحباً استيتيه للديكور، أود الاستفسار عن توفر وسعر ورق الجدران: "${wp.nameAr}".`
        : `Hello Istatieh Decor, I would like to inquire about availability and pricing for wallpaper: "${wp.nameEn}".`;
    window.open(
      `https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isRtl = language === 'ar';
    let nextIndex = index;

    if (e.key === 'ArrowRight') {
      nextIndex = isRtl
        ? (index - 1 + categories.length) % categories.length
        : (index + 1) % categories.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = isRtl
        ? (index + 1) % categories.length
        : (index - 1 + categories.length) % categories.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = categories.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setSelectedCategory(categories[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="wallpaper-collection"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] overflow-hidden"
    >
      {/* Ambient Radial Illumination behind Glass Cards */}
      <div
        aria-hidden="true"
        className="absolute top-24 -start-24 w-96 h-96 rounded-full bg-[#B6975B]/12 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 -end-24 w-[460px] h-[460px] rounded-full bg-[#7a1b2d]/28 blur-[130px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'تشكيلة ورق الجدران' : 'SIGNATURE WALLPAPERS'}
            </span>
            <ScrollTextReveal
              as="h2"
              key={`wallpaper-heading-${language}`}
              text={
                language === 'ar'
                  ? 'تألق الجدران ولمسات الفخامة'
                  : 'Tactile Textures & Architectural Murals'
              }
              className={`font-serif-luxury text-3xl sm:text-5xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-tight ${
                language === 'ar' ? 'font-arabic-luxury' : ''
              }`}
            />
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/78 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'تشكيلة منتقاة من ورق الجدران الأوروبي بتصاميم نباتية وهندسية وجداريات ثلاثية الأبعاد تمنح مساحاتكم حضوراً فريداً.'
              : 'Curated European wallcoverings and artistic murals designed to bring depth and character to every room.'}
          </p>
        </div>

        {/* Frosted Glass Category Filter Bar */}
        <div
          role="tablist"
          aria-label={language === 'ar' ? 'تصفية تصنيفات ورق الجدران' : 'Filter wallpaper categories'}
          className="glass-chip-dark inline-flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 rounded-2xl mb-10 text-xs font-arabic-luxury"
        >
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setSelectedCategory(cat.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`relative min-h-[40px] px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer font-medium whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#2A0B10] font-bold'
                    : 'text-[#F5EFE4]/85 hover:text-[#FFFDF8] hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="wallpaper-category-active"
                    aria-hidden="true"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#d2b374] to-[#B6975B] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_4px_12px_rgba(0,0,0,0.25)]"
                  />
                )}
                <span className="relative z-10">{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Frosted Glass Product Grid */}
        <div role="tabpanel" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWallpapers.map((wp) => (
              <motion.article
                key={wp.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="glass-panel-dark group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between min-w-0 hover:-translate-y-1"
              >
                <div>
                  {/* Clean Uncluttered Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1C060B]">
                    <SmartImage
                      src={wp.image}
                      alt={language === 'ar' ? wp.nameAr : wp.nameEn}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Clean Metadata & Narrative */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-arabic-luxury text-[#B6975B] font-semibold">
                      <span>{language === 'ar' ? wp.categoryLabelAr : wp.categoryLabelEn}</span>
                      {wp.isRealUploaded && (
                        <>
                          <span aria-hidden="true" className="text-[#F5EFE4]/35">
                            ·
                          </span>
                          <span className="text-[#F5EFE4]/75 font-normal">
                            {language === 'ar' ? 'تنفيذ استيتيه' : 'Istatieh Project'}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif-luxury text-lg font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors leading-snug">
                      {language === 'ar' ? wp.nameAr : wp.nameEn}
                    </h3>

                    <p className="text-xs text-[#F5EFE4]/80 font-arabic-luxury leading-relaxed line-clamp-2">
                      {language === 'ar' ? wp.descriptionAr : wp.descriptionEn}
                    </p>

                    <div className="pt-1.5 text-[11px] font-arabic-luxury text-[#B6975B]">
                      <span className="text-[#F5EFE4]/60">
                        {language === 'ar' ? 'المساحة المقترحة: ' : 'Ideal for: '}
                      </span>
                      <span>{language === 'ar' ? wp.roomSettingAr : wp.roomSettingEn}</span>
                    </div>
                  </div>
                </div>

                {/* Frosted Action Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleInquireWallpaper(wp)}
                    className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] font-arabic-luxury font-bold text-xs flex items-center justify-center gap-2 transition-colors duration-200 border border-white/15 hover:border-[#B6975B] backdrop-blur-md cursor-pointer active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{language === 'ar' ? 'استفسار عبر واتساب' : 'Inquire on WhatsApp'}</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
