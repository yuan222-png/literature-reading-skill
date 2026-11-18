# HTML 阅读布局

生成总结、逐图复述、中英对照全文时使用同一结构及 `assets/reading.css`（及可选的渐进增强脚本 `assets/reading.js`）。参考图只提供布局方向，不是文章内容或新增栏目来源。

## 页面骨架

下面分别给出三个阶段的核心 DOM 模板。三份文件共用外层 `.reading-shell`、左侧 `.reading-sidebar`、标题区 `.document-header` 和返回目录控件，但必须按下文“各文件的内容与目录”替换 `body[data-document]`、导航和一级分组，不能混用目录模板。花括号表示待替换内容，不得作为占位符出现在交付文件中。将统一 CSS 的完整文本原样内嵌到 `<style data-literature-reading>`，并将 `assets/reading.js` 原样内嵌到 `</body>` 前的 `<script data-literature-reading>`；全部图片和公式资源也内嵌。

### 通用外层与中英对照（`bilingual.html`）

```html
<!doctype html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{{论文标题}} · 中英对照</title>
        <style data-literature-reading>
            {{统一CSS全文（assets/reading.css）}}
        </style>
    </head>
    <body data-document="bilingual">
        <div class="reading-shell">
            <aside class="reading-sidebar" aria-label="阅读导航">
                <details
                    class="reading-navigation"
                    id="reading-navigation"
                    open
                >
                    <summary>阅读导航</summary>
                    <nav class="navigation-links" aria-label="文章目录">
                        <ol>
                            <li>
                                <a href="#section-01"
                                    >{{原文节编号与节名，或PDF第N页}}</a
                                >
                                <ol>
                                    <li>
                                        <a href="#section-01-01"
                                            >{{实际存在的小节}}</a
                                        >
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                </details>
            </aside>
            <main class="reading-document" id="document-start">
                <header class="document-header reading-card">
                    <nav class="document-switcher" aria-label="阅读材料">
                        <a href="summary.html">论文总结</a>
                        <a href="figures.html">图表解释</a>
                        <span aria-current="page">中英对照</span>
                    </nav>
                    <div class="card-body">
                        <p class="document-kicker">中英对照 · BILINGUAL</p>
                        <h1>{{论文标题}}</h1>
                        <dl class="paper-meta">
                            <div class="meta-wide">
                                <dt>作者</dt>
                                <dd>{{原文作者列表}}</dd>
                            </div>
                            <div>
                                <dt>期刊 / 来源</dt>
                                <dd>{{原文期刊或来源}}</dd>
                            </div>
                            <div>
                                <dt>年份</dt>
                                <dd>{{发表或版本年份}}</dd>
                            </div>
                            <div>
                                <dt>DOI / 链接</dt>
                                <dd>{{原文已有的DOI或链接}}</dd>
                            </div>
                            <div>
                                <dt>版本与页数</dt>
                                <dd>{{所用PDF版本及页码说明}}</dd>
                            </div>
                        </dl>
                    </div>
                </header>
                <section
                    class="source-section"
                    id="section-01"
                    aria-labelledby="heading-01"
                >
                    <header class="section-heading">
                        <h2 id="heading-01">
                            {{原文节名的中文翻译或PDF第N页}}
                        </h2>
                        <div class="section-original-title" lang="en">
                            {{可选：原文英文节名}}
                        </div>
                    </header>
                    <article class="reading-card" id="paragraph-01">
                        <header class="card-meta">
                            <a href="#paragraph-01">{{段落或图表标识}}</a>
                            <span>{{PDF页码或页码范围}}</span>
                        </header>
                        <div class="parallel-row">
                            <div class="parallel-cell" lang="en">
                                <div class="language-label">EN · 英文原文</div>
                                <p>{{英文段落}}</p>
                            </div>
                            <div class="parallel-cell" lang="zh-CN">
                                <div class="language-label">ZH · 中文译文</div>
                                <p>{{对应中文段落}}</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
        <a class="back-to-nav" href="#reading-navigation">返回目录 ↑</a>
        <script data-literature-reading>
            {{渐进增强脚本全文（assets/reading.js）}}
        </script>
    </body>
</html>
```

### 中文总结（`summary.html`）分组与卡片片段

`summary.html` 使用 `<body data-document="summary">`，标题区 `.document-kicker` 为 `论文总结 · SUMMARY`。五个一级 `<section class="source-section">` 顺序与 ID 固定，CSS 会自动为五栏生成 `01`–`05` 章节编号装饰：

```html
<section
    class="source-section"
    id="summary-background"
    aria-labelledby="heading-background"
>
    <header class="section-heading">
        <h2 id="heading-background">研究背景</h2>
    </header>
    <article class="reading-card">
        <header class="card-meta">
            <span>{{原文章节名}}</span>
            <span>{{PDF页码或页码范围}}</span>
        </header>
        <div class="card-body">
            <p>{{忠实复述作者交代的研究背景}}</p>
        </div>
    </article>
</section>
```

### 逐图导读与文献分析复述（`figures.html`）分组与卡片片段

`figures.html` 使用 `<body data-document="figures">`，标题区 `.document-kicker` 为 `图表解释 · FIGURES`。每张图使用独立 `.source-section`；卡片内通过 `.figure-plate`（白底原图图版，支持纯 CSS `:target` 点击全屏放大）、`.figure-block[data-kind="guide"]`（图表导读）、`.knowledge-note`（赭石色外部基础知识便签）、`.panel-label`（子图徽标）与 `.figure-block[data-kind="analysis"]`（松绿底板作者分析区）建立清晰的视觉与认知边界：

```html
<section class="source-section" id="fig-1" aria-labelledby="fig-1-heading">
    <header class="section-heading">
        <h2 id="fig-1-heading">Fig. 1</h2>
        <div class="section-original-title" lang="en">
            {{可选：原图英文简题}}
        </div>
    </header>
    <article class="reading-card">
        <header class="card-meta">
            <span>{{PDF页码}}</span>
            <span>{{正文对应小节}}</span>
        </header>
        <div class="card-body">
            <figure class="figure-plate" id="fig-1-plate">
                <a
                    class="figure-zoom"
                    href="#fig-1-plate"
                    aria-label="放大查看 Fig. 1"
                >
                    <img src="data:image/png;base64,..." alt="Fig. 1 原图" />
                </a>
                <a class="figure-close" href="#fig-1">关闭 ✕</a>
                <figcaption>
                    <span class="figure-source">原图 · {{PDF页码}}</span>
                    <span class="figure-hint">点击图片放大</span>
                </figcaption>
            </figure>

            <section class="figure-block" data-kind="guide">
                <h3>图表导读</h3>
                <p>{{图示对象、实验语境与整体读图说明}}</p>
                <h4><span class="panel-label">a</span>{{子图 a 标题或对象}}</h4>
                <p>{{坐标、曲线、数据点、符号与本篇编码说明}}</p>
                <aside class="knowledge-note">
                    <p class="note-label">基础知识补充（外部来源）</p>
                    <p>{{指标定义、公式符号或图形读取原理的通用知识解释}}</p>
                    <p class="note-source">
                        来源：<a href="{{来源链接}}">{{文献出处或网页标题}}</a>
                    </p>
                </aside>
            </section>

            <section class="figure-block" data-kind="analysis">
                <h3>文献中的分析与结论</h3>
                <p>{{仅复述作者对该图明确写出的结果、解释、统计信息与结论}}</p>
                <p class="locator">来源：{{正文小节、PDF页码与图注位置}}</p>
            </section>
        </div>
    </article>
</section>
```

## 暖纸学术 × 编辑排版视觉

- **色彩与层次**：页面采用暖纸学术与期刊编辑排版风格，以暖米白纸张背景（`#f5f2ea` → `#f0ece2`）搭配顶部柔和光晕、暖白卡片（`#fffdf8`）、深墨正文（`#222825`）与单一松绿强调色（`#2f5e4f`）构建视觉节奏。通过字号阶梯、留白与 1px 细线组织信息，避免粗重边框与高饱和色块。自动适配系统深色模式（`prefers-color-scheme: dark`）与打印样式（`@media print`）。
- **中西文分区字体与字号阶梯**：论文主标题 `h1` 采用展示衬线字体栈（`Source Serif 4` / `Charter` / `Noto Serif CJK SC`），章节标题与中文正文采用无衬线字体栈（系统西文无衬线居前，`PingFang SC` / `Noto Sans CJK SC` / `Microsoft YaHei` 居后），英文原文列 `.parallel-cell[lang="en"]` 与英文引文采用学术衬线字体（`Charter` / `Source Serif 4` / `Georgia`），公式使用数学字体栈（`STIX Two Math` / `Cambria Math`）。正文 18px，图注与表格 16px，界面与导航 15px，元信息与页码定位 14px（启用 `tabular-nums` 等宽数字），微标签 12.5px。
- **编辑式标题区**：标题区直接排布在暖纸背景上，不套封闭外框。顶部放置胶囊式分段控制器 `.document-switcher`（自动带 `01 / 02 / 03` 编号，当前页为松绿实心胶囊）；下方依次为带松绿短横线的 `.document-kicker`、衬线大标题 `h1`，以及顶部细线分隔的 `.paper-meta` 元信息网格（原文若仅有一行简短来源信息，也可使用 `<div class="locator">`）。只展示原文实际具有的元信息字段，不虚构缺失项。
- **侧边栏与行宽控制**：左侧目录沿 1px 细竖线排列，整体布局在视口居中；单栏文档（总结、逐图复述）正文列最大宽度为 `920px`，中英对照自动扩展为 `1360px` 以容纳双栏。宽屏下折叠左侧目录时，侧栏自动收窄为 `48px` 的竖排“阅读导航”细轨，正文随之舒展；窄屏保留左侧细轨，三页切换自然适配，中英对照按英文、中文上下排列。

## 卡片、图版与双栏账本

- **总结与逐图卡片**：单栏卡片使用 `.card-body`，顶部 `.card-meta` 以小号等宽数字与圆点分隔符展示来源章节和页码。章节标题 `.section-heading` 下方配 1px 细线与 48px 松绿短标尺。
- **逐图文件的四类视觉容器**：
  1. **原图图版 `.figure-plate`**：始终采用纯白底板（`#ffffff`）承托原图，在深色模式下也不反色或变暗，确保科研图表配色与灰度绝对忠实；支持点击图片触发 `:target` 全屏灯箱放大，点击右上角“关闭 ✕”返回原位。
  2. **图表导读 `.figure-block[data-kind="guide"]`**：墨色小方块标尺 `h3`，子图标题使用 `.panel-label` 墨色方块徽标（`a`、`b` 等原标签）。
  3. **外部基础知识 `.knowledge-note`**：左缀 3px 赭石色竖线与暖米黄底色（`#fbf3e4`），顶部固定 `.note-label` 为“基础知识补充（外部来源）”，底部 `.note-source` 虚线分隔并附可核查出处链接。
  4. **作者分析与结论 `.figure-block[data-kind="analysis"]`**：独立包裹在淡松绿底板（`#f1f5f0`）与松绿细框内，使“如何读图/通用概念”与“作者得出的研究结果与结论”一眼可辨。
- **学术三线表**：所有表格包裹在 `.table-scroll` 内，样式自动渲染为标准学术三线表（顶底 1.5px 墨线、表头下 1px 实线、无竖向边框、数字等宽对齐）。
- **中英对照连续账本（Ledger）**：同一小节内的多张双语段落卡片首尾相接，合并为一张圆角连续账本。宽屏（`>1100px`）下，每段的 `.card-meta` 自动移至左侧 `136px` 页边定位栏，右侧为左英右中双栏；`EN · 英文原文` 与 `ZH · 中文译文` 标签在每组首段显示，后续段落自动隐藏视觉重复（保留无障碍语义），消除满屏重复标签的噪音。两侧内容不等长时保持顶端对齐，不拆分段落或插入空白补齐。

## 各文件的内容与目录

内容边界和各栏所含信息以 SKILL.md 的三个阶段为准。以下是 DOM 与导航的对应关系：

| 文件           | `body[data-document]` | 一级分组与导航                                                              | 锚点                                                                                          |
| -------------- | --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| summary.html   | `summary`             | 研究背景 → 研究内容 → 研究方法 → 研究目的 → 研究结论；仅这五项且顺序固定    | summary-background、summary-content、summary-methods、summary-objectives、summary-conclusions |
| figures.html   | `figures`             | Fig. 1 → Fig. 2 → …；按本篇实际图号与顺序，每张图一个目录项                 | fig-1、fig-2 等，补充图可用 fig-s1 等                                                         |
| bilingual.html | `bilingual`           | 原文实际章节及小节，保留编号、层级与顺序；只有原文无可靠标题时才按 PDF 页码 | 与原文结构对应的稳定 ASCII ID                                                                 |

- 总结五栏标题与导航始终保留；原文没有对应表述时，仅保留该栏标题及锚点，正文留空，不增加“未报告”等文字或虚构来源卡片。不另加子导航或其他内容栏目。
- 逐图文件中，每张图的“图表导读”和“文献中的分析与结论”均留在该图分组内，分别使用 `.figure-block[data-kind="guide"]` 与 `.figure-block[data-kind="analysis"]`。导读中的外部知识放在 `.knowledge-note` 内并标为“基础知识补充（外部来源）”，就近附出处链接；作者分析保留本篇来源定位，两者不得混写。导航仍只列整图，不另列这两部分、子图、基础知识、资料来源、表格专题、原文章节或页码组。无编号图形仅按原有图名标识。
- 中英对照可在目录标题中附原节名的中文译名，不自创“图表精读”“术语”等导航组。原图表和页码定位保留在相应原文位置，不重新组织成图号目录。长章节内部可使用 `<h4 class="page-heading">PDF 第 N 页</h4>` 作页码分隔，不改写原文目录。

## 导航与渐进增强规则

- 标题区顶部的“阅读材料”导航用于三份页面间切换，按 SKILL.md“三份阅读材料互相跳转”的规则生成。当前页入口使用带 `aria-current="page"` 的 `<span>`，其余已生成页面使用同目录相对链接 `<a>`。分阶段交付时，待生成入口先用普通 `<span>` 文本，每完成一页同步更新已有页面；仅交付部分阶段时，入口随实际生成文件确定。
- 为实际生成的章节、小节、页码组、段落以及图表生成唯一且稳定的 ASCII ID，目录链接使用对应 `#id`。
- 目录与各文件规定的分组顺序一致：总结按五栏固定顺序，逐图复述按原图号顺序，中英对照按原文章节及小节顺序。除总结必须保留的五栏外，不生成无内容的目录分组；目录只链接本文件存在的目标。
- `details#reading-navigation` 默认展开，用户可通过鼠标或键盘在左栏内折叠为竖排细轨；所有屏宽下侧栏均 fixed 在屏幕左侧，长目录独立滚动，正文始终位于其右侧并预留足够空间。保留无需脚本即可工作的锚点跳转、图片灯箱放大（`:target`）与返回目录入口。
- 内嵌的 `assets/reading.js` 仅作可选的离线渐进增强：滚动时自动高亮左侧目录的当前章节（设置 `aria-current="location"`），并在窄屏（`≤760px`）初次打开时自动折叠左侧目录为竖排细轨。禁用脚本后全部内容与导航依然完整可用；不得用脚本覆盖字体、字号或版式。
