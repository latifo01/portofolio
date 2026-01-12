
"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathBlockProps {
    formula: string;
    block?: boolean;
}

export default function MathBlock({ formula, block = true }: MathBlockProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            katex.render(formula, containerRef.current, {
                throwOnError: false,
                displayMode: block,
            });
        }
    }, [formula, block]);

    return <div ref={containerRef} className={`${block ? "my-4" : "inline-block mx-1"}`} />;
}
