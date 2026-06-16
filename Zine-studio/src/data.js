// These data objects keep labels and prompt guidance in one place.
// New contributors can add Zine types or styles without editing form logic.
export const zineTypes = [
  {
    id: "travel",
    labelZh: "旅行相册",
    labelEn: "Travel Album",
    focus:
      "路线记忆、地点体验、旅途照片、票据纹理、城市观察、个人感受和时间顺序。"
  },
  {
    id: "fan",
    labelZh: "粉丝制品",
    labelEn: "Fan Zine",
    focus:
      "人物魅力、作品元素、应援语气、收藏感、粉丝社群语言和可分享页面。"
  },
  {
    id: "cultural-product",
    labelZh: "文创产品",
    labelEn: "Cultural Creative Product",
    focus:
      "文化来源、产品故事、材质细节、使用场景、包装延展和品牌化表达。"
  },
  {
    id: "ip",
    labelZh: "IP 设定集",
    labelEn: "IP Guidebook",
    focus:
      "世界观、角色设定、视觉符号、故事线索、设定说明和衍生设计规则。"
  },
  {
    id: "photography",
    labelZh: "摄影集",
    labelEn: "Photography Zine",
    focus:
      "照片顺序、影像主题、光线色彩、留白节奏、标题系统和摄影师陈述。"
  },
  {
    id: "personal-growth",
    labelZh: "个人成长记录",
    labelEn: "Personal Growth Journal",
    focus:
      "阶段变化、情绪记录、习惯轨迹、私人反思、纪念节点和鼓励语句。"
  }
];

export const designStyles = [
  {
    id: "minimal",
    labelZh: "极简",
    labelEn: "Minimal",
    guidance:
      "使用克制留白、清晰网格、少量强调色、安静标题和高可读正文。"
  },
  {
    id: "scrapbook",
    labelZh: "拼贴",
    labelEn: "Scrapbook",
    guidance:
      "使用贴纸、票据、手写标注、照片叠放、胶带边缘和日记式页面节奏。"
  },
  {
    id: "vintage",
    labelZh: "复古",
    labelEn: "Vintage",
    guidance:
      "使用旧纸张质感、胶片颗粒、复古字体、低饱和配色和怀旧叙事。"
  },
  {
    id: "y2k",
    labelZh: "Y2K",
    labelEn: "Y2K",
    guidance:
      "使用金属感、亮色点缀、数码界面元素、闪光纹理和未来复古气质。"
  },
  {
    id: "cute",
    labelZh: "可爱",
    labelEn: "Cute",
    guidance:
      "使用柔和色块、圆润图形、小图标、轻松语气和亲密手账感。"
  },
  {
    id: "editorial",
    labelZh: "杂志风",
    labelEn: "Editorial",
    guidance:
      "使用强标题层级、专栏结构、大片图片、精确图注和成熟出版物节奏。"
  }
];

export const defaultPrompt = `请填写左侧表单，然后点击 Generate Prompt。`;

