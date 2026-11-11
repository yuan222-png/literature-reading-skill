---
name: literature-reading
description: "Help Chinese-speaking readers study English research papers in depth through Chinese summaries, figure-by-figure and panel-by-panel restatements, and full English–Chinese parallel texts. Present only the paper's content and the authors' explicit views, without outside knowledge, evaluation, or independent deductions. Use when a user provides a paper's full text or a link and wants to read the paper, examine figures, or create a Chinese parallel edition. Excludes requests solely to search for papers or write literature reviews."
---

# literature reading

[简体中文](SKILL.md) · English

Support this reading pattern. The user first reads an AI summary, then browses the paper's figures independently. Codex continues with figure-by-figure restatements and the full English–Chinese parallel text for the user to return to and read closely. Use Simplified Chinese for summaries and restatements, retaining essential English terminology.

## Content boundaries

- At every stage, use only the current paper's main text, figures, tables, captions, and any appendices or supplementary materials obtained for that paper. Present only information explicitly stated or labeled in those sources and explanations, views, and conclusions explicitly expressed by the authors.
- Do not add outside knowledge, content from other papers, general background, terminology tutorials, analogies, reading advice, or personal reflections. Restate background and other studies mentioned in the paper according to the authors' wording, without independently looking them up or expanding on them.
- Do not independently derive results, complete causal chains, explain mechanisms, establish relationships between figures, or suggest further applications from the paper's content. Even if a judgment seems reasonable, obvious, or calculable from the data, omit it unless the authors explicitly express it. Preserve original numerical values without independently calculating differences, ratios, effect sizes, or estimating values from figures.
- Do not evaluate novelty, strength of evidence, research quality, experimental design, limitations, applicability, or what a figure cannot establish. Restate these matters as the authors' views only when the authors explicitly discuss them, without adding independent judgments.
- Omit information the original paper does not address. Do not add entries such as “not reported in the paper,” “not discussed by the authors,” or “requires further verification,” or fill fixed sections with additional material. Preserve ambiguity in the original wording without resolving it through speculation.
- Faithfully preserve attribution and the authors' tone, including hypotheses, speculation, uncertainty, and inferences made by the authors themselves. Wording such as “the authors consider/propose/report” may be used. Do not strengthen the authors' speculation into established fact.
- Summaries, figure explanations, and translations in the reading materials contain only the paper content described above and necessary section headings, page numbers, figure numbers, and alignment identifiers. Briefly report necessary execution status in the chat, such as file links, unreadable materials, unclear recognition, or unfinished work. Any unavoidable markers for missing text serve only to locate the gap and must not become commentary on the paper.

## Execution pace and scope

- By default, complete the sequence continuously, from summary to figure-by-figure analysis consisting only of restatement, then to the full English–Chinese parallel text. Present the summary in the chat immediately upon completion, then continue with the remaining two stages. Provide a file link promptly when the figure restatements are available. Do not wait until the entire translation is finished to deliver the summary, or require the user to reply “continue” or confirm that they have finished viewing the figures between stages.
- Follow explicit requests for a particular stage, selected sections, a different order, or a specified format, without forcing the full workflow. When reusing existing summaries or figure explanations, verify the paper version and remove outside content or independent judgments according to the content boundaries above.
- Continue making progress within the current task. Do not claim that a background task has started or that work will continue after the user leaves unless such an execution mechanism actually exists.
- Prefer the PDF, attachments, or full-text link supplied by the user. If only an abstract is available, a summary explicitly limited to the abstract may be provided first. Clearly identify unavailable full text or images and request the corresponding materials, without fabricating subsequent figure explanations or a full translation.
- When handling multiple papers, organize each paper's sources, summary, figure explanations, and translation separately. Clarify priorities when the number of papers affects delivery order.

## Reading and locating the source

1. Confirm the title, authors, year, any existing DOI or link, and the version used from the source materials. Do not search other sources to add background. The full text of the same paper may be obtained. Read the full-text structure, key methods, results, discussion, and captions before forming a summary. Do not present findings based only on an abstract as conclusions from reading the full paper.
2. Maintain a concise coverage inventory of sections, the location of methods, figure and panel numbers, tables, appendices, and supplied supplementary materials. Use it to prevent omissions without overwhelming the user with the extraction process.
3. Combine PDF text extraction with page images. Check two-column reading order, paragraphs spanning pages, ligatures, footnotes, and equations. Scanned documents may require OCR first. Check uncertain numbers, symbols, and figure labels against the page images.
4. Provide retrievable source locations for important conclusions and every figure, such as “PDF page 7, Fig. 3b.” When printed page numbers differ from PDF page order, specify which numbering is used.
5. Include supplementary materials in restatements and translations only when they have actually been obtained and belong to the current paper. Mention unavailable materials in the chat. Preserve the original attribution of citations to other papers, without independently verifying, expanding, or rewriting them as new evidence.

## Stage 1 — Chinese summary

First deliver a Chinese summary faithful to the authors' wording, with length adjusted to the paper's complexity. Include the following topics only when the paper explicitly addresses them.

- **Research question and background gap.** Restate the question, background, and motivation presented by the authors.
- **Study design and methods.** Cover the subjects, data or samples, key experiments or models, main controls, and evaluation methods.
- **Main results.** Organize around the central findings. Preserve numerical values, units, conditions, and source locations for key quantitative conclusions, without assembling numbers detached from their conditions.
- **Contributions and significance stated by the authors.** Restate only the authors' own claims.
- **Limitations and applicability discussed by the authors.** Restate only what the authors explicitly identify.
- **Figure–text correspondence.** List the research content explicitly associated with each original figure number in the main text or captions. Do not independently recommend a reading priority or reconstruct the argument.

Every summary item must be traceable to a statement in the original paper. When the authors report only a correlation, propose a mechanistic hypothesis, or use uncertain wording, preserve their expression without strengthening, correcting, or evaluating their conclusions.

## Stage 2 — Figure-by-figure and panel-by-panel restatement

**Inspect the original figures first, then cross-check them against captions, the main text, and relevant methods.** Use the images to accurately restate labeled information. Do not independently identify trends or derive conclusions. If tools cannot display an image or its resolution is insufficient, identify the affected figure or panel in the chat. Readable captions and explicit statements in the main text may still be restated, without claiming to have clearly inspected the original figure.

Restate all obtained main-text figures and their panels in original figure order, including graphical abstracts and standalone schematics. List supplied supplementary figures separately with their original numbering. For tables, restate the original variables, values, and results already described by the authors, without independently deriving new conclusions. Include the complete tables in the parallel edition as well.

For each figure, include only the following information explicitly provided by labels, captions, or the relevant main text. Omit topics the paper does not address.

1. **Purpose stated by the authors.** Restate the authors' description of the purpose of the figure or associated experiment.
2. **Figure elements.** Describe groups, controls, treatments, colors, symbols, axes, units, scales, and legends. For microscopy images, include channels, markers, scale bars, and quantification methods. For schematics, include nodes, arrows, and meanings supplied by the authors. Describe only labeled or defined content, without adding a general figure-reading tutorial.
3. **Panel-by-panel restatement.** Use original labels such as Fig. 2a and 2b to separately restate the experiments, results, and explanations reported by the authors. Do not replace all panels with a single overall statement. If the authors provide no textual explanation for a panel, restate only its readable labels and relevant caption, without independently extracting findings from plotted trends or image appearance.
4. **Original statistical information.** Preserve the authors' n, replicate types, error-bar definitions, statistical tests, comparison groups, numerical values, and meanings of significance symbols. Restate only defined information, without guessing symbols, recalculating, or evaluating statistical results.
5. **The authors' conclusions and explanations.** Restate conclusions, explanations, or limitations explicitly associated with the figure by the authors. Describe connections to other figures only when the authors explicitly state them, without adding mechanisms, logical links, or inferences such as “this demonstrates.”

Where possible, insert clear original figures or complete crops into the figure document, retaining labels and legends and noting source page numbers. Do not redraw, add to, or beautify the original data. When file size or tool limitations prevent embedding images, use precise page and figure references and explain in the chat that the original figures are not embedded.

## Stage 3 — Full English–Chinese parallel text

Produce a complete translation suitable for paragraph-by-paragraph close reading. A Chinese summary, paraphrased outline, or figure explanation must not be presented as a full translation.

### Alignment and completeness

- By default, include the title, abstract, all main-text sections, methods including methods placed at the end, conclusions, figure titles and captions, tables and table notes, footnotes, acknowledgments, declarations, and supplied appendices or supplementary materials. Preserve the original bibliographic details and numbering of references, without translating each entry by default. Report any excluded parts in the chat.
- Preserve the original section order and paragraph hierarchy, pairing each English source passage with its Chinese translation. Use paragraphs as the default unit, without merging multiple original paragraphs into a single summarized translation. Split long paragraphs only when the correspondence remains clear.
- Assign stable paragraph identifiers and record the source section or PDF page number. Page ranges may be used for paragraphs spanning pages. Keep figure, table, and equation numbers and in-text citations consistent to support cross-referencing between figure explanations, the translation, and the original paper.
- Repair obvious line-break hyphenation, repeated headers and footers, and extraction-order errors. Do not use these repairs to rewrite the English argument. Preserve locations for passages that cannot be reliably recognized and mark them “原文识别不清” (“source text unclear”), without filling them in independently.
- Preserve table row and column correspondence, numerical values, units, and notes. English text and its Chinese translation may share a cell. Provide complete parallel captions, including their full text. When necessary, list translations of English labels within figures separately, preserving the original images.

### Translation fidelity

- Accurately preserve negation, comparison direction, conditions, research facts conveyed by tense, and degrees of uncertainty expressed by words such as may and suggest. Do not strengthen “suggests” into “proves.”
- Maintain consistent technical terminology. At first mention, use “Chinese (English, abbreviation)” for key terms, then use the same Chinese rendering consistently. Retain abbreviations only when given in the original paper. If compiling a glossary, include only terms appearing in the source and their Chinese equivalents, without adding definitions or background absent from the paper.
- Preserve gene and protein nomenclature, compound names, model names, abbreviations, numbers, units, subscripts and superscripts, Greek letters, equations, and citation relationships. Preserve symbols within equations. Explanations following equations may be translated.
- Do not add reading tips, background, questions, commentary, or deductions from the translator, including material separately labeled as translator's notes. Translate the original authors' own notes normally and preserve their attribution.

### Default delivery format

Prefer UTF-8 HTML suitable for local reading. On wide desktop screens, show the English paragraph on the left and its Chinese translation on the right. On narrow screens, show English followed by Chinese for each paragraph. Provide a section menu, paragraph anchors, and figure navigation. The document must be readable offline, with accompanying images in the same delivery directory and relative links. Use an offline-capable method to display equations. When complex equations cannot be typeset reliably, retain numbered original images or readable equation text without hiding recognition errors behind the rendered layout.

When the environment makes HTML generation or preview impractical, use Markdown with paragraph-by-paragraph EN/ZH pairs and explain the format. Follow explicit requests for Markdown, Word, or PDF. Use document or PDF tools and skills available in the current environment when the requested format requires them. Do not deliver only a long chat message that is difficult to read closely.

## Long papers and delivery checks

- Write long papers to files progressively by section, maintaining section, figure, table, and paragraph coverage records and a glossary to prevent omissions or duplicate translations across context changes. Do not substitute a summary because of a single-message length limit or label a partial translation as complete.
- If actual execution limits prevent completion in one session, deliver the completed files and identify covered sections, remaining work, and the continuation point. Do not imply that the remaining work is already finished.
- Before delivery, check the coverage inventory. All figures and panels must be covered according to the source, without filling gaps with independent explanations. Every original paragraph must have a corresponding translation. Methods, captions, tables, and supplementary materials must have no silent omissions. Pay particular attention to values, units, negation, equation numbers, and citations.
- Check that every substantive statement in the summary and figure explanations has an explicit source in the paper. Remove outside knowledge, independent calculations, inferences, evaluations, reading advice, and lists of matters the paper does not address. Keep the translator's views out of the translation.
- Spot-check that paired English text remains faithful to the original and that the Chinese is accurate. Verify important quantitative conclusions against the original pages. For HTML, inspect long paragraphs, wide tables, equations, image paths, and narrow-screen alignment. For Word or PDF, inspect the actual rendered pages. Clearly state any checks that could not be performed.
- Save files in the user-specified directory or the current environment's delivery directory. Summaries and figure explanations may be separate Markdown files, with the full parallel text in HTML or the user-specified format. Use separate subdirectories for multiple papers. Keep the summary already presented in the chat, then provide clear file links and coverage or missing-material information at final delivery, without pasting the entire translation again.
