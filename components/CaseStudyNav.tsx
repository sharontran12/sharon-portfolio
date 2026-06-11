"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

export default function CaseStudyNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav className="cs-sidenav">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`cs-sidenav-item${active === id ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
