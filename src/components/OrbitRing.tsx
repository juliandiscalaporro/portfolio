"use client";

import { useEffect, useRef } from "react";

export default function OrbitRing({ size }: { size: number }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const dot = svg.querySelector<SVGCircleElement>("#orbit-dot");
    if (!dot) return;

    let frame: number;
    let angle = 0;
    const r = size / 2 - 6;

    const animate = () => {
      angle += 0.008;
      const x = size / 2 + r * Math.cos(angle);
      const y = size / 2 + r * Math.sin(angle) * 0.38;
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [size]);

  const r = size / 2 - 6;

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      className="absolute inset-0 pointer-events-none"
      aria-hidden
    >
      <ellipse
        cx={size / 2}
        cy={size / 2}
        rx={r}
        ry={r * 0.38}
        fill="none"
        stroke="rgba(99,179,237,0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle id="orbit-dot" r="4" fill="#38bdf8" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
