"use client";

import { useEffect, useRef, useState } from "react";

interface ClampLinesProps {
  text: string;
  lines?: number;
  className?: string;
}

export default function ClampLines({
  text,
  lines = 3,
  className,
}: ClampLinesProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    if (text) {
      clampLines();
    }
  }, [text]);

  const clampLines = () => {
    if (!elementRef.current) return;

    setDisplayText("");
    const lineHeight = parseFloat(
      getComputedStyle(elementRef.current).lineHeight
    );

    const maxHeight = lineHeight * lines;

    let start = 0;
    let middle = 0;
    let end = text.length;

    while (start <= end) {
      middle = Math.floor((start + end) / 2);
      elementRef.current.innerText = text.slice(0, middle);

      if (middle === text.length) {
        setDisplayText(text);
        return;
      }

      if (elementRef.current.clientHeight <= maxHeight) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    setDisplayText(text.slice(0, middle - 5) + " ...");
  };

  if (!text) {
    return null;
  }

  return (
    <>
      <span className={className} ref={elementRef}>
        {displayText}
      </span>
    </>
  );
}
