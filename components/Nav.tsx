"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > 80 && y > lastY) {
            nav.classList.add("hidden");
          } else {
            nav.classList.remove("hidden");
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef}>
      <Link href="/" className="nav-logo">Sharon</Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <a href="#">Resume</a>
      </div>
      <a href="mailto:hello@sharon.design" className="nav-cta">Let&#39;s talk</a>
    </nav>
  );
}
