import React, { useState } from 'react';
import { Sparkles, Maximize2, MessageCircle } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { InspirationGallery } from '../components/InspirationGallery';
import { MaterialStories } from '../components/MaterialStories';

interface GalleryPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ language, onNavigate }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Editorial Header */}
      <div className="bg-[#4A101B] text-[#F5EFE4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B6975B]/25">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'معرض الصور والمشاريع' : 'INSPIRATION ARCHIVE'}
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">إلهام بصري لمنازل تفيض بالأناقة</span>
            ) : (
              <span>Spaces of Texture & Distinction</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'تصفحوا تشكيلة واسعة من صور مشاريعنا المنفذة ونماذج الديكور الملهمة لجدرانكم ونوافذكم في عمان.'
              : 'Browse our portfolio of completed Amman residences and curated interior vignettes to inspire your space.'}
          </p>
        </div>
      </div>

      {/* Main Inspiration Gallery Component with Lightbox */}
      <InspirationGallery language={language} />

      {/* Material Stories Close-up section */}
      <MaterialStories language={language} />

      {/* Instagram Community CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] text-center border-t border-[#B6975B]/20">
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">تابعوا أحدث أعمالنا اليومية على إنستغرام</span>
            ) : (
              <span>Follow Our Daily Interior Journey</span>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury max-w-xl mx-auto">
            {language === 'ar'
              ? 'ننشر باستمرار فيديوهات وصور من مواقع العمل وتركيبات الستائر وورق الجدران في مختلف مناطق عمان.'
              : 'Discover behind-the-scenes installation footage and new textile arrivals on our verified Instagram.'}
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#B6975B] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider hover:bg-[#c9aa6d] transition-all shadow-xl"
            >
              <span>@istatieh.decor</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
