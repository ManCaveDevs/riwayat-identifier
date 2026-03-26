"""
Scrape specific chapters from An-Nashr fi al-Qira'at al-'Ashr on shamela.ws
Uses Playwright to handle Cloudflare JS challenges.

Book: النشر في القراءات العشر (shamela.ws/book/22642)
Author: ابن الجزري (d. 833 AH)

Usage:
    source .venv/bin/activate
    python scripts/scrape_nashr.py
"""

import time
import re
from pathlib import Path
from playwright.sync_api import sync_playwright

BOOK_ID = 22642
BASE_URL = f"https://shamela.ws/book/{BOOK_ID}"
OUTPUT_DIR = Path("data/sources")
WAIT_BETWEEN = 3  # seconds between pages

# Chapter page numbers in An-Nashr on shamela.ws
# These are the section IDs from the table of contents
# We'll first fetch the TOC page to find them, then fetch each chapter
CHAPTERS = [
    {"name": "basmalah", "search": "باب اختلافهم في البسملة", "desc": "Basmalah rulings per reader"},
    {"name": "idgham-kabir", "search": "الإدغام الكبير", "desc": "Idgham Kabir per reader"},
    {"name": "imalah", "search": "باب مذاهبهم في الفتح", "desc": "Fath and Imalah per reader"},
    {"name": "madd", "search": "باب المد والقصر", "desc": "Madd lengths per reader"},
    {"name": "takbir", "search": "باب التكبير", "desc": "Takbir per reader"},
    {"name": "ra", "search": "باب مذاهبهم في ترقيق الراءات", "desc": "Ra rules per reader"},
]


def scrape_nashr():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            locale="ar-SA",
        )
        page = context.new_page()

        print("=" * 60)
        print("Scraping An-Nashr fi al-Qira'at al-'Ashr")
        print(f"Book: {BASE_URL}")
        print("=" * 60)

        # Step 1: Load the book index page
        print(f"\nFetching book index...")
        page.goto(BASE_URL, wait_until="domcontentloaded", timeout=60000)
        time.sleep(8)  # Give Cloudflare time to resolve

        # Check if we got past Cloudflare
        title = page.title()
        print(f"  Page title: {title}")

        if "moment" in title.lower() or "cloudflare" in title.lower():
            print("  Cloudflare challenge detected. Waiting for resolution...")
            page.wait_for_load_state("networkidle", timeout=30000)
            time.sleep(5)
            title = page.title()
            print(f"  Title after wait: {title}")

        # Step 2: Find chapter links from the TOC
        print(f"\nSearching for chapter links...")

        # Get all links on the page
        links = page.query_selector_all("a")
        chapter_urls = {}

        for link in links:
            try:
                text = link.inner_text().strip()
                href = link.get_attribute("href")
                if not href or not text:
                    continue

                for ch in CHAPTERS:
                    if ch["search"] in text and ch["name"] not in chapter_urls:
                        full_url = href if href.startswith("http") else f"https://shamela.ws{href}"
                        chapter_urls[ch["name"]] = {"url": full_url, "text": text, "desc": ch["desc"]}
                        print(f"  Found: {ch['name']} -> {full_url}")
                        break
            except:
                continue

        if not chapter_urls:
            print("\nNo chapter links found on index page. Dumping page content for debugging...")
            content = page.content()
            debug_path = OUTPUT_DIR / "nashr-debug-index.html"
            debug_path.write_text(content, encoding="utf-8")
            print(f"  Saved debug HTML to {debug_path}")

            # Try alternative: navigate page by page
            print("\nTrying sequential page navigation...")
            for page_num in [1, 50, 100, 150, 200]:
                url = f"{BASE_URL}/{page_num}"
                print(f"  Trying page {page_num}: {url}")
                page.goto(url, wait_until="networkidle", timeout=20000)
                time.sleep(2)
                text = page.inner_text("body")[:300]
                print(f"    Preview: {text[:200]}...")

            browser.close()
            return

        # Step 3: Fetch each chapter
        print(f"\nFetching {len(chapter_urls)} chapters...")
        results = {}

        for name, info in chapter_urls.items():
            print(f"\n--- {name}: {info['desc']} ---")
            print(f"  URL: {info['url']}")

            page.goto(info["url"], wait_until="domcontentloaded", timeout=60000)
            time.sleep(WAIT_BETWEEN + 3)

            # Extract the main text content
            # Shamela typically puts book text in a specific container
            text = None

            # Try various selectors
            for selector in [".nass", ".book-text", "#book-content", "article", ".content"]:
                el = page.query_selector(selector)
                if el:
                    text = el.inner_text()
                    if len(text) > 100:
                        break

            if not text or len(text) < 100:
                # Fallback: get all text from body
                text = page.inner_text("body")

            if not text:
                print(f"  FAILED to extract text")
                continue

            # Clean up the text
            # Remove excessive whitespace but keep paragraph breaks
            text = re.sub(r'\n{3,}', '\n\n', text)
            text = text.strip()

            # Save as markdown
            md = f"# {info['text']}\n\n"
            md += f"**Source**: An-Nashr fi al-Qira'at al-'Ashr, Ibn al-Jazari (d. 833 AH)\n"
            md += f"**URL**: {info['url']}\n"
            md += f"**Fetched**: {time.strftime('%Y-%m-%d')}\n"
            md += f"**Description**: {info['desc']}\n\n---\n\n"
            md += text

            output_path = OUTPUT_DIR / f"nashr-{name}.md"
            output_path.write_text(md, encoding="utf-8")
            print(f"  Saved: {output_path} ({len(text)} chars)")
            results[name] = len(text)

            # Also try to get the NEXT few pages of the same chapter
            # (chapters often span multiple pages)
            # Look for a "next" button
            next_btn = page.query_selector("a.next, a[rel='next'], .pagination a:last-child")
            if next_btn:
                next_pages = []
                for i in range(3):  # Get up to 3 continuation pages
                    try:
                        next_btn.click()
                        time.sleep(WAIT_BETWEEN)
                        continuation = page.inner_text("body")
                        if continuation and len(continuation) > 100:
                            next_pages.append(continuation)
                        next_btn = page.query_selector("a.next, a[rel='next'], .pagination a:last-child")
                        if not next_btn:
                            break
                    except:
                        break

                if next_pages:
                    # Append continuation pages
                    with open(output_path, "a", encoding="utf-8") as f:
                        for j, cont in enumerate(next_pages):
                            f.write(f"\n\n---\n\n## (Continuation page {j+2})\n\n{cont}")
                    print(f"  Added {len(next_pages)} continuation pages")

        browser.close()

        # Summary
        print(f"\n{'=' * 60}")
        print(f"Done! Fetched {len(results)}/{len(CHAPTERS)} chapters:")
        for name, chars in results.items():
            print(f"  {name}: {chars} chars")

        missing = [ch["name"] for ch in CHAPTERS if ch["name"] not in results]
        if missing:
            print(f"\nMissing: {', '.join(missing)}")


if __name__ == "__main__":
    scrape_nashr()
