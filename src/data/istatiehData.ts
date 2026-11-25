import { WallpaperItem, CurtainItem, InspirationItem } from '../types';

import sheerCurtainsImg from '../assets/images/istatieh_luxury_sheer_curtains_1793184061007.webp';
import burgundyDraperyImg from '../assets/images/istatieh_burgundy_drapery_1793184079157.webp';
import fabricDetailImg from '../assets/images/istatieh_fabric_detail_1793184096800.webp';

// Verified Business Contact & Location Config
export const BUSINESS_CONFIG = {
  nameEn: 'ISTATIEH DECOR',
  nameAr: 'استيتيه للديكور والستائر',
  phone: '+962787878601',
  phoneDisplay: '+962 7 8787 8601',
  phoneLocal: '+962 7 8787 8601',
  telUrl: 'tel:+962787878601',
  whatsappDigits: '962787878601',
  instagramUrl: 'https://www.instagram.com/istatieh.decor/',
  addressEn: 'Online Store & On-Site Service — Amman, Jordan',
  addressAr: 'متجر وخدمة إلكترونية أونلاين — عمّان، الأردن',
  mapsUrl: 'https://wa.me/962787878601',
  logoUrl: '/assets/istatieh-logo-burgundy.png',
  logoTransparentUrl: '/assets/istatieh-logo-burgundy.png',
  logoLightUrl: '/assets/istatieh-logo-ivory.png',
  
  // WhatsApp Link Helper with prefilled messages
  getWhatsAppUrl: (lang: 'ar' | 'en', topic?: 'wallpaper' | 'curtains' | 'general') => {
    let message = '';
    if (lang === 'ar') {
      if (topic === 'wallpaper') {
        message = 'مرحباً استيتيه للديكور والستائر، أود الاستفسار عن ورق الجدران المتوفر.';
      } else if (topic === 'curtains') {
        message = 'مرحباً استيتيه للديكور والستائر، أود الاستفسار عن الستائر والتصاميم المتاحة.';
      } else {
        message = 'مرحباً، أود الاستفسار عن خدمات استيتيه للديكور والستائر.';
      }
    } else {
      if (topic === 'wallpaper') {
        message = 'Hello Istatieh Decor, I would like to inquire about your available premium wallpaper collections.';
      } else if (topic === 'curtains') {
        message = 'Hello Istatieh Decor, I would like to inquire about your bespoke curtains and drapery designs.';
      } else {
        message = 'Hello, I would like to inquire about Istatieh Decor interior finishes and consultation.';
      }
    }
    return `https://wa.me/962787878601?text=${encodeURIComponent(message)}`;
  }
};

// Verified Real Uploaded Wallpaper Products & Curated Designs
export const WALLPAPERS: WallpaperItem[] = [
  {
    id: 'wp-emerald-botanical',
    nameAr: 'ورق جدران نباتي ذهبي وزيتي فاخر',
    nameEn: 'Imperial Emerald & Gold Foliage',
    category: 'botanical',
    categoryLabelAr: 'نباتي فاخر',
    categoryLabelEn: 'Botanical Luxury',
    image: '/assets/aistudio/Screenshot_20261028-133321_14602cd9.webp',
    descriptionAr: 'نقوش أوراق شجر دقيقة بلمسات ذهبية متلألئة على خلفية خضراء زمردية تضفي عمقاً وفخامة لصالونات الاستقبال وغرف الجلوس.',
    descriptionEn: 'Intricately gilded botanical leaves overlaid on deep emerald canvas, designed to create dramatic warmth in grand reception salons.',
    roomSettingAr: 'صالون الضيافة وغرف المعيشة الراقية',
    roomSettingEn: 'Formal Salons & Living Suites',
    colorTone: '#123528',
    isRealUploaded: true,
  },
  {
    id: 'wp-dragon-mural',
    nameAr: 'جدارية التنين والنمر الأسطورية',
    nameEn: 'Mythic Sovereign Wall Mural',
    category: 'statement',
    categoryLabelAr: 'جداريات فنية',
    categoryLabelEn: 'Artistic Mural',
    image: '/assets/aistudio/Screenshot_20261028-133336_d81201bb.webp',
    descriptionAr: 'لوحة جدارية مخصصة تجسد الفن الأسطوري بألوان دافئة ونقوش شرقية بارعة تجعل الجدار الرئيسي تحفة فنية لا تُنسى.',
    descriptionEn: 'A bespoke statement artistic mural featuring mythic illustration with warm amber florals and handcrafted Japanese engraving aesthetics.',
    roomSettingAr: 'غرفة النوم الرئيسية والجدران البارزة',
    roomSettingEn: 'Master Bedroom & Feature Focal Walls',
    colorTone: '#3D2214',
    isRealUploaded: true,
  },
  {
    id: 'wp-geometric-arch',
    nameAr: 'تجريد هندسي مع أقواس الضوء الطبيعي',
    nameEn: 'Bauhaus Botanical & Architectural Arch',
    category: 'geometric',
    categoryLabelAr: 'هندسي معاصر',
    categoryLabelEn: 'Contemporary Geometric',
    image: '/assets/aistudio/Screenshot_20261028-133409_83e82123.webp',
    descriptionAr: 'تداخل لوني معاصر بين أشكال هندسية بألوان اللافندر والتوب الهادئ، مع تناغم ساحر لأوراق النخيل والأقواس المضيئة.',
    descriptionEn: 'A harmonious composition of geometric planes in muted taupe and lavender, beautifully complemented by natural green palm elements.',
    roomSettingAr: 'المداخل الفسيحة، الصالونات الحديثة، وغرف الطعام',
    roomSettingEn: 'Modern Lobbies, Dining Areas & Salons',
    colorTone: '#6B5E70',
    isRealUploaded: true,
  },
  {
    id: 'wp-3d-relief-finish',
    nameAr: 'تكسيات جدارية ثلاثية الأبعاد بإنارة مدمجة',
    nameEn: '3D Sculptural Facet & Lighting Finish',
    category: 'modern',
    categoryLabelAr: 'تكسيات حديثة',
    categoryLabelEn: 'Modern 3D Finishes',
    image: '/assets/aistudio/Screenshot_20261028-133356_4d5934ea.webp',
    descriptionAr: 'تشطيب جداري نحتي مجزأ ثلاثي الأبعاد مع مسارات ضوئية مدمجة تعطي بعداً معمارياً معاصراً للجدار الرئيسي.',
    descriptionEn: 'Monolithic faceted 3D wall sculpture with integrated architectural shadow channels and atmospheric ambient lighting.',
    roomSettingAr: 'خلفيات الأسِرّة والمكاتب التنفيذية',
    roomSettingEn: 'Executive Suites & Headboard Architecture',
    colorTone: '#4F5861',
    isRealUploaded: true,
  },
  {
    id: 'wp-rose-damask',
    nameAr: 'دمقس كلاسيكي ناعم بلون الورد العتيق',
    nameEn: 'Classic Rosewater Floral Damask',
    category: 'classic',
    categoryLabelAr: 'كلاسيكي راقي',
    categoryLabelEn: 'Refined Classic',
    image: '/assets/aistudio/Screenshot_20261028-133448_b48f182d.webp',
    descriptionAr: 'زخارف نباتية منحنية بدقة فائقة بتدرجات الوردي الباستيل الهادئ، تمنح الغرفة طابعاً أنثوياً دافئاً ومريحاً للأعصاب.',
    descriptionEn: 'Soft undulating botanical damask in delicate antique rose hues, infusing spaces with understated tranquility and elegance.',
    roomSettingAr: 'غرف المعيشة العائلية، غرف النوم، وغرف القراءة',
    roomSettingEn: 'Family Lounges, Bedchambers & Reading Rooms',
    colorTone: '#C28285',
    isRealUploaded: true,
  }
];

// Curtains & Drapery Collection
export const CURTAINS: CurtainItem[] = [
  {
    id: 'curt-sheer-linen',
    nameAr: 'ستائر كتان شيفون انسيابية للفلل',
    nameEn: 'Amman Villa Sheer Linen Drapery',
    type: 'sheer',
    typeLabelAr: 'شيفون شفاف',
    typeLabelEn: 'Flowing Sheer Linen',
    image: sheerCurtainsImg,
    descriptionAr: 'أقمشة كتان طبيعية منتقاة تسمح بدخول أشعة الشمس الذهبية بنعومة متناهية مع الحفاظ على الخصوصية والرحابة.',
    descriptionEn: 'Selected fine woven natural linen that softly filters radiant sunlight while maintaining privacy and architectural grace.',
    lightFilteringAr: 'تصفية ضوء ناعمة بنسبة 40% مع انسيابية كاملة',
    lightFilteringEn: 'Soft 40% Light Diffusion with Graceful Drift',
    fabricAr: 'كتان طبيعي 100% مع معالجة مقاومة للبهتان',
    fabricEn: '100% Natural Linen with UV Protection Finish',
  },
  {
    id: 'curt-burgundy-velvet',
    nameAr: 'ستائر مخمل عنابي ملكي مع حلقات ذهبية',
    nameEn: 'Royal Burgundy Pinch-Pleat Velvet',
    type: 'blackout',
    typeLabelAr: 'بلاك آوت مخملي',
    typeLabelEn: 'Luxury Velvet Blackout',
    image: burgundyDraperyImg,
    descriptionAr: 'ستائر مخملية ثقيلة بلون العنابي الفاخر (Burgundy) مع كسرات فرنسية كلاسيكية وقضبان برونزية معتقة لعزل كامل للإضاءة.',
    descriptionEn: 'Heavyweight tailored velvet in signature deep burgundy with tailored French pinch-pleats and antique gold rod hardware.',
    lightFilteringAr: 'عزل تام للضوء والحرارة بنسبة 100%',
    lightFilteringEn: 'Complete 100% Thermal & Light Blackout',
    fabricAr: 'مخمل إيطالي ثقيل مع بطانة قطنية عازلة',
    fabricEn: 'Heavy Italian Velvet with Thermal Cotton Interlining',
  },
  {
    id: 'curt-textured-damask',
    nameAr: 'ستائر دمشقية مطرزة بخيوط برونزية',
    nameEn: 'Embroidered Antique Gold Jacquard',
    type: 'classic',
    typeLabelAr: 'كلاسيكي مطرز',
    typeLabelEn: 'Classic Jacquard',
    image: fabricDetailImg,
    descriptionAr: 'أنسجة جاكار بارزة وخيوط برونزية مذهبة معتقة تناسب الصالونات الدبلوماسية والمجالس الفخمة في عمان.',
    descriptionEn: 'Tactile relief jacquard fabric with subtle metallic gold luster, tailored for formal reception halls and council rooms.',
    lightFilteringAr: 'حجب ضوء شبه كامل بنسبة 85%',
    lightFilteringEn: 'Substantial 85% Privacy & Light Reduction',
    fabricAr: 'جاكار دمشقي فخم بملمس بارز',
    fabricEn: 'High-Density Damask Jacquard with Relief Weave',
  }
];

// Inspiration Gallery Items with Real Projects & Architectural Interiors
export const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: 'insp-1',
    titleAr: 'صالون الضيافة الزمردي — دابوق، عمان',
    titleEn: 'Emerald Salon Reception — Dabouq, Amman',
    spaceAr: 'صالون استقبال فاخر',
    spaceEn: 'Formal Reception Hall',
    image: '/assets/aistudio/Screenshot_20261028-133321_14602cd9.webp',
    category: 'wallpaper',
    categoryLabelAr: 'ورق جدران فاخر',
    categoryLabelEn: 'Luxury Wallpaper',
    captionAr: 'تناسق فريد بين ورق الجدران النباتي الذهبي والكنب المخملي الزيتي مع إضاءة دافئة مريحة.',
    captionEn: 'Harmonious balance between shimmering gold foliage wallpaper and rich velvet furnishings.',
    isRealProject: true,
  },
  {
    id: 'insp-2',
    titleAr: 'أقواس الشيفون المنسدلة — عبدون، عمان',
    titleEn: 'Flowing Arched Sheers — Abdoun, Amman',
    spaceAr: 'صالة معيشة بإطلالة تراس',
    spaceEn: 'Sunlit Living Suite',
    image: sheerCurtainsImg,
    category: 'curtain',
    categoryLabelAr: 'ستائر كتان شيفون',
    categoryLabelEn: 'Sheer Linen Curtains',
    captionAr: 'ستائر كتان خفيفة تنسدل من أرضية الغرفة إلى سقف الأقواس لتغمر المكان بنور عمان الهادئ.',
    captionEn: 'Floor-to-ceiling airy linen drapery softening afternoon light in an Amman villa.',
    isRealProject: true,
  },
  {
    id: 'insp-3',
    titleAr: 'الجدارية الأسطورية في الجناح الرئيسي',
    titleEn: 'Artistic Mythic Bedroom Suite',
    spaceAr: 'غرفة نوم رئيسية فخمة',
    spaceEn: 'Master Bedroom',
    image: '/assets/aistudio/Screenshot_20261028-133336_d81201bb.webp',
    category: 'wallpaper',
    categoryLabelAr: 'جداريات فنية',
    categoryLabelEn: 'Artistic Mural',
    captionAr: 'مزيج جريء يجمع بين الرسومات التراثية الآسيوية والأثاث الخشبي المعاصر.',
    captionEn: 'Daring juxtaposition of hand-painted mythic artwork and refined contemporary bedding.',
    isRealProject: true,
  },
  {
    id: 'insp-4',
    titleAr: 'ستائر المخمل العنابي الملكية',
    titleEn: 'Royal Velvet Blackout Drapery',
    spaceAr: 'قاعة طعام وضيافة رسمية',
    spaceEn: 'Executive Dining Salon',
    image: burgundyDraperyImg,
    category: 'curtain',
    categoryLabelAr: 'ستائر بلاك آوت',
    categoryLabelEn: 'Velvet Blackout',
    captionAr: 'كسرات مخملية منتظمة بلون البورغندي الداكن مع إكسسوارات ذهبية تعزز العزل والوقار.',
    captionEn: 'Deep wine velvet pleats anchored by brushed gold rods framing panoramic Amman city views.',
    isRealProject: true,
  },
  {
    id: 'insp-5',
    titleAr: 'تداخل الأشكال الهندسية مع الطبيعة',
    titleEn: 'Architectural Geometric Living Corner',
    spaceAr: 'ركن استقبال حديث',
    spaceEn: 'Modern Living Corner',
    image: '/assets/aistudio/Screenshot_20261028-133409_83e82123.webp',
    category: 'wallpaper',
    categoryLabelAr: 'ورق جدران هندسي',
    categoryLabelEn: 'Geometric Wallpaper',
    captionAr: 'إبراز جمالية الجدار عبر ألوان هادئة ونباتات خضراء تضفي الحيوية والتجدد.',
    captionEn: 'Architectural geometry layered with arch mirror reflections and organic foliage.',
    isRealProject: true,
  },
  {
    id: 'insp-6',
    titleAr: 'تكسيات جدارية مضيئة بتشكيل نحتي',
    titleEn: 'Sculptural 3D Bedroom Feature',
    spaceAr: 'جدار غرفة نوم مودرن',
    spaceEn: 'Modern Bedroom Accent',
    image: '/assets/aistudio/Screenshot_20261028-133356_4d5934ea.webp',
    category: 'finishing',
    categoryLabelAr: 'تشطيبات وديكورات',
    categoryLabelEn: 'Architectural Finishes',
    captionAr: 'تكسية جدارية هندسية ثلاثية الأبعاد بإنارة داخلية خافتة تجعل الجدار حياً في الليل.',
    captionEn: 'Geometric 3D wall relief with recessed LED illumination transforming modern interiors.',
    isRealProject: true,
  }
];

// Material Stories Section Details
export const MATERIAL_STORIES = [
  {
    id: 'story-fabrics',
    titleAr: 'أقمشة مختارة بعناية فائقة',
    titleEn: 'Exquisite Fabric Weaves',
    subtitleAr: 'الكتان، الشيفون، والمخمل الإيطالي',
    subtitleEn: 'Natural Linen, Airy Sheers & Italian Velvet',
    descAr: 'نختار خيوط وأقمشة الستائر من أفضل المصانع العالمية مع مراعاة درجة ترشيح الضوء ومقاومة حرارة شمس عمان.',
    descEn: 'We curate drapery textiles from premier international mills, balancing light diffusion with lasting durability.',
    image: fabricDetailImg,
  },
  {
    id: 'story-wallpaper',
    titleAr: 'أرقى خامات ورق الجدران العالمي',
    titleEn: 'World-Class Textured Wallcoverings',
    subtitleAr: 'ملمس نافر، ألوان ثابتة، وتصاميم حصرية',
    subtitleEn: 'Tactile Relief, Fade-Resistant & Exclusive Patterns',
    descAr: 'تشكيلات فريدة تجمع بين الكلاسيكية الدمشقية والخطوط الهندسية العصرية والجداريات الفنية المصممة للمساحات الخاصة.',
    descEn: 'From Damascus floral heritage to contemporary architectural geometries and bespoke scenic murals.',
    image: '/assets/aistudio/Screenshot_20261028-133448_b48f182d.webp',
  }
];

// Why Istatieh Decor Pillars
export const BRAND_VALUES = [
  {
    number: '01',
    titleAr: 'تصاميم تناسب مختلف الأذواق',
    titleEn: 'Curated Designs for Every Taste',
    descAr: 'مجموعات مختارة بعناية تلبي متطلبات الديكور الكلاسيكي والنيوكلاسيكي والمودرن المعاصر.',
    descEn: 'Thoughtfully curated collections accommodating classical heritage, transitional, and minimalist styles.',
  },
  {
    number: '02',
    titleAr: 'تنوع في النقوش والخامات',
    titleEn: 'Rich Diversity in Textures & Patterns',
    descAr: 'خيارات واسعة من أقمشة الستائر التركية والإيطالية وورق الجدران المقاوم للرطوبة والقابل للتنظيف.',
    descEn: 'Extensive catalogs of premium drapery fabrics and textured, washable wallpapers of enduring quality.',
  },
  {
    number: '03',
    titleAr: 'اهتمام دقيق بأدق التفاصيل',
    titleEn: 'Uncompromising Attention to Detail',
    descAr: 'من أخذ المقاسات الدقيقة في موقعكم وحتى تركيب الستائر وإتقان زوايا ورق الجدران.',
    descEn: 'From precision on-site measurement in your Amman home to flawless tailoring and installation.',
  },
  {
    number: '04',
    titleAr: 'مساعدة في اختيار الأنسب لمساحتكم',
    titleEn: 'Personalized Design Consultation',
    descAr: 'نرافقكم خطوة بخطوة أونلاين وعند المعاينة لاختيار التناسق اللوني المثالي مع أثاثكم وإضاءتكم.',
    descEn: 'Dedicated guidance online and during on-site visits to achieve impeccable color and texture harmony.',
  }
];
