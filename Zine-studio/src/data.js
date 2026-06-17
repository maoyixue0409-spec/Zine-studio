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

  examples: [
    {
      id: "chengdu-travel",
      zh: "成都旅行 Zine",
      en: "Chengdu Travel Zine",
      className: "example-chengdu",
      description: "以城市路线、街景照片、食物和票据为素材的旅行相册。"
    },
    {
      id: "japan-railway-travel",
      zh: "日本铁路旅行 Zine",
      en: "Japan Railway Travel Zine",
      className: "example-chengdu",
      description: "围绕车站、车票、列车窗口和路线地图组织的旅行 Zine。"
    },
    {
      id: "iceland-road-trip",
      zh: "冰岛自驾旅行 Zine",
      en: "Iceland Road Trip Zine",
      className: "example-photo",
      description: "用公路、风景、天气和路书节奏规划旅行影像叙事。"
    },
    {
      id: "street-photography",
      zh: "街头摄影 Zine",
      en: "Street Photography Zine",
      className: "example-photo",
      description: "用街头瞬间、人物剪影和城市纹理建立摄影集节奏。"
    },
    {
      id: "film-photography",
      zh: "胶片摄影 Zine",
      en: "Film Photography Zine",
      className: "example-photo",
      description: "突出胶片颗粒、冲扫色彩、留白和摄影师陈述。"
    },
    {
      id: "landscape-photography",
      zh: "风景摄影 Zine",
      en: "Landscape Photography Zine",
      className: "example-photo",
      description: "围绕自然风景、光线变化和宽幅照片进行页面规划。"
    },
    {
      id: "idol-fan",
      zh: "偶像粉丝 Zine",
      en: "Idol Fan Zine",
      className: "example-fan",
      description: "将舞台记忆、应援语句、视觉符号和收藏页排成小册。"
    },
    {
      id: "anime-fan",
      zh: "动画粉丝 Zine",
      en: "Anime Fan Zine",
      className: "example-fan",
      description: "围绕角色、场景、台词和社群二创整理粉丝刊物。"
    },
    {
      id: "game-character-fan",
      zh: "游戏角色粉丝 Zine",
      en: "Game Character Fan Zine",
      className: "example-fan",
      description: "为游戏角色建立角色页、装备页、台词页和视觉符号页。"
    },
    {
      id: "original-character",
      zh: "原创角色设定集",
      en: "Original Character Guidebook",
      className: "example-ip",
      description: "展示角色资料、服装、道具、色彩和性格关键词。"
    },
    {
      id: "fantasy-worldbuilding",
      zh: "幻想世界观 Zine",
      en: "Fantasy Worldbuilding Zine",
      className: "example-ip",
      description: "整理地图、种族、地点、历史和视觉符号系统。"
    },
    {
      id: "creature-encyclopedia",
      zh: "生物图鉴 Zine",
      en: "Creature Encyclopedia Zine",
      className: "example-ip",
      description: "用图鉴结构展示虚构生物、栖息地和设定说明。"
    },
    {
      id: "museum-product",
      zh: "博物馆文创 Zine",
      en: "Museum Product Zine",
      className: "example-culture",
      description: "把馆藏元素、产品故事和包装延展整合为提案小册。"
    },
    {
      id: "city-souvenir",
      zh: "城市纪念品 Zine",
      en: "City Souvenir Zine",
      className: "example-culture",
      description: "围绕城市符号、伴手礼和地方故事做产品提案。"
    },
    {
      id: "coffee-brand",
      zh: "咖啡品牌 Zine",
      en: "Coffee Brand Zine",
      className: "example-culture",
      description: "整理品牌故事、菜单、空间、杯套和周边视觉语言。"
    },
    {
      id: "growth-journal",
      zh: "成长日记 Zine",
      en: "Growth Journal",
      className: "example-growth",
      description: "以通用日记结构整理阶段变化、关键词和记录页面。"
    },
    {
      id: "memory-archive",
      zh: "记忆档案 Zine",
      en: "Memory Archive",
      className: "example-growth",
      description: "把照片、票据、文字片段和收藏物整理成档案册。"
    },
    {
      id: "life-timeline",
      zh: "生活时间线 Zine",
      en: "Life Timeline",
      className: "example-growth",
      description: "用时间线、章节和索引方式整理生活片段。"
    }
  ],

  roadmap: [
    {
      version: "V0.1",
      title: "Prompt Generator",
      description: "生成 Zine 内容结构、页数规划、排版建议、风格建议和 AI Prompt。"
    },
    {
      version: "V0.2",
      title: "Prompt Library",
      description: "沉淀 Travel、Photography、Fan、IP、Cultural Product 和 Personal Journal 模板。"
    },
    {
      version: "V0.3",
      title: "Layout Engine",
      description: "支持页数规划、目录规划、页面结构和 Zine Layout 规则。"
    },
    {
      version: "V0.4",
      title: "Style Engine",
      description: "建立风格系统、配色系统、字体系统和视觉参考生成规则。"
    },
    {
      version: "V0.5",
      title: "Template Marketplace",
      description: "支持社区上传 Travel、Photography、Fan、IP 和 Cultural Product Templates。"
    },
    {
      version: "V1.0",
      title: "Zine Studio Skill",
      description: "输入主题后自动生成目录、规划页数、推荐排版并生成完整 Prompt。"
    }
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
