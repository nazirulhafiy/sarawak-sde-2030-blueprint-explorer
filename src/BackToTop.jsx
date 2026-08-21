import { useEffect, useState } from "react";

const MINIMUM_SCROLL_THRESHOLD = 480;

export default function BackToTop({ label }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = Math.max(
        MINIMUM_SCROLL_THRESHOLD,
        window.innerHeight * 0.75,
      );
      setIsVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      aria-hidden={!isVisible}
      aria-label={label}
      className="back-to-top"
      data-visible={isVisible ? "true" : "false"}
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <span>{label}</span>
      <span aria-hidden="true" className="back-to-top-arrow">↑</span>
    </button>
  );
}
