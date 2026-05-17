import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elms = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elms.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px 0px 0px`, threshold: 0 }
    );

    elms.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
