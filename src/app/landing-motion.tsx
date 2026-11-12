"use client";

import { useEffect } from "react";

export function LandingMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;

        observer.unobserve(target);
        if (!target.matches(":focus-within")) target.classList.add("is-entering");
      }
    });

    for (const section of document.querySelectorAll("[data-reveal]")) {
      if (section.getBoundingClientRect().top >= window.innerHeight) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
