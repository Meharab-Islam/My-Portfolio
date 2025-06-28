"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    
    const [isHovering, setIsHovering] = useState(false);

    const requestRef = useRef<number | null>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    
    const dotPosition = useRef({ x: 0, y: 0 });
    const outlinePosition = useRef({ x: 0, y: 0 });

    const dotSpeed = 0.7;
    const outlineSpeed = 0.15;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as Element;
            if (target.closest('a, button, input[type="submit"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const animate = () => {
            dotPosition.current.x += (mousePosition.current.x - dotPosition.current.x) * dotSpeed;
            dotPosition.current.y += (mousePosition.current.y - dotPosition.current.y) * dotSpeed;

            if (isHovering) {
                outlinePosition.current.x = dotPosition.current.x;
                outlinePosition.current.y = dotPosition.current.y;
            } else {
                outlinePosition.current.x += (mousePosition.current.x - outlinePosition.current.x) * outlineSpeed;
                outlinePosition.current.y += (mousePosition.current.y - outlinePosition.current.y) * outlineSpeed;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0)`;
            }
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlinePosition.current.x}px, ${outlinePosition.current.y}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    // The dependency array must be empty to set up the listeners only once.
    }, []); // 👈 THE FIX IS HERE

    const outlineSize = isHovering ? 25 : 30;
    const dotSize = isHovering ? 5 : 8;

    return (
        <>
            {/* Cursor Outline */}
            <div
                ref={outlineRef}
                className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-blue-600 transition-[width,height] duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
                    isHovering ? 'border-4' : 'border-2'
                }`}
                style={{
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                    willChange: 'transform, width, height',
                }}
            />
            {/* Cursor Dot */}
            <div
                ref={dotRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-blue-600 transition-[width,height] duration-200 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    willChange: 'transform, width, height',
                }}
            />
        </>
    );
}