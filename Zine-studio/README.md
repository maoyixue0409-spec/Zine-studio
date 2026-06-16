# Zine Studio

Zine Studio 是一个中英双语 AI Zine 生成工具。创作者可以在网页中填写 Zine 类型、设计风格、页数、用途、主题、素材描述和文字内容，系统会自动生成一段完整的中英双语 Zine 制作 Prompt。

用户可以把生成的 Prompt 复制到 ChatGPT、Claude、Gemini、通义千问、豆包等 AI 工具中使用。当前版本不接入真实 AI API，所有内容都在浏览器本地生成。

## Features

- 中英双语 Prompt 生成
- 6 种 Zine 类型
- 6 种视觉风格
- 表单输入主题、素材、目标读者、页数、使用场景、情绪氛围和额外要求
- 一键复制 Prompt
- 一键清空表单
- 纯 HTML、CSS、JavaScript 静态网页
- 适合 GitHub 开源维护的目录结构

## Zine Types

- 旅行相册 Travel Album
- 粉丝制品 Fan Zine
- 文创产品 Cultural Creative Product
- IP 设定集 IP Guidebook
- 摄影集 Photography Zine
- 个人成长记录 Personal Growth Journal

## Design Styles

- 极简 Minimal
- 拼贴 Scrapbook
- 复古 Vintage
- Y2K
- 可爱 Cute
- 杂志风 Editorial

## Project Structure

```text
zine-studio/
├── README.md
├── LICENSE
├── package.json
├── .gitignore
├── index.html
├── src/
│   ├── style.css
│   ├── app.js
│   └── data.js
├── prompts/
│   ├── system-prompt.md
│   ├── travel-zine.md
│   ├── fan-zine.md
│   ├── cultural-product-zine.md
│   ├── ip-zine.md
│   ├── photography-zine.md
│   └── personal-growth-zine.md
├── templates/
│   ├── travel.json
│   ├── fan.json
│   ├── cultural-product.json
│   ├── ip.json
│   ├── photography.json
│   └── personal-growth.json
├── styles/
│   ├── minimal.json
│   ├── scrapbook.json
│   ├── vintage.json
│   ├── y2k.json
│   ├── cute.json
│   └── editorial.json
├── examples/
│   ├── chengdu-travel-zine.md
│   ├── idol-fanzine.md
│   ├── cultural-product-zine.md
│   ├── original-ip-zine.md
│   ├── photography-zine.md
│   └── personal-growth-zine.md
└── docs/
    ├── getting-started.md
    ├── zine-types.md
    ├── style-guide.md
    ├── print-guide.md
    ├── codex-skill-plan.md
    └── roadmap.md
```

## Quick Start

### Option 1: Open Directly

Open `index.html` in a modern browser.

### Option 2: Run Local Server

```bash
npm start
```

Then open:

```text
http://localhost:4173
```

If `npm` is not available on your machine, run:

```bash
python3 -m http.server 4173
```

## How It Works

1. The user selects a Zine type and visual style.
2. The user fills in theme, materials, audience, page count, use case, mood, and extra requirements.
3. `src/app.js` reads the form values.
4. `src/data.js` provides bilingual labels and structured guidance.
5. The app combines the values into a complete bilingual Prompt.
6. The generated Prompt is shown in the output panel and can be copied.

## Development Notes

- `index.html` defines the page structure.
- `src/style.css` controls visual design and responsive layout.
- `src/data.js` stores Zine type and style data.
- `src/app.js` handles form actions and Prompt generation.
- `prompts/` stores reusable Prompt templates for each Zine type.
- `templates/` stores structured JSON templates.
- `styles/` stores structured JSON style profiles.
- `examples/` stores ready-to-read sample outputs.
- `docs/` stores user and contributor documentation.

## Future Direction

Zine Studio will expand into:

- A richer Prompt library
- Exportable Markdown and JSON prompt packs
- A Codex Skill
- A ChatGPT Skill
- Community contributed Zine templates
- Print layout guidance for foldable and booklet formats

## License

MIT License
