"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./editorial.module.css";

const videoUrl = "/assets/cities.75c17800de.mp4";

export function BentoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const syncMotion = () => setMotionAllowed(motion.matches);
    syncMotion();
    motion.addEventListener("change", syncMotion);

    const observer = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.3), {
      threshold: 0.3,
    });
    observer.observe(video);

    return () => {
      motion.removeEventListener("change", syncMotion);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!motionAllowed) {
      video.pause();
      if (video.hasAttribute("src")) {
        video.removeAttribute("src");
        video.load();
      }
    } else if (inView && !paused) {
      if (!video.hasAttribute("src")) video.src = videoUrl;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, motionAllowed, paused]);

  return (
    <>
      <video
        ref={videoRef}
        className={styles.citiesVideo}
        poster="/assets/cities-poster.webp"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setStarted(true)}
      />
      {motionAllowed && started && (
        <button
          className={styles.videoControl}
          type="button"
          aria-label={paused ? "Воспроизвести видео" : "Приостановить видео"}
          onClick={() => setPaused(!paused)}
        >
          <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d={paused ? "M6 4l10 6-10 6z" : "M5 4h3v12H5zm7 0h3v12h-3z"} />
          </svg>
        </button>
      )}
    </>
  );
}
