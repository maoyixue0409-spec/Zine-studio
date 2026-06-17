# Zine Studio

Zine Studio is an open-source AI-powered Zine planning toolkit.

It helps creators generate:

- Content structure
- Page planning
- Layout ideas
- Style references
- AI prompts
- Print planning

for travel zines, photography books, fan projects, cultural products, IP guidebooks and personal journals.

Zine Studio 是一个开源 AI Zine 创作工具。

帮助创作者快速生成：

- 内容结构
- 页面规划
- 排版建议
- 风格参考
- AI Prompt
- 打印规划

适用于旅行相册、摄影集、粉丝制品、文创产品、IP设定集和个人记录。

## Features

- Pure HTML, CSS and JavaScript.
- No React, no backend, no API.
- Runs locally by opening `index.html`.
- Supports Zine Planning Prompt and Image Prompt output modes.
- Generates image prompts for Midjourney, Stable Diffusion, DALL·E, 即梦 and 可灵.
- Generates 4 local visual reference thumbnails for cover, opening spread, material collage and detail poster.
- Supports Travel Zine, Photography Zine, Fan Zine, Cultural Product Zine, IP Guidebook and Personal Journal.
- Includes reusable data in `src/data.js` for types, styles, examples, roadmap and image tools.

## Local Usage

Open `index.html` directly in a modern browser.

You can also use a static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Project Structure

```text
Zine-studio/
├── index.html
├── README.md
└── src/
    ├── style.css
    ├── app.js
    └── data.js
```

## Core Architecture

Future development centers on three modules.

### Prompt Engine

- Prompt generation
- Prompt templates
- Prompt Library
- Tool-specific image prompts

### Layout Engine

- Page planning
- Table of contents planning
- Page structure
- Zine Layout

### Style Engine

- Style system
- Color system
- Typography system
- Visual references

## Examples

### Travel Zine

- Chengdu Travel Zine
- Japan Railway Travel Zine
- Iceland Road Trip Zine

### Photography Zine

- Street Photography Zine
- Film Photography Zine
- Landscape Photography Zine

### Fan Zine

- Idol Fan Zine
- Anime Fan Zine
- Game Character Fan Zine

### IP Zine

- Original Character Guidebook
- Fantasy Worldbuilding Zine
- Creature Encyclopedia Zine

### Cultural Product Zine

- Museum Product Zine
- City Souvenir Zine
- Coffee Brand Zine

### Personal Journal

- Growth Journal
- Memory Archive
- Life Timeline

## Roadmap

- V0.1 Prompt Generator
- V0.2 Prompt Library
- V0.3 Layout Engine
- V0.4 Style Engine
- V0.5 Template Marketplace
- V1.0 Zine Studio Skill

The Template Marketplace will support community uploads for:

- Travel Templates
- Photography Templates
- Fan Templates
- IP Templates
- Cultural Product Templates

## Final Goal

Build an independent open-source Zine creation ecosystem:

Prompt Engine + Layout Engine + Style Engine + Template Marketplace + Zine Studio Skill.

Zine Studio is a product project for creators and communities. It is not a personal blog, photography portfolio or personal brand website.

## Contributing

Contributions are welcome. Good first contributions include:

- New Zine templates
- New image prompt formats
- New style references
- Better thumbnail layouts
- Documentation improvements

## License

MIT License
