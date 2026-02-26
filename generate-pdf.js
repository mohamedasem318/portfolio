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
const TARGET_URL = "http://localhost:5173"; // change to your deployed URL if preferred
const OUTPUT_FILE = "portfolio.pdf";

// Full HD viewport – matches a 1920×1080 monitor so nothing is cut off or
// reflowed by a narrow viewport.
const VIEWPORT_WIDTH = 1920;
const VIEWPORT_HEIGHT = 1080;

// How long to wait after each scroll step (ms) so Framer Motion animations fire.
const SCROLL_PAUSE = 400;

// ── Main ──────────────────────────────────────────────────────────────────────
(async () => {
    console.log("🚀  Launching headless Chrome…");

    const browser = await puppeteer.launch({
        headless: true,
        // --start-maximized alone isn't reliable in headless mode; we set the
        // viewport explicitly instead.
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            `--window-size=${VIEWPORT_WIDTH},${VIEWPORT_HEIGHT}`,
        ],
    });

    const page = await browser.newPage();

    // Force the viewport to full HD so every responsive breakpoint renders at
    // desktop width, matching what a real full-screen browser would show.
    await page.setViewport({
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
        deviceScaleFactor: 1,
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

    // Scroll back to the top so the PDF starts from the hero section.
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));

    // ── Print to PDF ─────────────────────────────────────────────────────────────
    console.log(`📄  Generating ${OUTPUT_FILE}…`);
    await page.pdf({
        path: OUTPUT_FILE,
        // A3 landscape gives enough width to render the 1920px layout without
        // extra page-breaking or scaling artifacts.
        format: "A3",
        landscape: true,
        printBackground: true, // include background colours / gradients
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
        scale: 0.6, // fits the 1920-wide layout onto A3 paper cleanly
    });

    await browser.close();

    console.log(`✅  Done! Saved to: ${OUTPUT_FILE}`);
})();
