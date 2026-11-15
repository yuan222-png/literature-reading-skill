<h1 align="center">📖 Literature Reading</h1>

<p align="center">
  <strong>A skill for Chinese-speaking readers to study English research papers in depth</strong>
</p>

<p align="center">
  <a href="skills/literature-reading/SKILL.EN.md"><img src="https://img.shields.io/badge/Skill-literature--reading-7C3AED?style=flat-square" alt="Literature Reading Skill"></a>
  <a href="https://github.com/yuan222-png/literature-reading-skill/stargazers"><img src="https://img.shields.io/github/stars/yuan222-png/literature-reading-skill?style=flat-square&amp;label=Stars&amp;color=E3A008" alt="GitHub stars"></a>
  <a href="https://github.com/yuan222-png/literature-reading-skill/commits"><img src="https://img.shields.io/github/last-commit/yuan222-png/literature-reading-skill?style=flat-square&amp;label=Updated&amp;color=059669" alt="Last commit"></a>
</p>

<p align="center">
  🌐 <a href="README.md">简体中文</a> · <strong>English</strong>
</p>

<p align="center">
  <a href="#overview">📚 Overview</a> ·
  <a href="#problems-it-solves">🎯 Problems it solves</a> ·
  <a href="#workflow">🧭 Workflow</a> ·
  <a href="#usage">💬 Usage</a> ·
  <a href="#repository-contents">📁 Repository contents</a> ·
  <a href="#contributors">🤝 Contributors</a>
</p>

---

<a name="overview"></a>

## 📚 Overview

Literature Reading turns English research papers into Chinese summaries, figure-by-figure explanations, and full English–Chinese parallel texts, helping Chinese-speaking readers progress from an overview to a close reading of the original paper.

Provide a paper as a PDF, attachment, or full-text link. The skill delivers `summary.html`, `figures.html`, and `bilingual.html` in sequence. It provides a link as soon as each file is complete and continues with the remaining stages in the current task. All three pages share a warm academic-paper layout and link directly to one another. You can read the summary, browse the original figures, and return to the figure restatements and parallel text for a closer reading.

The repository contains skill instructions, an HTML layout reference, and shared styling resources. The Chinese [SKILL.md](skills/literature-reading/SKILL.md) contains the core instructions, with a corresponding English edition in [SKILL.EN.md](skills/literature-reading/SKILL.EN.md). Summaries, figure restatements, and translations are intended for Chinese-speaking readers.

---

<a name="problems-it-solves"></a>

## 🎯 Problems it solves

| Reading need                                                             | How the skill helps                                                                                                                                                    |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚡ **Quickly understand what a paper studies**                           | Organizes source information under five headings covering research background, content, methods, objectives, and conclusions.                                          |
| 🔍 **Understand complex figures alongside the text**                     | Restates each figure and panel, including labels, experimental controls, statistical information, and the authors’ explanations, with locations in the original paper. |
| 📑 **Read a long English paper paragraph by paragraph**                  | Pairs the original English with a Chinese translation while preserving sections, captions, tables, equations, and in-text citations.                                   |
| 🔗 **Switch between the three reading materials**                        | Each page provides links to the paper summary, figure explanations, and parallel text, opening directly in the current tab.                                             |
| 🧩 **Distinguish the paper’s statements from additional interpretation** | Keeps the output grounded in the paper and its available supplementary materials, preserving attribution, hypotheses, and uncertainty.                                 |

Every stage relies on information explicitly stated or labeled in the paper and any appendices or supplementary materials obtained for that paper. Original numerical values, attribution, speculation, and uncertainty are preserved. Significance, qualifying conditions, or limitations explicitly discussed by the authors remain alongside the relevant conclusions.

---

<a name="workflow"></a>

## 🧭 Workflow

### 1. 📝 Chinese summary

Read the paper’s main text, key methods, results, discussion, and figure captions, then immediately save and link `summary.html`. Its top-level content sections and left-hand navigation use the following five Chinese headings in the same order.

1. **研究背景 (Research background)** covers the background, prior work, questions, and gaps described by the authors.
2. **研究内容 (Research content)** covers the research undertaken, subjects, and tasks.
3. **研究方法 (Research methods)** covers data, samples, experiments, models, technical procedures, controls, and evaluation methods.
4. **研究目的 (Research objectives)** covers goals or problems explicitly identified by the authors.
5. **研究结论 (Research conclusions)** covers the main findings and explicit conclusions reported by the authors.

Important conclusions include source locations for reference. All five headings and navigation entries are retained, with an empty body where the source provides no corresponding content. Summaries and restatements use Simplified Chinese, retaining essential English terminology.

### 2. 🔬 Figure-by-figure and panel-by-panel restatements

Inspect the original figures and cross-check them against captions, the main text, and relevant methods. The body and navigation of `figures.html` follow the original figure numbers, with one menu entry per figure and panels kept within their parent figure. Coverage includes obtained main-text figures, graphical abstracts, standalone schematics, and supplementary figures. Supplementary figures retain numbers such as `Fig. S1`, and unnumbered graphics use their original names.

Restate purposes, figure elements, experiments and results for each panel, statistical information, and the authors’ conclusions and explanations explicitly provided by the source. Where possible, embed clear original figures or complete crops for offline use, retaining labels, legends, and source page references. A reading link is provided when the file is complete.

### 3. 🔤 Full English–Chinese parallel text

In `bilingual.html`, pair each original English paragraph with its Chinese translation in the original section order. Coverage includes the title, abstract, main text, methods, conclusions, complete figure captions, tables and table notes, equations, footnotes, acknowledgments, declarations, and supplied appendices and supplementary materials. References retain their original bibliographic details and numbering, with their original text preserved by default.

Navigation preserves the original section and subsection numbering, names, hierarchy, and order, using PDF pages when the source has no reliable heading structure. Each paragraph pair has its own card, with English on the left and Chinese on the right on wide screens, and English followed by Chinese on narrow screens. Paragraph anchors, figure and table numbers, and source locations are preserved.

### 🎨 Consistent HTML styling

All three stages deliver UTF-8 HTML files that open independently offline. They share the same embedded CSS, with images and necessary equation resources also embedded. Pages use a warm academic-paper aesthetic with ivory backgrounds, warm-white cards, ink text, pine-green accents, and pale-sage source metadata bars.

English and Chinese share the same local sans-serif font stack, with 18px body text and 1.8 line height. The title area, fine borders, light shadows, and section spacing establish a clear hierarchy, while single-column text has a controlled line length. File-switching tabs highlight the current page, and links provide hover and keyboard focus states. The title area's subtle fade-in and link transitions respect the system's reduced-motion preference.

Reading navigation stays fixed on the left at every screen width. Long menus scroll independently, with support for collapsing, keyboard operation, native anchor links, and returning to the menu. Narrow screens reduce the sidebar width and stack each bilingual paragraph pair vertically. Layout and styling are defined in [layout.md](skills/literature-reading/references/layout.md) and [reading.css](skills/literature-reading/assets/reading.css).

### 🔗 Navigation between the three pages

The three files for each paper are saved in the same directory. Each page's title area provides the following reading entries.

| Page entry | File | In-page navigation |
| --- | --- | --- |
| 论文总结 (Paper summary) | `summary.html` | Research background, content, methods, objectives, and conclusions |
| 图表解释 (Figure explanations) | `figures.html` | Original figure numbers, with panels kept within their parent figures |
| 中英对照 (English–Chinese parallel text) | `bilingual.html` | Original sections and subsections, or PDF pages when reliable headings are unavailable |

Each page links directly to the other two completed reading materials in the current tab. Relative links keep the pages navigable offline when the entire directory is moved. The left-hand menu provides navigation within the current page.

During staged delivery, entries for pending pages appear as plain text. After each stage is completed, the corresponding entries in the new page and all previously delivered pages are updated to working links. When only selected stages are requested, entries correspond to the reading files actually generated.

---

<a name="usage"></a>

## 💬 Usage

Load `skills/literature-reading/` in an agent environment that supports this skill format, provide a paper as a PDF, attachment, or full-text link, and specify the reading scope. For example, use the following request.

> Use literature-reading to study this paper in depth, delivering a Chinese summary, figure-by-figure and panel-by-panel restatements, and the full English–Chinese parallel text in sequence.

By default, all three stages run consecutively, continuing automatically between stages. You can explicitly request a particular stage, selected sections, a different sequence, or a delivery format. Multiple papers use separate output subdirectories.

### Material limitations

If only an abstract is available, the skill can first deliver a summary explicitly limited to that abstract. Unavailable full text, images, or supplementary materials, unclear images, and unfinished work are identified in the chat with their specific scope, along with requests for required materials. When file size or tool limitations prevent embedding figures, precise page and figure references are used and the limitation is reported in the chat.

---

<a name="repository-contents"></a>

## 📁 Repository contents

| File                                                                   | Purpose                                                                                                     |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [SKILL.md](skills/literature-reading/SKILL.md)                         | Core Chinese instructions defining content boundaries, the three-stage workflow, and delivery requirements. |
| [SKILL.EN.md](skills/literature-reading/SKILL.EN.md)                   | English edition of the core instructions.                                                                   |
| [references/layout.md](skills/literature-reading/references/layout.md) | HTML page skeleton, warm academic-paper layout, file-switching navigation, and per-file menu and anchor rules. |
| [assets/reading.css](skills/literature-reading/assets/reading.css)     | Shared fonts, colors, spacing, navigation, subtle interactions, and responsive styling for all three stages. |
| [agents/openai.yaml](skills/literature-reading/agents/openai.yaml)     | Display name and short description for the skill interface.                                                 |

---

<a name="contributors"></a>

## 🤝 Contributors

Thank you to everyone who contributes to this repository.

<table>
  <tr>
    <td align="center" valign="top" width="120">
      <a href="https://github.com/QingchenJia">
        <img src="https://avatars.githubusercontent.com/u/163372309?v=4&amp;s=160" width="80" height="80" alt="QingchenJia's avatar"><br>
        <sub><b>QingchenJia</b></sub>
      </a>
    </td>
    <td align="center" valign="top" width="120">
      <a href="https://github.com/yuan222-png">
        <img src="https://avatars.githubusercontent.com/u/237383760?v=4&amp;s=160" width="80" height="80" alt="yuan222-png's avatar"><br>
        <sub><b>yuan222-png</b></sub>
      </a>
    </td>
  </tr>
</table>

[View all contributors](https://github.com/yuan222-png/literature-reading-skill/graphs/contributors)
