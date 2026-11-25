import React from 'react';
import { MessageCircle, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { Language, PageView } from '../types';
import { WALLPAPERS, BUSINESS_CONFIG } from '../data/istatiehData';
import { WallpaperShowroom } from '../components/WallpaperShowroom';

interface WallpapersPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const WallpapersPage: React.FC<WallpapersPageProps> = ({ language, onNavigate }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Editorial Header */}
      <div className="bg-[#4A101B] text-[#F5EFE4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B6975B]/25">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block">
            {language === 'ar' ? 'تشكيلات ورق الجدران' : 'PREMIUM WALLCOVERINGS'}
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">ورق جدران يحول المساحات إلى تحف فنية</span>
            ) : (
              <span>Artistry for Elevated Walls</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'مجموعات حصرية من ورق الجدران الأوروبي بتصاميم كلاسيكية، نباتية، هندسية، وجداريات ثلاثية الأبعاد مخصصة للمنازل والفلل والمشاريع.'
              : 'Exclusive European wallcoverings spanning botanical foliage, mythic statement murals, and textured geometric reliefs.'}
          </p>
        </div>
      </div>

      {/* Main Interactive Showroom with live category switcher & room preview */}
      <WallpaperShowroom language={language} />

      {/* Technical Qualities & Guarantee Strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE4] text-[#2A0B10]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-serif-luxury text-[#4A101B] uppercase tracking-wider font-bold block mb-1">
              {language === 'ar' ? 'مواصفات الجودة' : 'QUALITY SPECIFICATIONS'}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#4A101B]">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">مزايا ورق الجدران لدى استيتيه</span>
              ) : (
                <span>Engineered for Enduring Elegance</span>
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/80 border border-[#B6975B]/20 shadow-sm text-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#B6975B] mx-auto" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#4A101B]">
                {language === 'ar' ? 'مقاوم للرطوبة وقابل للغسيل' : 'Washable & Humidity Resistant'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'طبقات فينيل وقماش متينة يسهل تنظيفها بقطعة قماش مبللة دون التأثير على بريق الألوان.'
                  : 'Durable vinyl and non-woven backing designed for effortless maintenance in Amman residences.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-[#B6975B]/20 shadow-sm text-center space-y-3">
              <Layers className="w-8 h-8 text-[#B6975B] mx-auto" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#4A101B]">
                {language === 'ar' ? 'ملمس نافر ثلاثي الأبعاد' : 'Tactile Textured Relief'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'بروزات ونقوش دقيقة تمنح الجدار عمقاً معمارياً يتفاعل بجمالية مع الإضاءة الساقطة.'
                  : 'Textured surfaces and metallic foils that react harmoniously with indoor ambient lighting.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-[#B6975B]/20 shadow-sm text-center space-y-3">
              <Sparkles className="w-8 h-8 text-[#B6975B] mx-auto" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#4A101B]">
                {language === 'ar' ? 'تركيب متقن بدون فواصل ظاهرة' : 'Master Seamless Installation'}
              </h4>
              <p className="text-xs text-[#2A0B10]/75 font-arabic-luxury leading-relaxed">
                {language === 'ar'
                  ? 'فنيو تركيب خبراء يضمنون تطابق الرسمة ونعومة الحواف في كل زاوية من غرفتكم.'
                  : 'Experienced installation team ensuring perfect pattern matching and invisible edge joins.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct WhatsApp Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] text-center border-t border-[#B6975B]/20">
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">هل ترغب برؤية كتالوجات إضافية؟</span>
            ) : (
              <span>Looking for Custom Pattern Catalogs?</span>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury max-w-xl mx-auto">
            {language === 'ar'
              ? 'تصفح أحدث الكتالوجات أونلاين، أو تواصل معنا عبر واتساب لإرسال الخيارات والعينات المناسبة لمساحتك.'
              : 'Browse our curated catalogs online or request digital options and samples directly via WhatsApp.'}
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'wallpaper')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider shadow-xl active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{language === 'ar' ? 'طلب كتالوج ورق الجدران عبر واتساب' : 'Request Wallpaper Catalog via WhatsApp'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
