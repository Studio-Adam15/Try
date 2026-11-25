import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, MapPin, Instagram, Send, CheckCircle2, Navigation, Copy, Check, AlertCircle } from 'lucide-react';
import { Language, InquiryFormState } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { ScrollTextReveal } from './MotionPrimitives';

interface ContactSectionProps {
  language: Language;
}

type FieldErrors = {
  fullName?: string;
  phone?: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    phone: '',
    service: 'wallpaper',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<{ fullName?: boolean; phone?: boolean }>({});
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const errorSummaryRef = useRef<HTMLDivElement | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const validateField = (field: 'fullName' | 'phone', value: string): string | undefined => {
    if (field === 'fullName') {
      if (!value.trim() || value.trim().length < 2) {
        return language === 'ar'
          ? 'يرجى إدخال الاسم الكريم (حرفين على الأقل)'
          : 'Please enter your full name (at least 2 characters)';
      }
      return undefined;
    }

    if (field === 'phone') {
      const digitsOnly = value.replace(/[\s\-().+]/g, '');
      if (!digitsOnly || !/^\d{8,15}$/.test(digitsOnly)) {
        return language === 'ar'
          ? 'يرجى إدخال رقم هاتف أو واتساب صحيح (مثال: 0787878601 أو +962 7 8787 8601)'
          : 'Please enter a valid phone number (e.g. +962 7 8787 8601 or 0787878601)';
      }
      return undefined;
    }
    return undefined;
  };

  const handleFieldChange = (field: 'fullName' | 'phone', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field] || touched[field] || hasSubmitAttempted) {
      const nextErr = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: nextErr }));
    }
  };

  const handleFieldBlur = (field: 'fullName' | 'phone') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitAttempted(true);

    const nextErrors: FieldErrors = {
      fullName: validateField('fullName', formData.fullName),
      phone: validateField('phone', formData.phone),
    };

    const activeErrors: FieldErrors = {};
    if (nextErrors.fullName) activeErrors.fullName = nextErrors.fullName;
    if (nextErrors.phone) activeErrors.phone = nextErrors.phone;

    setErrors(activeErrors);

    if (Object.keys(activeErrors).length > 0) {
      requestAnimationFrame(() => {
        errorSummaryRef.current?.focus();
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleDirectWhatsAppSend = () => {
    const serviceName = {
      wallpaper: language === 'ar' ? 'ورق الجدران' : 'Wallpaper',
      curtains: language === 'ar' ? 'الستائر والتفصيل' : 'Curtains & Drapery',
      interior_finishes: language === 'ar' ? 'التشطيبات والديكور' : 'Interior Finishes',
      consultation: language === 'ar' ? 'استشارة عامة في الموقع' : 'On-Site Consultation',
    }[formData.service];

    const message =
      language === 'ar'
        ? `مرحباً استيتيه للديكور، اسمي: ${formData.fullName}، رقم هاتفي: ${formData.phone}، أود الاستفسار بخصوص: ${serviceName}. ${formData.message ? `ملاحظات: ${formData.message}` : ''}`
        : `Hello Istatieh Decor, My name is: ${formData.fullName}, Phone: ${formData.phone}, I would like to inquire about: ${serviceName}. ${formData.message ? `Notes: ${formData.message}` : ''}`;

    window.open(
      `https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const errorEntries = Object.entries(errors).filter(([, msg]) => Boolean(msg)) as [
    keyof FieldErrors,
    string
  ][];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4A101B] text-[#F5EFE4] relative overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Gold Refraction Orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #B6975B 1px, transparent 1px), linear-gradient(to bottom, #B6975B 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 end-1/4 w-[420px] h-[420px] rounded-full bg-[#B6975B]/15 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 start-1/6 w-96 h-96 rounded-full bg-[#2A0B10]/85 blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-14 pb-10 border-b border-[#B6975B]/25">
          <span className="font-serif-luxury text-xs ltr:tracking-[0.25em] rtl:tracking-normal text-[#B6975B] uppercase font-bold block mb-2">
            {language === 'ar' ? 'تواصل معنا' : "LET'S CONNECT"}
          </span>
          <ScrollTextReveal
            as="h2"
            key={`contact-heading-${language}`}
            text={
              language === 'ar'
                ? 'لنصنع مساحة تشبه ذوقكم.'
                : "LET'S MAKE YOUR SPACE DISTINCTIVE."
            }
            highlightText={language === 'ar' ? 'ذوقكم' : 'DISTINCTIVE'}
            className={`font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold ltr:tracking-tight rtl:tracking-normal text-[#FFFDF8] leading-tight ${
              language === 'ar' ? 'font-arabic-luxury' : ''
            }`}
          />
          <p className="text-sm sm:text-base text-[#F5EFE4]/85 font-arabic-luxury mt-4 max-w-2xl leading-relaxed">
            {language === 'ar'
              ? 'أخبرونا عن المساحة التي ترغبون في تجديدها، وسنساعدكم في استكشاف الخيارات المناسبة من ورق الجدران والستائر والتكسيات.'
              : 'Tell us about the space you wish to elevate, and our design team will guide you through tailored wallpaper and curtain selections.'}
          </p>
        </div>

        {/* Dual Column: Frosted Glass Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Online Service & Coverage Glass Card */}
              <div className="glass-panel-dark p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-serif-luxury text-[#B6975B] uppercase ltr:tracking-wider rtl:tracking-normal font-bold">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{language === 'ar' ? 'خدمة أونلاين وتوصيل ومعاينة' : 'ONLINE STORE & SERVICE AREA'}</span>
                </div>

                <div>
                  <p className="font-arabic-luxury text-base font-bold text-[#FFFDF8]">
                    {language === 'ar' ? BUSINESS_CONFIG.addressAr : BUSINESS_CONFIG.addressEn}
                  </p>
                  <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury mt-1 leading-relaxed">
                    {language === 'ar'
                      ? 'الطلب أونلاين مع إرسال الكتالوجات وأخذ المقاسات في موقعكم في عمّان وجميع المحافظات'
                      : 'Full online ordering, digital catalogs & on-site measurements across Amman and all governorates'}
                  </p>
                </div>

                <a
                  href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip-dark inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] text-xs font-arabic-luxury font-bold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{language === 'ar' ? 'احجز زيارة معاينة وقياسات في موقعك' : 'Book On-Site Measurement Visit'}</span>
                </a>
              </div>

              {/* Direct Phone & Copy Glass Card */}
              <div className="glass-panel-dark p-6 rounded-2xl space-y-3">
                <span className="text-xs font-serif-luxury text-[#B6975B] uppercase ltr:tracking-wider rtl:tracking-normal font-bold block">
                  {language === 'ar' ? 'الاتصال الهاتفي المباشر' : 'DIRECT TELEPHONE'}
                </span>

                <div className="flex items-center justify-between gap-3">
                  <a
                    href={BUSINESS_CONFIG.telUrl}
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                    className="font-mono text-xl font-bold text-[#FFFDF8] hover:text-[#B6975B] transition-colors tabular-nums inline-block py-1"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="glass-chip-dark min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-[#B6975B] hover:bg-[#B6975B] hover:text-[#2A0B10] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={language === 'ar' ? 'نسخ رقم الهاتف' : 'Copy phone number'}
                    title={language === 'ar' ? 'نسخ رقم الهاتف' : 'Copy phone number'}
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                <div aria-live="polite" className="text-[11px] font-arabic-luxury text-[#B6975B] min-h-[16px]">
                  {copiedPhone
                    ? language === 'ar'
                      ? 'تم نسخ رقم الهاتف إلى الحافظة'
                      : 'Phone number copied to clipboard'
                    : ''}
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-[#25D366]/14 hover:bg-[#25D366]/24 backdrop-blur-md border border-[#25D366]/45 text-[#FFFDF8] transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(0,0,0,0.28)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/28 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-arabic-luxury text-sm font-bold block">
                      {language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Direct WhatsApp Conversation'}
                    </span>
                    <span className="text-[11px] text-[#F5EFE4]/78 font-arabic-luxury">
                      {language === 'ar' ? 'رد سريع لاستفسارات ورق الجدران والستائر' : 'Fast response for quotes & inquiries'}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-arabic-luxury text-[#25D366] font-bold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0">
                  {language === 'ar' ? 'ابدأ المحادثة' : 'Chat Now'}
                </span>
              </a>

              {/* Instagram Profile */}
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip-dark flex items-center gap-3 min-h-[48px] p-4 rounded-xl text-[#F5EFE4] hover:text-[#B6975B] hover:border-[#B6975B]/60 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#B6975B] shrink-0" aria-hidden="true" />
                <span className="font-arabic-luxury text-xs font-medium">
                  {language === 'ar'
                    ? 'تابعونا على إنستغرام: @istatieh.decor'
                    : 'Follow us on Instagram: @istatieh.decor'}
                </span>
              </a>
            </div>

            <div className="pt-5 border-t border-white/15 text-xs text-[#F5EFE4]/75 font-arabic-luxury">
              <span>
                {language === 'ar'
                  ? 'الخدمة متوفرة أونلاين: السبت إلى الخميس (توصيل وتركيب لجميع المناطق)'
                  : 'Online Service: Saturday to Thursday (Delivery & Installation Across Jordan)'}
              </span>
            </div>
          </div>

          {/* Right Column: Accessible Frosted Glass Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-dark p-6 sm:p-10 rounded-3xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    aria-live="polite"
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#B6975B]/20 text-[#B6975B] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFFDF8]">
                      {language === 'ar' ? 'شكراً لتواصلكم مع استيتيه للديكور' : 'Thank You for Reaching Out'}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F5EFE4]/85 font-arabic-luxury max-w-md mx-auto leading-relaxed">
                      {language === 'ar'
                        ? 'تم تسجيل طلبك بنجاح. سيقوم مستشار الديكور بالتواصل معكم هاتفياً أو عبر واتساب لمناقشة القياسات والخيارات المناسبة.'
                        : 'Your inquiry has been received. Our specialist will contact you shortly via phone or WhatsApp to discuss measurements and styling.'}
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={handleDirectWhatsAppSend}
                        className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#1C060B] font-arabic-luxury font-bold text-xs uppercase ltr:tracking-wider rtl:tracking-normal shadow-lg cursor-pointer transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                        <span>
                          {language === 'ar'
                            ? 'إرسال نفس الطلب عبر واتساب للتأكيد الفوري'
                            : 'Send via WhatsApp to Confirm'}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setHasSubmitAttempted(false);
                          setTouched({});
                          setErrors({});
                          setFormData({
                            fullName: '',
                            phone: '',
                            service: 'wallpaper',
                            message: '',
                          });
                        }}
                        className="glass-chip-dark min-h-[48px] px-5 py-3 rounded-xl hover:border-[#B6975B] text-xs font-arabic-luxury text-[#F5EFE4] cursor-pointer transition-colors"
                      >
                        {language === 'ar' ? 'إرسال استفسار آخر' : 'Submit Another Inquiry'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form noValidate onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-serif-luxury text-xl font-bold text-[#FFFDF8] mb-1">
                        {language === 'ar' ? 'نموذج الاستفسار وطلب المعاينة' : 'Request Consultation & Inquiries'}
                      </h3>
                      <p className="text-xs text-[#F5EFE4]/78 font-arabic-luxury">
                        {language === 'ar'
                          ? 'املأ الحقول التالية وسنتواصل معك خلال أقرب وقت'
                          : 'Fill out the details below and we will contact you promptly'}
                      </p>
                    </div>

                    {/* Accessible Error Summary */}
                    {hasSubmitAttempted && errorEntries.length > 0 && (
                      <div
                        ref={errorSummaryRef}
                        tabIndex={-1}
                        role="alert"
                        aria-live="assertive"
                        className="p-4 rounded-xl bg-red-950/65 backdrop-blur-md border border-red-400/50 text-red-100 space-y-2 focus:outline-none"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold font-arabic-luxury">
                          <AlertCircle className="w-4 h-4 text-red-300 shrink-0" aria-hidden="true" />
                          <span>
                            {language === 'ar'
                              ? 'يرجى مراجعة الحقول المطلوبة أدناه:'
                              : 'Please review the required fields below:'}
                          </span>
                        </div>
                        <ul className="text-xs font-arabic-luxury space-y-1 ps-6 list-disc">
                          {errorEntries.map(([field, msg]) => (
                            <li key={field}>
                              <button
                                type="button"
                                onClick={() => {
                                  if (field === 'fullName') fullNameRef.current?.focus();
                                  if (field === 'phone') phoneRef.current?.focus();
                                }}
                                className="underline text-start hover:text-white cursor-pointer"
                              >
                                {msg}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-fullName"
                        className="block text-xs font-arabic-luxury text-[#F5EFE4]/90 mb-2 font-medium"
                      >
                        {language === 'ar' ? 'الاسم الكريم *' : 'Full Name *'}
                      </label>
                      <input
                        ref={fullNameRef}
                        id="contact-fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        onBlur={() => handleFieldBlur('fullName')}
                        placeholder={language === 'ar' ? 'مثال: أحمد الخالد' : 'e.g. Ahmad Khaled'}
                        className={`w-full min-h-[46px] px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-sm border text-sm text-[#FFFDF8] placeholder-[#F5EFE4]/40 transition-colors font-arabic-luxury ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-300'
                            : 'border-white/15 focus:border-[#B6975B] focus:bg-white/[0.09]'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="error-fullName" className="text-xs text-red-300 mt-1.5 font-arabic-luxury">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-arabic-luxury text-[#F5EFE4]/90 mb-2 font-medium"
                      >
                        {language === 'ar' ? 'رقم الهاتف أو الواتساب *' : 'Phone / WhatsApp Number *'}
                      </label>
                      <input
                        ref={phoneRef}
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        dir="ltr"
                        autoComplete="tel"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : 'hint-phone'}
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        onBlur={() => handleFieldBlur('phone')}
                        placeholder={language === 'ar' ? '+962 7 8787 8601' : '+962 7 8787 8601'}
                        className={`w-full min-h-[46px] px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-sm border text-sm text-[#FFFDF8] placeholder-[#F5EFE4]/40 transition-colors font-mono text-start ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-300'
                            : 'border-white/15 focus:border-[#B6975B] focus:bg-white/[0.09]'
                        }`}
                      />
                      {errors.phone ? (
                        <p id="error-phone" className="text-xs text-red-300 mt-1.5 font-arabic-luxury">
                          {errors.phone}
                        </p>
                      ) : (
                        <p id="hint-phone" className="text-[11px] text-[#F5EFE4]/65 mt-1.5 font-arabic-luxury">
                          {language === 'ar'
                            ? 'يُقبل الرقم الأردني بصيغة 07... أو +962...'
                            : 'Accepts local (07...) or international (+962...) formats'}
                        </p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-arabic-luxury text-[#F5EFE4]/90 mb-2 font-medium"
                      >
                        {language === 'ar' ? 'الخدمة المطلوبة' : 'Service of Interest'}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value as InquiryFormState['service'],
                          })
                        }
                        className="w-full min-h-[46px] px-4 py-3 rounded-xl bg-[#2A0B10]/85 border border-white/15 text-sm text-[#FFFDF8] focus:border-[#B6975B] transition-colors font-arabic-luxury"
                      >
                        <option value="wallpaper">
                          {language === 'ar' ? 'ورق جدران (Wallpaper)' : 'Premium Wallpaper'}
                        </option>
                        <option value="curtains">
                          {language === 'ar' ? 'ستائر وتفصيل وأقمشة (Curtains)' : 'Curtains & Custom Drapery'}
                        </option>
                        <option value="interior_finishes">
                          {language === 'ar' ? 'تشطيبات وتكسيات جدارية ثلاثية الأبعاد' : '3D Wall Finishes & Details'}
                        </option>
                        <option value="consultation">
                          {language === 'ar' ? 'زيارة موقع وأخذ مقاسات في عمان' : 'On-Site Measurements in Amman'}
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-arabic-luxury text-[#F5EFE4]/90 mb-2 font-medium"
                      >
                        {language === 'ar' ? 'تفاصيل إضافية (اختياري)' : 'Additional Notes (Optional)'}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          language === 'ar'
                            ? 'أخبرنا عن عدد الغرف، النمط المفضل، أو أي استفسار محدد...'
                            : 'Tell us about your room dimensions, desired style, or questions...'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 text-sm text-[#FFFDF8] placeholder-[#F5EFE4]/40 focus:border-[#B6975B] focus:bg-white/[0.09] transition-colors resize-none font-arabic-luxury"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      aria-busy={isSubmitting}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-b from-[#d2b374] to-[#B6975B] hover:from-[#ddc086] hover:to-[#c9aa6d] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase ltr:tracking-wider rtl:tracking-normal flex items-center justify-center gap-2 transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_28px_rgba(0,0,0,0.35)] cursor-pointer active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <span>{language === 'ar' ? 'جارٍ تسجيل الطلب...' : 'Transmitting Inquiry...'}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{language === 'ar' ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
