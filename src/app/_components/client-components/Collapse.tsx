"use client";

import { useEffect, useRef } from "react";

interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number; // in ms
}

export function Collapse({
  isOpen,
  children,
  className = "",
  duration = 500,
}: CollapseProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    content.style.transition = `height ${duration}ms ease`;

    if (isOpen) {
      content.style.height = `${content.scrollHeight}px`;
      const handleTransitionEnd = () => {
        if (content) {
          content.style.height = "auto"; // allow natural resizing after expand
          content.removeEventListener("transitionend", handleTransitionEnd);
        }
      };
      content.addEventListener("transitionend", handleTransitionEnd);
    } else {
      if (content.style.height === "auto") {
        content.style.height = `${content.scrollHeight}px`; // snap to current height before collapsing
        requestAnimationFrame(() => {
          content.style.height = "0px";
        });
      } else {
        content.style.height = "0px";
      }
    }
  }, [isOpen, duration]);

  return (
    <div
      ref={contentRef}
      style={{ height: "0px", overflow: "hidden" }}
      className={className}
    >
      {children}
    </div>
  );
}
