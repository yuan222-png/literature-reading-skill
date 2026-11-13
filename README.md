<h1 align="center">📖 Literature Reading</h1>

<p align="center">
  <strong>面向中文读者的英文科研论文精读 Skill</strong>
</p>

<p align="center">
  <a href="skills/literature-reading/SKILL.md"><img src="https://img.shields.io/badge/Skill-literature--reading-7C3AED?style=flat-square" alt="Literature Reading Skill"></a>
  <a href="https://github.com/yuan222-png/literature-reading-skill/stargazers"><img src="https://img.shields.io/github/stars/yuan222-png/literature-reading-skill?style=flat-square&amp;label=Stars&amp;color=E3A008" alt="GitHub 星标数"></a>
  <a href="https://github.com/yuan222-png/literature-reading-skill/commits"><img src="https://img.shields.io/github/last-commit/yuan222-png/literature-reading-skill?style=flat-square&amp;label=Updated&amp;color=059669" alt="最近提交时间"></a>
</p>

<p align="center">
  🌐 <strong>简体中文</strong> · <a href="README.EN.md">English</a>
</p>

<p align="center">
  <a href="#仓库简介">📚 仓库简介</a> ·
  <a href="#skill-解决的问题">🎯 解决的问题</a> ·
  <a href="#skill-的工作流程概要">🧭 工作流程</a> ·
  <a href="#使用方式">💬 使用方式</a> ·
  <a href="#仓库内容">📁 仓库内容</a>
</p>

---

<a name="仓库简介"></a>

## 📚 仓库简介

Literature Reading 将英文科研论文整理为中文总结、逐图复述和中英对照全文，帮助中文读者从了解研究内容逐步进入原文精读。

提供论文 PDF、附件或全文链接后，Skill 会依次交付 `summary.html`、`figures.html` 和 `bilingual.html`。每个文件完成后立即提供链接，并在当前任务中继续后续阶段。你可以先阅读总结、自行浏览原图，再结合逐图复述和对照全文细读论文。

仓库包含技能指令、HTML 布局参考与共用样式资源。中文 [SKILL.md](skills/literature-reading/SKILL.md) 是核心指令，[SKILL.EN.md](skills/literature-reading/SKILL.EN.md) 提供对应英文版。总结、逐图复述与译文均面向中文读者。

---

<a name="skill-解决的问题"></a>

## 🎯 Skill 解决的问题

| 阅读中的需求                      | Skill 提供的支持                                                               |
| --------------------------------- | ------------------------------------------------------------------------------ |
| ⚡ **快速了解一篇论文的研究内容** | 按研究背景、研究内容、研究方法、研究目的、研究结论五栏整理原文信息。           |
| 🔍 **对照正文理解复杂图像**       | 按图号和子图逐一复述标注、实验对照、统计信息及作者给出的解释，并保留原文定位。 |
| 📑 **逐段阅读英文长文**           | 配对呈现英文原文与中文译文，保留章节、图注、表格、公式和文内引用。             |
| 🧩 **区分论文表述与额外解读**     | 将输出限定在论文及已取得的本篇补充材料内，保留作者观点的归属、推测和不确定性。 |

所有阶段均以论文及已取得的本篇附录、补充材料中明确写出或标注的信息为依据。保留原文数值、作者观点归属、推测和不确定性。作者明确讨论的意义、限定条件或局限随对应结论保留。

---

<a name="skill-的工作流程概要"></a>

## 🧭 Skill 的工作流程概要

### 1. 📝 中文总结

读取论文正文、主要方法、结果、讨论和图注，完成后立即保存并提供 `summary.html`。正文一级栏目与左侧导航固定为以下五项，顺序一致。

1. **研究背景**，作者交代的背景、已有工作、问题与缺口。
2. **研究内容**，作者实际开展的研究、研究对象与任务。
3. **研究方法**，数据、样本、实验、模型、技术流程、对照与评价方法。
4. **研究目的**，作者明确提出的目标或拟解决的问题。
5. **研究结论**，作者报告的主要发现与明确结论。

重要结论附原文位置，便于回查。五栏标题与导航始终保留，原文确无对应内容时正文留空。总结与复述使用简体中文，并保留必要的英文术语。

### 2. 🔬 逐图与子图复述

查看原图，并与图注、正文和相关方法核对。`figures.html` 按原文图号组织正文与导航，每张图一个目录项，子图保留在所属图内。覆盖已取得的正文图、图形摘要、独立示意图及补充图，补充图保留 `Fig. S1` 等原编号，无编号图形使用原有图名。

逐图复述原文明确提供的目的、图中要素、各子图实验与结果、统计信息，以及作者结论与说明。尽可能将清晰原图或完整裁图离线内嵌，并保留标签、图例与来源页码。完成后提供阅读链接。

### 3. 🔤 中英对照全文

`bilingual.html` 按原章节顺序逐段配对英文原文和中文译文，覆盖标题、摘要、正文、方法、结论、完整图注、表格及表注、公式、脚注、致谢、声明，以及已提供的附录与补充材料。参考文献保留原始书目信息和编号，默认保留原文。

导航沿用原文章节与小节的编号、名称、层级及顺序；原文没有可靠标题结构时使用 PDF 页码。每对段落放在独立卡片中，宽屏左英文、右中文，窄屏同段先英文后中文，并保留段落锚点、图表编号及来源定位。

### 🎨 统一 HTML 排版

三个阶段均交付可独立离线打开的 UTF-8 HTML。共用同一份内嵌 CSS，图片与必要的公式资源也内嵌。页面使用浅灰背景、白色圆角卡片、淡青来源信息栏与青色分隔线，正文统一为 18px、1.8 倍行高。

阅读导航在所有屏宽下固定于左侧，长目录独立滚动，支持折叠、键盘操作、原生锚点跳转与返回目录。窄屏收窄侧栏并将双语段落改为上下排列。布局与样式分别见 [layout.md](skills/literature-reading/references/layout.md) 和 [reading.css](skills/literature-reading/assets/reading.css)。

---

<a name="使用方式"></a>

## 💬 使用方式

在支持此类技能的代理环境中加载 `skills/literature-reading/`，提供论文 PDF、附件或全文链接，并说明阅读范围。例如可使用以下请求。

> 使用 literature-reading 精读这篇论文，依次交付中文总结、逐图与子图复述、中英对照全文。

默认连续完成三个阶段，阶段间自动衔接。也可明确指定某个阶段、部分章节、执行顺序或交付格式。多篇论文分别使用各自的输出子目录。

### 材料限制

只有摘要时，可先交付标明范围的摘要总结。全文、图像或补充材料无法取得、图像不清或有未完成部分时，会在聊天中说明具体范围并请求所需材料。图像受文件大小或工具限制无法内嵌时，使用精确页码与图号定位并在聊天中说明。

---

<a name="仓库内容"></a>

## 📁 仓库内容

| 文件                                                                   | 用途                                               |
| ---------------------------------------------------------------------- | -------------------------------------------------- |
| [SKILL.md](skills/literature-reading/SKILL.md)                         | 中文核心指令，定义内容边界、三阶段流程与交付规范。 |
| [SKILL.EN.md](skills/literature-reading/SKILL.EN.md)                   | 核心指令的英文版。                                 |
| [references/layout.md](skills/literature-reading/references/layout.md) | HTML 页面骨架、卡片结构及各文件的目录与锚点规则。  |
| [assets/reading.css](skills/literature-reading/assets/reading.css)     | 三阶段共用的排版、配色、导航与响应式样式。         |
| [agents/openai.yaml](skills/literature-reading/agents/openai.yaml)     | 技能界面的显示名称与简短说明。                     |
