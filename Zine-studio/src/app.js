import { defaultPrompt, designStyles, zineTypes } from "./data.js";

const form = document.querySelector("#zineForm");
const zineTypeSelect = document.querySelector("#zineType");
const designStyleSelect = document.querySelector("#designStyle");
const promptOutput = document.querySelector("#promptOutput");
const copyButton = document.querySelector("#copyButton");
const clearButton = document.querySelector("#clearButton");
const statusMessage = document.querySelector("#statusMessage");

// Convert the data lists from src/data.js into select options.
function addOptions(selectElement, items) {
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.labelZh} ${item.labelEn}`;
    selectElement.append(option);
  });
}

// Form values store stable ids. This helper returns the full data object.
function findById(items, id) {
  return items.find((item) => item.id === id);
}

// FormData can return File or string values. This app only needs text.
function readFormValue(formData, key) {
  return String(formData.get(key) || "").trim();
}

function fallbackText(value, text) {
  return value.length > 0 ? value : text;
}

// Build a complete bilingual prompt from the current form state.
function buildPrompt(formData) {
  const selectedType = findById(zineTypes, readFormValue(formData, "zineType"));
  const selectedStyle = findById(designStyles, readFormValue(formData, "designStyle"));

  const theme = fallbackText(readFormValue(formData, "theme"), "未填写，请根据 Zine 类型自行补全一个清晰主题");
  const materials = fallbackText(readFormValue(formData, "materials"), "未填写，请先列出可使用的文字、图片和视觉素材方向");
  const audience = fallbackText(readFormValue(formData, "audience"), "未填写，请设定适合该主题的目标读者");
  const pages = fallbackText(readFormValue(formData, "pages"), "12");
  const useCase = fallbackText(readFormValue(formData, "useCase"), "社交媒体发布与电子版阅读");
  const mood = fallbackText(readFormValue(formData, "mood"), "清晰、有情绪、有创作者个人表达");
  const extraRequirements = fallbackText(readFormValue(formData, "extraRequirements"), "请给出完整页码规划、页面文案和视觉建议");

  return `# Zine Studio Prompt

你是一位经验丰富的 Zine 编辑、视觉设计师和双语文案创作者。请根据以下信息，为我策划并生成一本完整的中英双语 Zine 制作方案。

You are an experienced zine editor, visual designer, and bilingual copywriter. Based on the information below, create a complete bilingual zine production plan.

## 1. Basic Information / 基本信息

- Zine 类型 / Zine Type: ${selectedType.labelZh} ${selectedType.labelEn}
- 设计风格 / Design Style: ${selectedStyle.labelZh} ${selectedStyle.labelEn}
- Zine 主题 / Theme: ${theme}
- 目标读者 / Target Audience: ${audience}
- 页数 / Page Count: ${pages}
- 使用场景 / Use Case: ${useCase}
- 情绪氛围 / Mood: ${mood}

## 2. Source Materials / 素材描述

${materials}

## 3. Creative Direction / 创作方向

- 类型重点 / Type Focus: ${selectedType.focus}
- 风格规则 / Style Guidance: ${selectedStyle.guidance}
- 额外要求 / Extra Requirements: ${extraRequirements}

## 4. Please Generate / 请生成

请输出以下内容：

1. Zine title in Chinese and English / 中英文标题
2. One-sentence concept / 一句话概念
3. Overall creative direction / 整体创作方向
4. Page-by-page structure for ${pages} pages / ${pages} 页逐页规划
5. Suggested cover design / 封面设计建议
6. Suggested layout, typography, color palette, and image treatment / 排版、字体、配色和图片处理建议
7. Bilingual copywriting for each page / 每页中英双语文案
8. AI image prompt suggestions for key pages / 重点页面的 AI 图像提示词
9. Print or digital export notes / 打印或数字发布注意事项

## 5. Output Format / 输出格式

请使用清晰的 Markdown 结构输出。每一页都需要包含：

- Page number / 页码
- Page purpose / 页面作用
- Visual layout / 视觉排版
- Chinese copy / 中文文案
- English copy / 英文文案
- Image or material suggestion / 图片或素材建议

请保证整体内容适合创作者直接复制、修改、排版和发布。`;
}

// Clipboard API is the modern path. The fallback supports older browsers.
async function copyPrompt() {
  const text = promptOutput.value.trim();

  if (text.length === 0) {
    setStatus("还没有可复制的 Prompt。");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setStatus("Prompt 已复制。");
  } catch (error) {
    promptOutput.select();
    document.execCommand("copy");
    setStatus("Prompt 已复制。");
  }
}

// Reset the form and restore the starter message.
function clearForm() {
  form.reset();
  promptOutput.value = defaultPrompt;
  setStatus("表单已清空。");
}

function setStatus(message) {
  statusMessage.textContent = message;
}

// Keep initialization in one place so the HTML stays simple.
function initializeApp() {
  addOptions(zineTypeSelect, zineTypes);
  addOptions(designStyleSelect, designStyles);
  promptOutput.value = defaultPrompt;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  promptOutput.value = buildPrompt(new FormData(form));
  setStatus("Prompt 已生成。");
});

copyButton.addEventListener("click", copyPrompt);
clearButton.addEventListener("click", clearForm);

initializeApp();
