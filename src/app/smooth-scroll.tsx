"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let lenis: Lenis | undefined;

    function sync() {
      if (desktop.matches) {
        lenis ??= new Lenis({ lerp: 0.11, autoRaf: true, syncTouch: false });
      } else {
        lenis?.destroy();
        lenis = undefined;
      }
    }

    // Let native focus, scrollbar drags and history restoration take over immediately.
    function interrupt() {
      if (lenis?.isScrolling !== "smooth") return;
      lenis.stop();
      lenis.start();
    }

    sync();
    desktop.addEventListener("change", sync);
    window.addEventListener("pointerdown", interrupt, { passive: true });
    window.addEventListener("keydown", interrupt);
    window.addEventListener("popstate", interrupt);
    window.addEventListener("hashchange", interrupt);

    return () => {
      desktop.removeEventListener("change", sync);
      window.removeEventListener("pointerdown", interrupt);
      window.removeEventListener("keydown", interrupt);
      window.removeEventListener("popstate", interrupt);
      window.removeEventListener("hashchange", interrupt);
      lenis?.destroy();
    };
  }, []);

  return null;
}
