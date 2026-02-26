/**
 * generate-pdf.js
 *
 * Generates a pixel-perfect PDF of the portfolio using Puppeteer (headless Chrome).
 *
 * Usage:
 *   1. Make sure the dev server is running:  npm run dev
 *   2. In a separate terminal, run:         node generate-pdf.js
 *
 * Or point TARGET_URL at your deployed Vercel URL to skip the dev server.
 */

import puppeteer from "puppeteer";

// ── Config ────────────────────────────────────────────────────────────────────
const TARGET_URL = "https://mohamedasem318.github.io/portfolio/"; // Uses the live deployment
const OUTPUT_FILE = "portfolio.pdf";

// A narrower layout like 1200x800 makes content appear larger and more readable.
const VIEWPORT_WIDTH = 1200;
const VIEWPORT_HEIGHT = 800;

// How long to wait after each scroll step (ms) so Framer Motion animations fire.
const SCROLL_PAUSE = 400;

// ── Main ──────────────────────────────────────────────────────────────────────
(async () => {
    console.log("🚀  Launching headless Chrome…");

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            `--window-size=${VIEWPORT_WIDTH},${VIEWPORT_HEIGHT}`,
        ],
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
        deviceScaleFactor: 1, // Change to 2 for high-res output if needed
    });

    console.log(`🌐  Navigating to ${TARGET_URL}…`);
    await page.goto(TARGET_URL, { waitUntil: "networkidle0", timeout: 60_000 });

    // ── Scroll through the page to trigger all InView animations ────────────────
    console.log("📜  Scrolling to trigger lazy animations…");
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const step = VIEWPORT_HEIGHT;

    for (let pos = 0; pos < totalHeight; pos += step) {
        await page.evaluate((y) => window.scrollTo(0, y), pos);
        await new Promise((r) => setTimeout(r, SCROLL_PAUSE));
    }

    // Scroll back to the top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));

    // Lock dynamic height classes so they don't stretch to the total PDF height
    await page.addStyleTag({
        content: `
          .min-h-screen { min-height: ${VIEWPORT_HEIGHT}px !important; }
          .h-screen { height: ${VIEWPORT_HEIGHT}px !important; }
        `
    });

    const finalHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    // ── Print to PDF ─────────────────────────────────────────────────────────────
    console.log(`📄  Generating ${OUTPUT_FILE}…`);
    await page.pdf({
        path: OUTPUT_FILE,
        printBackground: true,
        width: VIEWPORT_WIDTH + "px",
        height: finalHeight + "px", // Make it one continuous page
        pageRanges: "1",
    });

    await browser.close();

    console.log(`✅  Done! Saved to: ${OUTPUT_FILE}`);
})();
