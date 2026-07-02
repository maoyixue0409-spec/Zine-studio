// Zine Studio stores content data here so new contributors can edit options
// without changing the page structure or interaction code.
window.ZINE_STUDIO_DATA = {
  defaults: {
    theme: "城市旅行手账 / City Travel Zine",
    audience: "喜欢独立出版和视觉故事的创作者 / Zine creators and visual storytellers",
    mood: "温暖、治愈、怀旧 / Warm, Healing, Nostalgic",
    materials: "照片 30 张，包含街景、食物、车票、咖啡馆、手写笔记和小物件",
    additionalNotes: "加入手绘地图、票据拼贴、纸张纹理和独立杂志排版感"
  },

  demoDraft: {
    zineType: "travel-album",
    style: "scrapbook",
    pages: "16",
    useCase: "social-media",
    theme: "城市周末漫游 / City Weekend Walk",
    audience: "喜欢旅行、咖啡馆、城市散步和纸质手账的创作者 / creators who love travel, cafes, city walks and paper journals",
    mood: "轻松、温暖、复古、像收集城市碎片 / relaxed, warm, vintage, collecting city fragments",
    materials:
      "照片 24 张，包含街景、咖啡馆、车票、菜单、窗边光影、路牌、手写路线和小物件。",
    additionalNotes:
      "希望有拼贴感、手写地图、票据边框、照片图注、封面标题和适合社交媒体分享的排版建议。"
  },

  zineTypes: [
    {
      id: "travel-album",
      label: "旅行相册 / Travel Album",
      zh: "旅行相册",
      en: "Travel Album",
      icon: "📷",
      description: "记录旅途中的风景、美食、路线与收集物，适合做成旅行手账和城市漫游小册。"
    },
    {
      id: "fan-zine",
      label: "粉丝制品 / Fan Zine",
      zh: "粉丝制品",
      en: "Fan Zine",
      icon: "❤️",
      description: "围绕偶像、角色、作品和社群记忆，生成适合收藏与分享的应援小册。"
    },
    {
      id: "cultural-product",
      label: "文创产品 / Cultural Product",
      zh: "文创产品",
      en: "Cultural Product",
      icon: "🎁",
      description: "用于品牌、城市、产品或展览提案，把文化故事整理成可视化叙事。"
    },
    {
      id: "ip-guidebook",
      label: "IP 设定集 / IP Guidebook",
      zh: "IP 设定集",
      en: "IP Guidebook",
      icon: "🪐",
      description: "梳理原创角色、世界观、设定资料与视觉符号，适合 IP 企划与展示。"
    },
    {
      id: "photography-zine",
      label: "摄影集 / Photography Zine",
      zh: "摄影集",
      en: "Photography Zine",
      icon: "📸",
      description: "为照片建立顺序、章节、图注和编辑节奏，打造个人摄影小册。"
    },
    {
      id: "personal-journal",
      label: "个人记录 / Personal Journal",
      zh: "个人记录",
      en: "Personal Journal",
      icon: "🌱",
      description: "整理记忆、日常片段、时间线与个人收藏，适合做成通用记录型 Zine。"
    }
  ],

  styles: [
    {
      id: "minimal",
      label: "极简 / Minimal",
      zh: "极简",
      en: "Minimal",
      previewClass: "preview-minimal",
      description: "空白纸张、细线、克制网格和清晰留白，适合安静、成熟的内容。"
    },
    {
      id: "scrapbook",
      label: "拼贴 / Scrapbook",
      zh: "拼贴",
      en: "Scrapbook",
      previewClass: "preview-scrapbook",
      description: "拍立得、胶带、票据、手写标注和贴纸层叠，适合旅行与日记感。"
    },
    {
      id: "vintage",
      label: "复古 / Vintage",
      zh: "复古",
      en: "Vintage",
      previewClass: "preview-vintage",
      description: "旧纸张、邮票、旧照片、低饱和配色和怀旧出版物气质。"
    },
    {
      id: "y2k",
      label: "Y2K",
      zh: "Y2K",
      en: "Y2K",
      previewClass: "preview-y2k",
      description: "光盘、渐变贴纸、亮色高光和数码复古元素，适合轻快主题。"
    },
    {
      id: "cute",
      label: "可爱 / Cute",
      zh: "可爱",
      en: "Cute",
      previewClass: "preview-cute",
      description: "小熊、花朵、贴纸和柔软色块，适合温暖、亲密、轻松的表达。"
    },
    {
      id: "editorial",
      label: "杂志风 / Editorial",
      zh: "杂志风",
      en: "Editorial",
      previewClass: "preview-editorial",
      description: "杂志跨页、强标题、专栏结构和封面感，适合作品集与提案。"
    }
  ],

  pages: [
    { id: "8", label: "8 页 / 8 Pages" },
    { id: "12", label: "12 页 / 12 Pages" },
    { id: "16", label: "16 页 / 16 Pages" },
    { id: "24", label: "24 页 / 24 Pages" },
    { id: "32", label: "32 页 / 32 Pages" }
  ],

  useCases: [
    { id: "print", label: "打印 / Print" },
    { id: "social-media", label: "社交媒体分享 / Social Media" },
    { id: "fan-event", label: "粉丝应援 / Fan Event" },
    { id: "product-proposal", label: "文创提案 / Product Proposal" },
    { id: "portfolio", label: "作品集 / Portfolio" },
    { id: "personal-archive", label: "自我记录 / Personal Archive" }
  ],

  materialTags: [
    { id: "photo", label: "照片 / Photo" },
    { id: "ticket", label: "票据 / Ticket" },
    { id: "sticker", label: "贴纸 / Sticker" },
    { id: "typeface", label: "字体 / Typeface" },
    { id: "color", label: "配色 / Color" },
    { id: "layout-reference", label: "排版参考 / Layout Reference" }
  ],

  styleReferenceTags: [
    { id: "overall-style", label: "整体风格 / Overall Style" },
    { id: "mood", label: "情绪氛围 / Mood" },
    { id: "color-palette", label: "配色参考 / Color Palette" },
    { id: "layout", label: "排版结构 / Layout" },
    { id: "texture", label: "材质纹理 / Texture" },
    { id: "typography", label: "字体气质 / Typography" }
  ],

  imageTools: [
    {
      id: "midjourney",
      name: "Midjourney",
      note: "Use one compact prompt with aspect ratio and style parameters."
    },
    {
      id: "stable-diffusion",
      name: "Stable Diffusion",
      note: "Use positive prompt, negative prompt, aspect ratio, sampler-ready detail."
    },
    {
      id: "dalle",
      name: "DALL·E",
      note: "Use natural language with clear layout, subject, style, and constraints."
    },
    {
      id: "jimeng",
      name: "即梦",
      note: "Use Chinese visual direction with clear scene, material, layout, and atmosphere."
    },
    {
      id: "kling",
      name: "可灵",
      note: "Use Chinese visual direction with camera, composition, texture, and lighting."
    }
  ],

  thumbnailReferences: [
    {
      id: "cover",
      title: "Cover",
      description: "封面视觉：标题、主图、纸张纹理和品牌式封面构图。"
    },
    {
      id: "spread",
      title: "Opening Spread",
      description: "开场跨页：左侧叙事文字，右侧照片拼贴和路线元素。"
    },
    {
      id: "collage",
      title: "Material Collage",
      description: "素材拼贴：照片、票据、邮票、胶带和手写批注组合。"
    },
    {
      id: "poster",
      title: "Detail Poster",
      description: "细节海报：一句标题、局部素材、图注和留白节奏。"
    }
  ],

  i18n: {
    zh: {
      generate: "生成 Prompt / Generate Prompt",
      copy: "复制 Prompt / Copy Prompt",
      clear: "清空表单 / Clear",
      ready: "已切换到中文提示。"
    },
    en: {
      generate: "Generate Prompt",
      copy: "Copy Prompt",
      clear: "Clear",
      ready: "English control labels are active."
    }
  }
};
