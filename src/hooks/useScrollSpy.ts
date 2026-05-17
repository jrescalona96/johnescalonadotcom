import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elms = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elms.length === 0) return;

    const onScroll = () => {
      const pos = window.scrollY + offset;
      let current = sectionIds[0];

      for (const el of elms) {
        if (el.offsetTop <= pos) {
          current = el.id;
        }
      }

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
