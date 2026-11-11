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
  <a href="#workflow">🧭 Workflow</a>
</p>

---

<a name="overview"></a>

## 📚 Overview

Literature Reading turns English research papers into Chinese summaries, figure-by-figure explanations, and full English–Chinese parallel texts, helping Chinese-speaking readers progress from an overview to a close reading of the original paper.

Provide a paper as a PDF, attachment, or full-text link. The skill delivers a Chinese summary first, then continues with the figures and parallel translation. You can read the summary, browse the original figures, and return to the figure explanations and parallel text for a closer reading. Full instructions are available in [SKILL.EN.md](skills/literature-reading/SKILL.EN.md).

---

<a name="problems-it-solves"></a>

## 🎯 Problems it solves

| Reading need                                                             | How the skill helps                                                                                                                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚡ **Quickly understand what a paper studies**                           | Summarizes the research question, methods, main results, and contributions and limitations explicitly discussed by the authors.                                         |
| 🔍 **Understand complex figures alongside the text**                     | Describes each figure and panel, including labels, experimental controls, statistical information, and the authors’ explanations, with locations in the original paper. |
| 📑 **Read a long English paper paragraph by paragraph**                  | Pairs the original English with a Chinese translation while preserving sections, captions, tables, equations, and in-text citations.                                    |
| 🧩 **Distinguish the paper’s statements from additional interpretation** | Keeps the output grounded in the paper and its available supplementary materials, preserving attribution, hypotheses, and uncertainty.                                  |

Every stage relies on information explicitly stated or labeled in the source. Numerical values and the strength of the authors’ claims are preserved, and topics absent from the paper are omitted.

---

<a name="workflow"></a>

## 🧭 Workflow

### 1. 📝 Chinese summary

Read the paper’s main text, key methods, results, discussion, and figure captions, then deliver a Chinese summary in the chat. It covers the research question, study design, main findings, limitations discussed by the authors, and figure–text correspondence wherever the paper addresses them.

Important conclusions include source locations for reference. Summaries and figure explanations use Simplified Chinese, retaining essential English terminology.

### 2. 🔬 Figure-by-figure and panel-by-panel explanations

Inspect the original figures and cross-check them against captions, the main text, and relevant methods. Follow the original numbering to describe groups, controls, axes, legends, statistical information, and the authors’ conclusions for each figure and panel. Supplied supplementary figures are listed separately.

Where possible, the figure document includes clear original images and source page references. A reading link is provided as soon as the file is available.

### 3. 🔤 Full English–Chinese parallel text

Pair each original English paragraph with its Chinese translation in the original section order, covering the main text, captions, tables, equations, and supplied appendices and supplementary materials. References retain their original bibliographic details and numbering.

The default deliverable is an offline-readable HTML file with side-by-side text on wide screens and English followed by Chinese for each paragraph on narrow screens. It includes a section menu, paragraph anchors, and figure navigation. The summary and figure explanations can be saved as separate Markdown files.

By default, all three stages run consecutively. You can also specify a stage, selected sections, a different sequence, or a delivery format such as Markdown, Word, or PDF.
