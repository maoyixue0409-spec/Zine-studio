# Getting Started

Zine Studio 是一个静态网页项目，不需要后端服务，也不需要 AI API Key。

## 本地运行

在项目根目录执行：

```bash
npm start
```

如果本机没有安装 `npm`，也可以执行：

```bash
python3 -m http.server 4173
```

打开浏览器访问：

```text
http://localhost:4173
```

## 使用流程

1. 选择 Zine 类型。
2. 选择设计风格。
3. 填写主题、素材描述、目标读者、页数、使用场景、情绪氛围和额外要求。
4. 点击 Generate Prompt。
5. 点击 Copy。
6. 把 Prompt 粘贴到 ChatGPT、Claude、Gemini、通义千问、豆包等 AI 工具中继续生成内容。

## 文件入口

- 页面结构：`index.html`
- 样式：`src/style.css`
- 数据：`src/data.js`
- 交互逻辑：`src/app.js`
