# Codex Skill Plan

Zine Studio 未来可以扩展为 Codex Skill，让用户在 Codex 中直接生成、修改和保存 Zine Prompt。

## Skill 目标

- 读取用户输入的 Zine 主题和素材
- 根据 Zine 类型选择模板
- 根据设计风格选择视觉规则
- 输出 Markdown Prompt
- 可选生成 JSON 配置
- 可选创建示例文件

## 目录设想

```text
zine-studio-skill/
├── SKILL.md
├── references/
│   ├── zine-types.md
│   └── style-guide.md
└── templates/
    ├── travel.md
    └── fan.md
```

## Skill 工作流

1. 确认 Zine 类型。
2. 确认风格。
3. 收集主题、素材、读者、页数和用途。
4. 生成中英双语 Prompt。
5. 根据用户要求保存为 Markdown 或 JSON。

