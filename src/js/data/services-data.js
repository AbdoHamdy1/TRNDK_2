/**
 * TRNDK Verified Services Dataset (Phase 3)
 * Exactly 38 services across 5 categories.
 * Strict preservation of approved service names, categories, and store URLs.
 */

export const categories = [
  {
    id: 'creative-design',
    nameAr: 'التصميم الإبداعي',
    nameEn: 'Creative Design',
    count: 10,
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design',
    descriptionAr: 'تصميم هويات بصرية وشعارات وواجهات رقمية تعكس هوية علامتك التجارية باحترافية.',
    descriptionEn: 'Professional visual identities, logos, and UI/UX designs that reflect your brand identity.'
  },
  {
    id: 'website-design',
    nameAr: 'تصميم المواقع والمتاجر',
    nameEn: 'Website & Store Design',
    count: 4,
    storeUrl: 'https://store.trndk.com/services?category=Website+Design',
    descriptionAr: 'تطوير مواقع ومتاجر إلكترونية متجاوبة وسريعة تمنح عملاءك تجربة استخدام متميزة.',
    descriptionEn: 'Responsive, fast websites and e-commerce stores delivering exceptional user experience.'
  },
  {
    id: 'video-production',
    nameAr: 'إنتاج الفيديو',
    nameEn: 'Video Production',
    count: 3,
    storeUrl: 'https://store.trndk.com/services?category=Video+Production',
    descriptionAr: 'إنتاج موشن جرافيك ومونتاج احترافي للفيديوهات والريلز والشعارات المتحركة.',
    descriptionEn: 'High-impact motion graphics, reels editing, and logo animations to captivate your audience.'
  },
  {
    id: 'rapid-growth',
    nameAr: 'خدمات النمو',
    nameEn: 'Rapid Growth',
    count: 9,
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services',
    descriptionAr: 'حلول عملية لتعزيز التفاعل الرقمي وتوثيق واستعادة الحسابات عبر مختلف المنصات.',
    descriptionEn: 'Practical growth solutions for social engagement, account verification, and account recovery.'
  },
  {
    id: 'business-solutions',
    nameAr: 'حلول الأعمال',
    nameEn: 'Business Solutions',
    count: 12,
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions',
    descriptionAr: 'استشارات ودراسات جدوى وإدارة حملات وتجهيز خدمات جوجل لدعم استدامة أعمالك.',
    descriptionEn: 'Feasibility studies, ad campaign management, and Google setup to scale your business.'
  }
];

export const services = [
  // =========================================================================
  // Category 1: Creative Design (10 Services)
  // =========================================================================
  {
    id: 'cd-1',
    categoryId: 'creative-design',
    titleAr: 'تصميم شعار احترافي',
    titleEn: 'Professional Logo Design',
    descriptionAr: 'ابتكار شعار مخصص وفريد يعبر عن رؤية وقيم مشروعك بدقة ووضوح.',
    descriptionEn: 'Custom, distinctive logo design clearly communicating your brand vision and values.',
    image: 'images/Creative-Design/1.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-2',
    categoryId: 'creative-design',
    titleAr: 'تصميم هوية بصرية متكاملة',
    titleEn: 'Integrated Visual Identity Design',
    descriptionAr: 'بناء منظومة متناسقة تشمل الألوان والخطوط وعناصر الهوية عبر كافة المواد التسويقية.',
    descriptionEn: 'Comprehensive brand identity system including colors, typography, and marketing assets.',
    image: 'images/Creative-Design/2.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-3',
    categoryId: 'creative-design',
    titleAr: 'تصميم منيو إلكتروني / كتالوج أسعار',
    titleEn: 'Digital Menu / Price Catalog Design',
    descriptionAr: 'عرض قوائم المنتجات والأسعار بتصميم رقمي جذاب ومنظم يسهل تصفحه عبر الأجهزة.',
    descriptionEn: 'Organized, attractive digital menus and product price catalogs optimized for devices.',
    image: 'images/Creative-Design/3.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-4',
    categoryId: 'creative-design',
    titleAr: 'تصميم بروفايل الشركة',
    titleEn: 'Company Profile Design',
    descriptionAr: 'ملف تعريفي شامل يبرز رسالة المؤسسة وإنجازاتها ومزاياها التنافسية لشركاء الأعمال.',
    descriptionEn: 'Professional corporate profile showcasing your mission, services, and company highlights.',
    image: 'images/Creative-Design/4.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-5',
    categoryId: 'creative-design',
    titleAr: 'تصميم بطاقات الموظفين',
    titleEn: 'Employee Card Design',
    descriptionAr: 'تصميم بطاقات تعريفية احترافية للموظفين تعزز الانتماء المؤسسي والمظهر الرسمي.',
    descriptionEn: 'Formal employee identification cards tailored to company branding standards.',
    image: 'images/Creative-Design/5.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-6',
    categoryId: 'creative-design',
    titleAr: 'تصميم البوسترات والإعلانات',
    titleEn: 'Posters & Advertisements Design',
    descriptionAr: 'تصاميم إعلانية مبتكرة مجهزة للطباعة والنشر الرقمي لجذب انتباه الجمهور المستهدف.',
    descriptionEn: 'Engaging promotional posters and digital advertising creatives built to capture attention.',
    image: 'images/Creative-Design/6.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-7',
    categoryId: 'creative-design',
    titleAr: 'تصميم البنرات',
    titleEn: 'Banner Design',
    descriptionAr: 'بنرات ترويجية ملفتة للمواقع ومنصات التواصل بمقاسات دقيقة وملائمة للحملات.',
    descriptionEn: 'Eye-catching web and social banners sized accurately for your marketing campaigns.',
    image: 'images/Creative-Design/7.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-8',
    categoryId: 'creative-design',
    titleAr: 'تصميم صور مصغرة لليوتيوب',
    titleEn: 'YouTube Thumbnails Design',
    descriptionAr: 'صور مصغرة جذابة وعالية التباين تدعم زيادة نسبة النقر على مقاطع الفيديو.',
    descriptionEn: 'High-contrast, appealing video thumbnails designed to boost viewer click-through rates.',
    image: 'images/Creative-Design/8.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-9',
    categoryId: 'creative-design',
    titleAr: 'تصميم واجهات احترافية UI/UX',
    titleEn: 'Professional Interface Design / UI-UX',
    descriptionAr: 'تخطيط واجهات المستخدم التفاعلية لتطبيقات الويب والموبايل بتجربة سهلة وسلسة.',
    descriptionEn: 'Intuitive user interface and user experience design for web and mobile platforms.',
    image: 'images/Creative-Design/42.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },
  {
    id: 'cd-10',
    categoryId: 'creative-design',
    titleAr: 'تصميم العروض التقديمية',
    titleEn: 'Presentation Design',
    descriptionAr: 'عروض تقديمية أنيقة ومنظمة تساعدك على طرح أفكارك ومشاريعك بثقة أمام عملائك.',
    descriptionEn: 'Polished presentation decks structured to articulate ideas and business proposals clearly.',
    image: 'images/Creative-Design/10.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Creative+Design'
  },

  // =========================================================================
  // Category 2: Website & Store Design (4 Services)
  // =========================================================================
  {
    id: 'wd-1',
    categoryId: 'website-design',
    titleAr: 'تصميم متجر إلكتروني احترافي',
    titleEn: 'Professional E-commerce Store',
    descriptionAr: 'بناء متجر متكامل مع بوابات الدفع وإدارة المنتجات وسلة الشراء المتوافقة مع الجوال.',
    descriptionEn: 'Complete e-commerce store with seamless checkout, payment gateways, and product management.',
    image: 'images/Website-Design/11.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Website+Design'
  },
  {
    id: 'wd-2',
    categoryId: 'website-design',
    titleAr: 'تصميم موقع شركة أو مؤسسة',
    titleEn: 'Corporate / Business Website Design',
    descriptionAr: 'موقع مؤسسي يعكس هوية شركتك ويعرض خدماتك بصورة احترافية وواضحة.',
    descriptionEn: 'Modern corporate website presenting your company identity, services, and contact channels.',
    image: 'images/Website-Design/12.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Website+Design'
  },
  {
    id: 'wd-3',
    categoryId: 'website-design',
    titleAr: 'تصميم وتجهيز صفحات الهبوط',
    titleEn: 'Landing Page Design & Setup',
    descriptionAr: 'صفحة هبوط مخصصة تركز على تحويل الزوار إلى عملاء مهتمين بالحملات الإعلانية.',
    descriptionEn: 'Focused landing pages engineered to maximize conversions for specific marketing campaigns.',
    image: 'images/Website-Design/13.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Website+Design'
  },
  {
    id: 'wd-4',
    categoryId: 'website-design',
    titleAr: 'حجز الدومين وربطه بالموقع',
    titleEn: 'Domain Registration & Website Connection',
    descriptionAr: 'مساعدة في اختيار النطاق المناسب وضبط إعدادات الـ DNS وربطه بموقعك الإلكتروني.',
    descriptionEn: 'Domain registration assistance and DNS configuration securely connecting your website.',
    image: 'images/Website-Design/14.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Website+Design'
  },

  // =========================================================================
  // Category 3: Video Production (3 Services)
  // =========================================================================
  {
    id: 'vp-1',
    categoryId: 'video-production',
    titleAr: 'تحريك الشعار',
    titleEn: 'Logo Animation / Motion Logo',
    descriptionAr: 'تحريك شعار علامتك بأسلوب جذاب يمنح فيديوهاتك ومحتواك الرقمي حضوراً فريداً.',
    descriptionEn: 'Dynamic logo animation intro and outro that adds a polished touch to brand videos.',
    image: 'images/Video-Production/9.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Video+Production'
  },
  {
    id: 'vp-2',
    categoryId: 'video-production',
    titleAr: 'مونتاج الريلز',
    titleEn: 'Reels Editing',
    descriptionAr: 'تحرير المقاطع الرأسية بإيقاع ديناميكي وتأثيرات بصرية مناسبة لإنستجرام وتيك توك.',
    descriptionEn: 'Fast-paced vertical video editing with engaging transitions tailored for Reels and TikTok.',
    image: 'images/Video-Production/25.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Video+Production'
  },
  {
    id: 'vp-3',
    categoryId: 'video-production',
    titleAr: 'فيديو موشن جرافيك',
    titleEn: 'Motion Graphics Video',
    descriptionAr: 'شرح فكرتك أو خدمتك عبر رسوم متحركة وسيناريو بصري يسهل استيعاب المعلومات.',
    descriptionEn: 'Story-driven motion graphic animations designed to explain concepts and services clearly.',
    image: 'images/Video-Production/24.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Video+Production'
  },

  // =========================================================================
  // Category 4: Rapid Growth Services (9 Services)
  // =========================================================================
  {
    id: 'rg-1',
    categoryId: 'rapid-growth',
    titleAr: 'زيادة المتابعين لمنصات التواصل',
    titleEn: 'Followers: Facebook – TikTok – Instagram – Snapchat',
    descriptionAr: 'حلول دعم الحضور الرقمي وتوسيع قاعدة المتابعين لحسابات التواصل الاجتماعي.',
    descriptionEn: 'Audience expansion solutions to increase follower counts across social media platforms.',
    image: 'images/Rapid-growth/33.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-2',
    categoryId: 'rapid-growth',
    titleAr: 'زيادة المشاهدات',
    titleEn: 'Views: Facebook – TikTok – Instagram – Snapchat',
    descriptionAr: 'تعزيز ظهور مقاطع الفيديو وزيادة نسب المشاهدات والتفاعل على المحتوى المنشور.',
    descriptionEn: 'Video visibility enhancement to drive higher view counts on social channels.',
    image: 'images/Rapid-growth/34.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-3',
    categoryId: 'rapid-growth',
    titleAr: 'زيادة الإعجابات',
    titleEn: 'Likes: Facebook – TikTok – Instagram – Snapchat',
    descriptionAr: 'تحفيز التفاعل على المنشورات وتعزيز مصداقية الحساب الرقمي أمام الزوار الجدد.',
    descriptionEn: 'Post engagement stimulation to strengthen social proof on your published content.',
    image: 'images/Rapid-growth/35.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-4',
    categoryId: 'rapid-growth',
    titleAr: 'زيادة المشاركات',
    titleEn: 'Shares: Facebook – TikTok – Instagram – Snapchat',
    descriptionAr: 'دعم انتشار المحتوى وتوسيع دائرة وصول المنشورات بين أوساط الجمهور المستهدف.',
    descriptionEn: 'Content distribution amplification to expand organic reach across target audiences.',
    image: 'images/Rapid-growth/36.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-5',
    categoryId: 'rapid-growth',
    titleAr: 'اشتراك توثيق فيسبوك',
    titleEn: 'Facebook Verification Subscription',
    descriptionAr: 'مساعدة في استيفاء متطلبات التوثيق للحسابات والصفحات عبر برامج فيسبوك الرسمية.',
    descriptionEn: 'Guidance and setup assistance for official Facebook account and page verification.',
    image: 'images/Rapid-growth/37.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-6',
    categoryId: 'rapid-growth',
    titleAr: 'اشتراك توثيق إنستجرام',
    titleEn: 'Instagram Verification Subscription',
    descriptionAr: 'إرشاد وتسهيل خطوات الاشتراك في شارة التوثيق الرسمية على منصة إنستجرام.',
    descriptionEn: 'Support for submitting and securing official verification badges on Instagram.',
    image: 'images/Rapid-growth/38.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-7',
    categoryId: 'rapid-growth',
    titleAr: 'استعادة صفحات فيسبوك',
    titleEn: 'Facebook Page Account Recovery',
    descriptionAr: 'خدمات الدعم الفني لمتابعة استرجاع الصفحات المعطلة وحل المشكلات الإدارية.',
    descriptionEn: 'Technical support to assist in recovering disabled or inaccessible Facebook pages.',
    image: 'images/Rapid-growth/39.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-8',
    categoryId: 'rapid-growth',
    titleAr: 'استعادة حساب إنستجرام',
    titleEn: 'Instagram Account Recovery',
    descriptionAr: 'المساعدة التقنية في خطوات استعادة الحسابات المغلقة أو التي واجهت صعوبات تسجيل الدخول.',
    descriptionEn: 'Specialized assistance to recover compromised or restricted Instagram accounts.',
    image: 'images/Rapid-growth/40.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },
  {
    id: 'rg-9',
    categoryId: 'rapid-growth',
    titleAr: 'استعادة حساب تيك توك',
    titleEn: 'TikTok Account Recovery',
    descriptionAr: 'متابعة المشكلات التقنية المتعلقة بتعليق الحساب واستعادة إمكانية الوصول والتفاعل.',
    descriptionEn: 'Technical assistance with TikTok account reinstatement appeals and login issues.',
    image: 'images/Rapid-growth/41.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Growth+Services'
  },

  // =========================================================================
  // Category 5: Business Solutions (12 Services)
  // =========================================================================
  {
    id: 'bs-1',
    categoryId: 'business-solutions',
    titleAr: 'دراسات الجدوى للمشروعات والمتاجر الإلكترونية',
    titleEn: 'Feasibility Studies (Projects – E-commerce)',
    descriptionAr: 'تحليل مالي وتشغيلي دقيق لتقدير فرص نجاح مشروعك وإدارة التكاليف بفعالية.',
    descriptionEn: 'Financial and operational feasibility analysis to evaluate business opportunities.',
    image: 'images/Business-Solutions/15.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-2',
    categoryId: 'business-solutions',
    titleAr: 'كتابة السكريبت',
    titleEn: 'Script Writing',
    descriptionAr: 'صياغة نصوص إعلانية وسيناريوهات مؤثرة تناسب الفيديو والمحتوى التسويقي.',
    descriptionEn: 'Compelling promotional scripts and creative video narrative development.',
    image: 'images/Business-Solutions/16.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-3',
    categoryId: 'business-solutions',
    titleAr: 'إعداد الدورات التدريبية المتكاملة',
    titleEn: 'Full Course Creation – All Fields',
    descriptionAr: 'هيكلة المناهج التعليمية وتصميم العروض والمحتوى التدريبي بصيغة جاهزة للمنصات.',
    descriptionEn: 'End-to-end curriculum structuring and slide deck design for educational courses.',
    image: 'images/Business-Solutions/17.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-4',
    categoryId: 'business-solutions',
    titleAr: 'إنشاء وتجهيز حساب إعلانات جوجل',
    titleEn: 'Google Ads Account Setup',
    descriptionAr: 'ضبط إعدادات الحساب وربط أدوات التتبع والفوترة لإطلاق الحملات بسلاسة.',
    descriptionEn: 'Initial configuration, billing setup, and conversion tracking for Google Ads.',
    image: 'images/Business-Solutions/18.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-5',
    categoryId: 'business-solutions',
    titleAr: 'خدمات تقييمات جوجل',
    titleEn: 'Google Reviews Services',
    descriptionAr: 'استراتيجيات تحفيز التقييمات الإيجابية وتعزيز السمعة الرقمية للنشاط التجاري.',
    descriptionEn: 'Reputation management strategies to encourage authentic customer reviews.',
    image: 'images/Business-Solutions/19.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-6',
    categoryId: 'business-solutions',
    titleAr: 'إنشاء رابط موحد',
    titleEn: 'Unified Link Creation Service',
    descriptionAr: 'صفحة روابط موحدة تجمع كافة حساباتك وقنواتك في رابط واحد ملائم للبايو.',
    descriptionEn: 'Smart bio link page consolidating all your digital profiles in one central link.',
    image: 'images/Business-Solutions/20.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-7',
    categoryId: 'business-solutions',
    titleAr: 'اقتراح وبحث أسماء تجارية',
    titleEn: 'Business Name Research & Brainstorming',
    descriptionAr: 'توليد أفكار أسماء مميزة وسهلة التذكر متوافقة مع متطلبات النطاقات والعلامات.',
    descriptionEn: 'Creative brand name brainstorming with domain availability validation.',
    image: 'images/Business-Solutions/21.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-8',
    categoryId: 'business-solutions',
    titleAr: 'خدمات خرائط جوجل',
    titleEn: 'Google Maps Services',
    descriptionAr: 'إضافة النشاط التجاري وتحديث بيانات الموقع وساعات العمل والاتصال بدقة.',
    descriptionEn: 'Business profile listing, location pin optimization, and hours update on Google Maps.',
    image: 'images/Business-Solutions/22.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-9',
    categoryId: 'business-solutions',
    titleAr: 'حل مشكلات خرائط جوجل والتوثيق',
    titleEn: 'Google Maps & Verification Issue Resolution',
    descriptionAr: 'معالجة مشكلات تعليق الموقع أو عدم ظهور البيانات وتأكيد صحة النشاط التجاري.',
    descriptionEn: 'Troubleshooting suspended listings and resolving Google Business verification issues.',
    image: 'images/Business-Solutions/23.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-10',
    categoryId: 'business-solutions',
    titleAr: 'إنشاء حساب Gmail للأعمال',
    titleEn: 'Gmail Business Account Creation',
    descriptionAr: 'إعداد بريد إلكتروني رسمي باسم نطاق مؤسستك عبر Google Workspace.',
    descriptionEn: 'Professional business email setup powered by Google Workspace on your domain.',
    image: 'images/Business-Solutions/26.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-11',
    categoryId: 'business-solutions',
    titleAr: 'إنشاء حسابات التواصل الاجتماعي',
    titleEn: 'Professional Social Media Account Creation',
    descriptionAr: 'تأسيس الحسابات الرسمية وضبط الإعدادات والروابط وصور الغلاف بصورة متناسقة.',
    descriptionEn: 'Complete social media profile setup with unified branding and bio configuration.',
    image: 'images/Business-Solutions/27.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  },
  {
    id: 'bs-12',
    categoryId: 'business-solutions',
    titleAr: 'إدارة الحملات الإعلانية المدفوعة',
    titleEn: 'Paid Advertising Campaigns Management',
    descriptionAr: 'تخطيط وإدارة الحملات الإعلانية وتحسين الأداء للوصول إلى الجمهور المهتم بكفاءة.',
    descriptionEn: 'Performance-driven advertising campaign management targeting qualified audiences.',
    image: 'images/Business-Solutions/30.jpg',
    storeUrl: 'https://store.trndk.com/services?category=Business+Solutions'
  }
];
