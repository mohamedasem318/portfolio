import { useEffect, useRef } from "react";
import portraitImg from "@/assets/portrait.jpg";

/**
 * The hero portrait physically travels and reshapes into the About portrait
 * as you scroll, tracking two invisible anchors (#hero-portrait-anchor,
 * #about-portrait-anchor) so it always sits over real content — never an empty
 * framed placeholder.
 *
 * To avoid it stranding mid-air on a mid-scroll stop, it SNAPS: once scrolling
 * goes idle while the morph is mid-flight, it gently settles to the nearer end
 * (fully hero, or fully docked in About). On touch / reduced-motion the whole
 * thing disables and the anchors show their own static images instead.
 */
const ABOUT_RADIUS = 16; // matches the About frame's rounded-2xl
const SNAP_LO = 0.18;
const SNAP_HI = 0.82;
const IDLE_MS = 180;

const MorphPortrait = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!el) return;

    const mqCoarse = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = () => !mqCoarse.matches && !mqReduce.matches;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Returns null if anchors are missing; otherwise the geometry we need.
    const measure = () => {
      const hero = document.getElementById("hero-portrait-anchor");
      const about = document.getElementById("about-portrait-anchor");
      if (!hero || !about) return null;
      const a = hero.getBoundingClientRect();
      const b = about.getBoundingClientRect();
      const sy = window.scrollY;
      const vh = window.innerHeight;
      const cyA = a.top + sy + a.height / 2;
      const cyB = b.top + sy + b.height / 2;
      const span = cyB - cyA || 1;
      let t = (sy + vh / 2 - cyA) / span;
      t = Math.max(0, Math.min(1, t));
      return { a, b, vh, cyA, cyB, t };
    };

    let ticking = false;
    let snapping = false;
    let idleTimer = 0;
    let lastY = window.scrollY;
    let dir: "down" | "up" = "down";

    const frame = () => {
      ticking = false;
      if (!active()) return;
      const m = measure();
      if (!m) return;
      const { a, b, t } = m;
      const e = ease(t);
      const w = a.width + (b.width - a.width) * e;
      const h = a.height + (b.height - a.height) * e;
      const left = a.left + (b.left - a.left) * e;
      const top = a.top + (b.top - a.top) * e;
      const radius = a.width / 2 + (ABOUT_RADIUS - a.width / 2) * e;
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.borderRadius = `${radius}px`;
      el.style.transform = `translate(${left}px, ${top}px)`;
    };

    const trySnap = () => {
      if (!active() || snapping) return;
      const m = measure();
      if (!m) return;
      if (m.t <= SNAP_LO || m.t >= SNAP_HI) return; // already settled enough
      // settle in the direction of travel: down -> dock in About, up -> back to Hero
      const target =
        dir === "down" ? m.cyB - m.vh / 2 : m.cyA - m.vh / 2; // scrollY for t=1 / t=0
      snapping = true;
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
      window.setTimeout(() => {
        snapping = false;
      }, 700);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        dir = y > lastY ? "down" : "up";
        lastY = y;
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
      if (!snapping) {
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(trySnap, IDLE_MS);
      }
    };

    const sync = () => {
      if (active()) {
        root.setAttribute("data-morph", "on");
        frame();
      } else {
        root.removeAttribute("data-morph");
      }
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    mqCoarse.addEventListener("change", sync);
    mqReduce.addEventListener("change", sync);
    window.addEventListener("load", frame);
    const settle = window.setTimeout(frame, 350);

    return () => {
      clearTimeout(settle);
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      mqCoarse.removeEventListener("change", sync);
      mqReduce.removeEventListener("change", sync);
      window.removeEventListener("load", frame);
      root.removeAttribute("data-morph");
    };
  }, []);

  return (
    <div id="morph-portrait" ref={ref} aria-hidden="true">
      <img src={portraitImg} alt="" />
    </div>
  );
};

export default MorphPortrait;
