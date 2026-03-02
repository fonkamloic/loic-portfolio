"use client";

import { useEffect, useRef } from "react";

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        ref.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.06), transparent 80%)",
      }}
    />
  );
}

export default Spotlight;
