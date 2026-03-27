#!/usr/bin/env node
/**
 * Extract specific chapters from An-Nashr fi al-Qira'at al-'Ashr
 *
 * Source: ketabonline.com data export for book 2878
 * (النشر في القراءات العشر — ابن الجزري)
 *
 * Usage:
 *   1. Download the data file:
 *      curl -o /tmp/nashr-data/2878.data.json.zip \
 *        "https://s2.ketabonline.com/books/2878/2878.data.zip"
 *      unzip -o /tmp/nashr-data/2878.data.json.zip -d /tmp/nashr-data/
 *
 *   2. Run extraction:
 *      node scripts/extract_nashr_chapters.js
 */

const fs = require("fs");
const path = require("path");

const DATA_PATH = "/tmp/nashr-data/2878.data.json";
const OUTPUT_DIR = path.join(__dirname, "..", "data", "sources");

// Chapters to extract: { name, start_page_id, end_page_id (exclusive), desc }
// Page IDs from ketabonline index; end = start of next top-level chapter
const CHAPTERS = [
  {
    name: "nashr-basmalah",
    title: "باب اختلافهم في البسملة",
    start: 268,
    end: 283,
    desc: "Basmalah rulings per reader",
  },
  {
    name: "nashr-idgham-kabir",
    title: "باب اختلافهم في الإدغام الكبير",
    start: 283,
    end: 313,
    desc: "Idgham Kabir per reader",
  },
  {
    name: "nashr-madd",
    title: "باب المد والقصر",
    start: 322,
    end: 371,
    desc: "Madd lengths per reader",
  },
  {
    name: "nashr-imalah",
    title: "باب مذاهبهم في الفتح والإمالة",
    start: 528,
    end: 581,
    desc: "Fath and Imalah per reader",
  },
  {
    name: "nashr-ra",
    title: "باب مذاهبهم في ترقيق الراءات وتفخيمها",
    start: 589,
    end: 619,
    desc: "Ra rules per reader",
  },
  {
    name: "nashr-takbir",
    title: "باب التكبير وما يتعلق به",
    start: 904,
    end: Infinity,
    desc: "Takbir per reader",
  },
];

function stripHtml(html) {
  // Replace paragraph breaks with newlines
  let text = html.replace(/<\/p>\s*<p[^>]*>/gi, "\n\n");
  // Replace <br> with newlines
  text = text.replace(/<br\s*\/?>/gi, "\n");
  // Remove all remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");
  // Decode common HTML entities
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
  // Collapse excessive whitespace but keep paragraph breaks
  text = text.replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

function main() {
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`Data file not found: ${DATA_PATH}`);
    console.error("Download it first:");
    console.error(
      '  curl -o /tmp/nashr-data.zip "https://s2.ketabonline.com/books/2878/2878.data.zip"'
    );
    console.error(
      "  mkdir -p /tmp/nashr-data && unzip -o /tmp/nashr-data.zip -d /tmp/nashr-data/"
    );
    process.exit(1);
  }

  console.log("Loading book data...");
  const book = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  console.log(`Loaded ${book.pages.length} pages, ${book.index.length} chapters\n`);

  // Build a page lookup by page_id (which is the `id` field on each page)
  // Actually, pages are sequential — page_id in index corresponds to the page's `id` field
  const pageById = new Map();
  for (const p of book.pages) {
    pageById.set(p.id, p);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = [];

  for (const ch of CHAPTERS) {
    console.log(`--- ${ch.name}: ${ch.title} ---`);
    console.log(`  Pages: ${ch.start} to ${ch.end === Infinity ? "end" : ch.end - 1}`);

    // Collect pages in range
    const pages = [];
    for (const p of book.pages) {
      if (p.id >= ch.start && p.id < ch.end) {
        pages.push(p);
      }
    }
    pages.sort((a, b) => a.id - b.id);

    if (pages.length === 0) {
      console.log("  WARNING: No pages found!");
      continue;
    }

    // Extract and clean text
    const textParts = pages.map((p) => stripHtml(p.content));
    const fullText = textParts.join("\n\n---\n\n");

    // Build markdown
    const md = [
      `# ${ch.title}`,
      "",
      `**Source**: An-Nashr fi al-Qira'at al-'Ashr, Ibn al-Jazari (d. 833 AH)`,
      `**Data**: ketabonline.com/ar/books/2878 (pages ${ch.start}–${pages[pages.length - 1].id})`,
      `**Extracted**: ${new Date().toISOString().split("T")[0]}`,
      `**Description**: ${ch.desc}`,
      "",
      "---",
      "",
      fullText,
    ].join("\n");

    const outPath = path.join(OUTPUT_DIR, `${ch.name}.md`);
    fs.writeFileSync(outPath, md, "utf-8");

    const charCount = fullText.length;
    console.log(`  Saved: ${outPath} (${pages.length} pages, ${charCount} chars)`);
    results.push({ name: ch.name, pages: pages.length, chars: charCount });
  }

  console.log("\n" + "=".repeat(60));
  console.log("Done! Extracted chapters:");
  for (const r of results) {
    console.log(`  ${r.name}: ${r.pages} pages, ${r.chars} chars`);
  }
}

main();
