# HTML 阅读布局

生成总结、逐图复述、中英对照全文时使用同一结构及 `assets/reading.css`。参考图只提供布局方向，不是文章内容或新增栏目来源。

## 页面骨架

下面以中英对照文件示范页面骨架。总结和逐图复述也复用外层结构与样式，但必须按下文“各文件的内容与目录”替换导航和一级分组，不能直接套用原文章节目录。花括号表示待替换内容，不得作为占位符出现在交付文件中。将统一 CSS 的完整文本内嵌到 style 内；全部图片和公式资源也内嵌。

```html
<!doctype html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{{论文标题及当前文件类型}}</title>
        <style data-literature-reading>
            {{统一CSS全文}}
        </style>
    </head>
    <body>
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
                    <div class="card-body">
                        <h1>{{论文标题及当前文件类型}}</h1>
                        <div class="locator">
                            {{原文已有的作者、年份及版本信息}}
                        </div>
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
                        <div class="section-original-title">
                            {{可选：原文节名}}
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
    </body>
</html>
```

## 卡片与分隔

- 总结与逐图复述的卡片，将模板中的整个 `.parallel-row` 替换为单栏 `.card-body`，其中放置忠实于原文的内容。图表可使用 figure/figcaption，宽表格放在 `.table-scroll` 内。
- `.source-section` 是通用分组容器：总结对应五个固定栏目，逐图复述对应每张图，中英对照对应原文章节。组标题放在 `.section-heading` 中。只有中英对照按原文小节嵌套 section 与 h3/h4，不为视觉效果改变原文语义层级。
- 中英对照没有可靠节名时用“PDF 第 N 页”；可识别节名时优先保留节名。长章节内部可增加页码分组标题，不额外改写原文目录；同一跨页段落仍只放一张完整卡片，并标记页码范围。总结与逐图复述的页码只作来源标识，不替代其固定分组。
- 每对原文与译文属于同一张卡片。卡片顶部的定位栏统一显示标识和来源；两侧内容不等长时保持顶端对齐，不拉大短侧行距、不拆分段落、不插入空白段落补齐高度。
- 总结或单图的卡片可包含多个复述段落；不要为了凑卡片数量，把同一条作者表述重复放在多个组中。图所在章节按正文或原页确认，不自行推断图与其他章节的关系。

## 各文件的内容与目录

内容边界和各栏所含信息以 SKILL.md 的三个阶段为准。以下是 DOM 与导航的对应关系：

| 文件           | 一级分组与导航                                                              | 锚点                                                                                          |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| summary.html   | 研究背景 → 研究内容 → 研究方法 → 研究目的 → 研究结论；仅这五项且顺序固定    | summary-background、summary-content、summary-methods、summary-objectives、summary-conclusions |
| figures.html   | Fig. 1 → Fig. 2 → …；按本篇实际图号与顺序，每张图一个目录项                 | fig-1、fig-2 等，补充图可用 fig-s1 等                                                         |
| bilingual.html | 原文实际章节及小节，保留编号、层级与顺序；只有原文无可靠标题时才按 PDF 页码 | 与原文结构对应的稳定 ASCII ID                                                                 |

- 总结五栏标题与导航始终保留；原文没有对应表述时，仅保留该栏标题及锚点，正文留空，不增加“未报告”等文字或虚构来源卡片。不另加子导航或其他内容栏目。
- 逐图复述中，每张图的目的、图中要素、子图、统计信息和作者结论均留在该图分组内；导航仅列整图，不另列子图、表格专题、原文章节或页码组。无编号图形仅按原有图名标识。
- 中英对照可在目录标题中附原节名的中文译名，不自创“图表精读”“术语”等导航组。原图表和页码定位保留在相应原文位置，不重新组织成图号目录。

## 导航规则

- 为实际生成的章节、小节、页码组以及图表生成唯一且稳定的 ASCII ID，目录链接使用对应 `#id`。正文段落标识与来源页码另保留，不能因改版丢失定位。
- 目录与各文件规定的分组顺序一致：总结按五栏固定顺序，逐图复述按原图号顺序，中英对照按原文章节及小节顺序。只有原文目录需要层级时才使用相应的嵌套导航，不自行扩写成知识点或阅读建议。
- 三个文件各自具备完整导航与相同样式。除总结必须保留的五栏外，不生成无内容的目录分组；目录只链接本文件存在的目标。
- `details` 默认展开，用户可通过鼠标或键盘在左栏内折叠；所有屏宽下侧栏均 fixed 在屏幕左侧，长目录独立滚动，正文始终位于其右侧并预留足够空间。窄屏只缩小侧栏宽度与栏间距，不将目录移至顶部或改成覆盖正文的浮层。保留无需脚本的锚点跳转，提供清晰的 hover/focus 样式与返回目录入口。
- 使用原生目录与静态 HTML 即可。若额外实现当前章节高亮，只能使用内嵌且不依赖网络的脚本；关闭脚本后仍须能阅读和导航，不得用脚本修改统一字体或字号。
