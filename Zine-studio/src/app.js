// App logic for Zine Studio. Everything runs in the browser with no backend.
const data = window.ZINE_STUDIO_DATA;

const form = document.querySelector("#zineForm");
const zineTypeSelect = document.querySelector("#zineType");
const styleSelect = document.querySelector("#style");
const pagesSelect = document.querySelector("#pages");
const useCaseSelect = document.querySelector("#useCase");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const clearButton = document.querySelector("#clearButton");
const languageButton = document.querySelector("#languageButton");
const modeButtons = document.querySelectorAll(".mode-button");
const promptResult = document.querySelector("#promptResult");
const promptOutput = document.querySelector("#promptOutput");
const statusMessage = document.querySelector("#statusMessage");
const resultTitle = document.querySelector("#result-title");
const thumbnailPanel = document.querySelector("#thumbnailPanel");
const thumbnailGrid = document.querySelector("#thumbnailGrid");
const zineTypeCards = document.querySelector("#zineTypeCards");
const styleCards = document.querySelector("#styleCards");
const exampleCards = document.querySelector("#exampleCards");
const roadmapList = document.querySelector("#roadmapList");

let activeLanguage = "zh";
let activeOutputMode = "planning";
let buttonTimers = [];

function addOptions(selectElement, items) {
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.label;
    selectElement.append(option);
  });
}

function findItem(items, id) {
  return items.find((item) => item.id === id);
}

function readText(formData, key, fallbackText) {
  const value = String(formData.get(key) || "").trim();
  return value.length > 0 ? value : fallbackText;
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function renderZineTypeCards() {
  data.zineTypes.forEach((item) => {
    const card = makeElement("article", "type-card");
    card.innerHTML = `
      <span class="card-icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.zh}</h3>
      <strong>${item.en}</strong>
      <p>${item.description}</p>
    `;
    zineTypeCards.append(card);
  });
}

function renderStyleCards() {
  data.styles.forEach((item) => {
    const card = makeElement("article", "style-card");
    card.innerHTML = `
      <div class="style-preview ${item.previewClass}" aria-hidden="true">
        <span></span>
        <span>${item.id === "cute" ? "✿" : ""}</span>
        <span>${item.id === "y2k" ? "✦" : ""}</span>
      </div>
      <h3>${item.zh}</h3>
      <strong>${item.en}</strong>
      <p>${item.description}</p>
    `;
    styleCards.append(card);
  });
}

function renderExampleCards() {
  data.examples.forEach((item) => {
    const card = makeElement("article", "example-card");
    card.innerHTML = `
      <div class="example-cover ${item.className}" aria-hidden="true"></div>
      <div class="example-content">
        <h3>${item.zh}</h3>
        <strong>${item.en}</strong>
        <p>${item.description}</p>
      </div>
    `;
    exampleCards.append(card);
  });
}

function renderRoadmap() {
  data.roadmap.forEach((item) => {
    const card = makeElement("article", "roadmap-item");
    card.innerHTML = `
      <h3>${item.version} ${item.title}</h3>
      <p>${item.description}</p>
    `;
    roadmapList.append(card);
  });
}

function buildPageStructure(pageCount) {
  return `- 封面 / Cover: title, subtitle, hero image, visual motif.
- 开场页 / Opening: one-sentence concept and reader promise.
- 目录或路线 / Contents or Journey Map: section list, path, or visual index.
- 主体章节 / Main Sections: divide the ${pageCount} pages into 3 to 5 readable chapters.
- 素材页 / Materials Pages: place photos, tickets, notes, quotes, captions, and small objects.
- 情绪页 / Mood Pages: add bilingual short copy, diary notes, or poetic captions.
- 结尾页 / Closing: credits, final sentence, archive note, and reuse direction.`;
}

function buildProjectContext() {
  const formData = new FormData(form);
  const selectedType = findItem(data.zineTypes, formData.get("zineType"));
  const selectedStyle = findItem(data.styles, formData.get("style"));
  const selectedPages = findItem(data.pages, formData.get("pages"));
  const selectedUseCase = findItem(data.useCases, formData.get("useCase"));

  const theme = readText(formData, "theme", data.defaults.theme);
  const audience = readText(formData, "audience", data.defaults.audience);
  const mood = readText(formData, "mood", data.defaults.mood);
  const materials = readText(formData, "materials", data.defaults.materials);
  const additionalNotes = readText(formData, "additionalNotes", data.defaults.additionalNotes);

  return {
    selectedType,
    selectedStyle,
    selectedPages,
    selectedUseCase,
    theme,
    audience,
    mood,
    materials,
    additionalNotes,
    pageCount: selectedPages.id
  };
}

function buildPlanningPrompt(context) {
  return `# Zine Studio Bilingual Prompt

你是一位经验丰富的 Zine 编辑、视觉设计师、双语文案创作者和印刷出版顾问。请根据以下信息，帮助我策划一本完整的中英双语 Zine，并输出可直接用于创作、排版和继续生成图片的制作 Prompt。

You are an experienced zine editor, visual designer, bilingual copywriter, and print publication advisor. Based on the information below, create a complete bilingual zine-making prompt that can be used for writing, layout planning, and visual generation.

## 1. 项目类型 / Project Type

- Zine 类型 / Zine Type: ${context.selectedType.zh} / ${context.selectedType.en}
- 设计风格 / Style: ${context.selectedStyle.zh} / ${context.selectedStyle.en}
- 页数 / Pages: ${context.selectedPages.label}
- 使用场景 / Use Case: ${context.selectedUseCase.label}

## 2. 内容信息 / Content Information

- 主题 / Theme: ${context.theme}
- 目标读者 / Target Audience: ${context.audience}
- 情绪氛围 / Mood: ${context.mood}
- 素材描述 / Materials: ${context.materials}
- 额外要求 / Additional Notes: ${context.additionalNotes}

## 3. 页面结构建议 / Page Structure Suggestions

请为 ${context.pageCount} 页 Zine 设计清晰的阅读节奏，并包含以下结构：

${buildPageStructure(context.pageCount)}

Please design a clear reading rhythm for a ${context.pageCount}-page zine and include the structure above.

## 4. 视觉排版建议 / Visual Layout Suggestions

- 以 editorial, vintage magazine, scrapbook, travel journal, soft retro, cozy, creative, paper texture, clean layout 为整体视觉关键词。
- 根据 ${context.selectedStyle.zh} / ${context.selectedStyle.en} 风格，规划封面、跨页、图文比例、标题层级、页码、图注和留白。
- 使用纸张质感、手账拼贴、照片边框、票据、邮票、胶带、手写批注或杂志网格来增强 Zine 感。
- 保持中英文信息层级清楚：中文用于情绪表达和叙事，英文用于标题、图注、短句或章节名。
- 给出配色建议、字体建议、图片处理建议和每类素材的摆放建议。

## 5. 输出格式要求 / Output Format Requirements

请用 Markdown 输出，必须包含：

1. 中英文 Zine 标题 / Bilingual zine title
2. 一句话概念 / One-sentence concept
3. 整体创作方向 / Overall creative direction
4. ${context.pageCount} 页逐页规划 / Page-by-page plan for ${context.pageCount} pages
5. 每页中文文案 / Chinese copy for each page
6. 每页英文文案 / English copy for each page
7. 每页视觉排版建议 / Visual layout suggestion for each page
8. 每页素材使用建议 / Material suggestion for each page
9. 封面和封底设计建议 / Cover and back cover direction
10. 打印或社交媒体发布注意事项 / Print or social media export notes

## 6. 页面输出模板 / Page Output Template

每一页请按以下格式输出：

### Page 01 / 第 1 页
- Page purpose / 页面作用:
- Layout / 版式:
- Chinese copy / 中文文案:
- English copy / 英文文案:
- Materials / 素材:
- Visual prompt / 视觉生成提示词:

请保证内容适合创作者直接复制到任意 AI 工具中继续使用，并让最终 Zine 像一本复古旅行手账、独立杂志和文创品牌小册的结合体。`;
}

function buildVisualBase(context) {
  return `${context.theme}, ${context.selectedType.en}, ${context.selectedStyle.en} zine design, ${context.mood}, editorial vintage magazine, scrapbook travel journal, soft retro paper texture, clean layout, tactile printed paper, photo collage, ticket stubs, stamps, masking tape, handwritten notes, bilingual Chinese and English typography, cozy creative art direction, high detail, refined composition`;
}

function buildImagePrompt(context) {
  const visualBase = buildVisualBase(context);
  const negativePrompt = "low resolution, blurry, messy text, unreadable typography, distorted layout, overexposed image, watermark, logo, extra fingers, deformed objects, crowded composition";
  const referenceList = data.thumbnailReferences
    .map((item, index) => `${index + 1}. ${item.title}: ${item.description}`)
    .join("\n");
  const toolPrompts = data.imageTools
    .map((tool) => {
      if (tool.id === "midjourney") {
        return `### ${tool.name}
/imagine prompt: ${visualBase}, cover and zine spread visual system, ${context.materials}, ${context.additionalNotes} --ar 4:5 --style raw --v 6`;
      }

      if (tool.id === "stable-diffusion") {
        return `### ${tool.name}
Positive prompt:
${visualBase}, cover design, opening spread, material collage, detail poster, ${context.materials}, ${context.additionalNotes}

Negative prompt:
${negativePrompt}

Suggested settings:
Aspect ratio 4:5 for cover, 16:9 for opening spread, 1:1 for collage thumbnails.`;
      }

      if (tool.id === "dalle") {
        return `### ${tool.name}
Create a polished zine visual reference for "${context.theme}". The image should look like a ${context.selectedStyle.en} ${context.selectedType.en}: vintage editorial paper texture, scrapbook collage, clean bilingual layout, tactile printed objects, photos, tickets, stamps, tape, and handwritten notes. Mood: ${context.mood}. Materials to include: ${context.materials}. Additional direction: ${context.additionalNotes}. Keep text minimal and readable.`;
      }

      if (tool.id === "jimeng") {
        return `### ${tool.name}
为「${context.theme}」生成一组 ${context.selectedStyle.zh} 风格的 ${context.selectedType.zh} 视觉参考图。画面像复古独立杂志与手账拼贴结合，包含纸张纹理、照片、票据、邮票、胶带、手写批注和清晰的中英双语排版。情绪氛围：${context.mood}。素材：${context.materials}。额外要求：${context.additionalNotes}。`;
      }

      return `### ${tool.name}
生成「${context.theme}」的 Zine 视觉参考。镜头为平面静物与出版物排版结合，构图清晰，有纸张纹理、照片拼贴、票据、邮票、胶带和手写笔记。风格：${context.selectedStyle.zh} / ${context.selectedStyle.en}。类型：${context.selectedType.zh} / ${context.selectedType.en}。氛围：${context.mood}。输出应像可用于封面、跨页、素材拼贴和细节海报的参考图。`;
    })
    .join("\n\n");

  return `# Zine Studio AI Image Prompt

这是一组可用于 Midjourney、Stable Diffusion、DALL·E、即梦、可灵的 Zine 视觉生成 Prompt。

## Project Brief / 项目信息

- Zine 类型 / Zine Type: ${context.selectedType.zh} / ${context.selectedType.en}
- 设计风格 / Style: ${context.selectedStyle.zh} / ${context.selectedStyle.en}
- 主题 / Theme: ${context.theme}
- 目标读者 / Target Audience: ${context.audience}
- 情绪氛围 / Mood: ${context.mood}
- 素材描述 / Materials: ${context.materials}
- 额外要求 / Additional Notes: ${context.additionalNotes}

## 4 Visual References / 4 张参考缩略图方向

${referenceList}

## Universal Visual Direction / 通用视觉方向

${visualBase}

## Tool-Specific Prompts / 分工具 Prompt

${toolPrompts}

## Notes / 使用建议

- 先生成 Cover，再生成 Opening Spread、Material Collage 和 Detail Poster。
- 如果工具支持参考图，请把网页中的 4 张缩略图作为构图方向参考。
- 如果工具支持尺寸，封面使用 4:5，跨页使用 16:9，拼贴和细节图使用 1:1。
- 中文文字容易变形时，请先生成无文字版，再在排版软件中添加中英文标题和图注。`;
}

function renderReferenceThumbnails(context) {
  thumbnailGrid.innerHTML = "";
  data.thumbnailReferences.forEach((item, index) => {
    const figure = makeElement("figure", `reference-thumb reference-${item.id} thumb-${context.selectedStyle.id}`);
    figure.innerHTML = `
      <div class="thumb-art" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <figcaption>
        <strong>${String(index + 1).padStart(2, "0")} ${item.title}</strong>
        <span>${context.selectedStyle.en} · ${context.selectedType.en}</span>
      </figcaption>
    `;
    thumbnailGrid.append(figure);
  });
  thumbnailPanel.hidden = false;
}

function showTemporaryButtonText(button, text, originalText) {
  button.textContent = text;
  const timer = window.setTimeout(() => {
    button.textContent = originalText;
  }, 1600);
  buttonTimers.push(timer);
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function updateModeButtons() {
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === activeOutputMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function copyPrompt() {
  const text = promptOutput.value.trim();

  if (text.length === 0) {
    setStatus("请先生成 Prompt。");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    promptOutput.focus();
    promptOutput.select();
    document.execCommand("copy");
  }

  showTemporaryButtonText(copyButton, "Copied ✓", data.i18n[activeLanguage].copy);
  setStatus("Prompt 已复制，可以粘贴到任意 AI 工具中使用。");
}

function generatePrompt(event) {
  event.preventDefault();
  const context = buildProjectContext();
  promptOutput.value =
    activeOutputMode === "planning" ? buildPlanningPrompt(context) : buildImagePrompt(context);
  resultTitle.textContent =
    activeOutputMode === "planning" ? "Zine Planning Prompt" : "AI Image Prompt";
  renderReferenceThumbnails(context);
  promptResult.classList.remove("is-hidden");
  showTemporaryButtonText(generateButton, "Prompt Generated ✓", data.i18n[activeLanguage].generate);
  setStatus(activeOutputMode === "planning" ? "Zine 规划 Prompt 已生成。" : "AI 生图 Prompt 已生成。");
}

function clearForm() {
  form.reset();
  promptOutput.value = "";
  thumbnailGrid.innerHTML = "";
  thumbnailPanel.hidden = true;
  promptResult.classList.add("is-hidden");
  setStatus("");
}

function toggleLanguage() {
  activeLanguage = activeLanguage === "zh" ? "en" : "zh";
  const labels = data.i18n[activeLanguage];
  generateButton.textContent = labels.generate;
  copyButton.textContent = labels.copy;
  clearButton.textContent = labels.clear;
  languageButton.textContent = activeLanguage === "zh" ? "中 / EN" : "EN / 中";
  setStatus(labels.ready);
}

function changeOutputMode(event) {
  activeOutputMode = event.currentTarget.dataset.mode;
  updateModeButtons();
}

function initializeApp() {
  buttonTimers.forEach((timer) => window.clearTimeout(timer));
  buttonTimers = [];

  addOptions(zineTypeSelect, data.zineTypes);
  addOptions(styleSelect, data.styles);
  addOptions(pagesSelect, data.pages);
  addOptions(useCaseSelect, data.useCases);
  renderZineTypeCards();
  renderStyleCards();
  renderExampleCards();
  renderRoadmap();
  thumbnailPanel.hidden = true;
  updateModeButtons();

  form.addEventListener("submit", generatePrompt);
  copyButton.addEventListener("click", copyPrompt);
  clearButton.addEventListener("click", clearForm);
  languageButton.addEventListener("click", toggleLanguage);
  modeButtons.forEach((button) => {
    button.addEventListener("click", changeOutputMode);
  });
}

initializeApp();
