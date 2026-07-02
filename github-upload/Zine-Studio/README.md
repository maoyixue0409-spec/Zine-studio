# Zine Studio

Zine Studio is an open-source AI-powered Zine planning toolkit.

Zine Studio 是一个开源 AI Zine 创作工具，帮助创作者快速生成 Zine 内容结构、页面规划、排版建议、风格参考、AI Prompt 和打印规划。

## What It Does

- Generate `Zine Planning Prompt`.
- Generate `Image Prompt` for Midjourney, Stable Diffusion, DALL·E, 即梦 and 可灵.
- Upload local material images and write their file information into prompts.
- Upload style reference images and generate reusable keywords.
- Copy style keywords for image generation tools.
- Fill a starter example for first-time users.
- Save and load a local text draft in the browser.
- Download generated prompts as TXT or Markdown.
- Extract simple color palettes from style reference images in the browser.
- Show 4 local visual reference thumbnails for cover, opening spread, material collage and detail poster.
- Run fully in the browser with no backend and no API.

## Simple 3-Step Workflow

1. Fill Zine Info
   - Choose zine type, visual style, pages, use case and theme.
   - Optional details such as audience, mood, materials and notes are folded away to keep the page simple.

2. Upload References
   - Upload material images such as photos, tickets, stickers, type references, colors and layout references.
   - Upload style reference images to extract simple color palettes and generate reusable style keywords.

3. Generate Prompt
   - Switch between `Zine Planning Prompt` and `Image Prompt`.
   - Generate, copy, or download the prompt for use in any AI tool.

## Drafts and Export

- `Save Draft` stores text fields and selected options in the browser with `localStorage`.
- Uploaded images are not saved in the draft. Upload them again when needed.
- `Download TXT` and `Download Markdown` export the generated prompt only.

## Use Cases

- Travel Zine / 旅行相册
- Photography Zine / 摄影集
- Fan Zine / 粉丝制品
- Cultural Product Zine / 文创产品
- IP Guidebook / IP 设定集
- Personal Journal / 个人记录

## Local Usage

Open `index.html` directly in a modern browser.

You can also run a local static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Project Structure

```text
Zine-Studio/
├── index.html
├── src/
│   ├── app.js
│   ├── data.js
│   └── style.css
├── docs/
│   ├── DEPLOY_GITHUB_PAGES.md
│   └── GITHUB_UPLOAD_CHECKLIST.md
├── CONTRIBUTING.md
├── PRIVACY.md
├── LICENSE
├── package.json
└── README.md
```

## Privacy

Zine Studio runs locally in the browser.

Uploaded material images and style reference images are not sent to a server. They are only used in the current browser session to preview thumbnails, extract simple file information, and generate prompt text.

See [PRIVACY.md](PRIVACY.md).

## GitHub Pages

This project can be deployed directly with GitHub Pages because it is a static website.

See [docs/DEPLOY_GITHUB_PAGES.md](docs/DEPLOY_GITHUB_PAGES.md).

## Contributing

Contributions are welcome. Good first contributions include:

- New Zine type options
- Better prompt templates
- Better mobile layout
- More export formats
- Clearer documentation

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT License
