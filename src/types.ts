export type Language = 'ar' | 'en';

export type PageView = 'home' | 'about' | 'wallpapers' | 'curtains' | 'gallery' | 'contact';

export interface WallpaperItem {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'all' | 'botanical' | 'statement' | 'geometric' | 'classic' | 'modern';
  categoryLabelAr: string;
  categoryLabelEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  roomSettingAr: string;
  roomSettingEn: string;
  colorTone: string;
  isRealUploaded?: boolean;
}

export interface CurtainItem {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'sheer' | 'blackout' | 'classic' | 'wave';
  typeLabelAr: string;
  typeLabelEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  lightFilteringAr: string;
  lightFilteringEn: string;
  fabricAr: string;
  fabricEn: string;
}

export interface InspirationItem {
  id: string;
  titleAr: string;
  titleEn: string;
  spaceAr: string;
  spaceEn: string;
  image: string;
  category: 'wallpaper' | 'curtain' | 'finishing';
  categoryLabelAr: string;
  categoryLabelEn: string;
  captionAr: string;
  captionEn: string;
  isRealProject?: boolean;
}

export interface InquiryFormState {
  fullName: string;
  phone: string;
  service: 'wallpaper' | 'curtains' | 'interior_finishes' | 'consultation';
  message: string;
}
