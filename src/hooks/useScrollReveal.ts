import { useEffect, type RefObject } from "react";

export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.reveal = "shown";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const scan = () => {
      container.querySelectorAll<HTMLElement>("section").forEach((element) => {
        if (element.dataset.reveal) return;
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight * 0.9) {
          element.dataset.reveal = "shown";
          return;
        }
        element.dataset.reveal = "hidden";
        observer.observe(element);
      });
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [containerRef]);
}