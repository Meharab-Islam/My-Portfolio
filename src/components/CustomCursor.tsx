"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    
    const [isHovering, setIsHovering] = useState(false);

    const requestRef = useRef<number | null>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    
    // Re-introducing separate positions for the parallax effect
    const dotPosition = useRef({ x: 0, y: 0 });
    const outlinePosition = useRef({ x: 0, y: 0 });

    // Different speeds for the dot and outline
    const dotSpeed = 0.7;      // Smooth but responsive
    const outlineSpeed = 0.15; // Slower and floatier

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };
        
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const handleMouseClick = (e: MouseEvent) => {
            // UPDATED: Removed the loop to create only one wave
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            document.body.appendChild(ripple);
        
            ripple.style.left = `${e.clientX - ripple.clientWidth / 2}px`;
            ripple.style.top = `${e.clientY - ripple.clientHeight / 2}px`;
            
            // Automatically remove the element after its animation finishes
            ripple.onanimationend = () => {
                document.body.removeChild(ripple);
            };
        };
        
        

        const animate = () => {
            // Lerp dot position
            dotPosition.current.x += (mousePosition.current.x - dotPosition.current.x) * dotSpeed;
            dotPosition.current.y += (mousePosition.current.y - dotPosition.current.y) * dotSpeed;

            // Lerp outline position
            outlinePosition.current.x += (mousePosition.current.x - outlinePosition.current.x) * outlineSpeed;
            outlinePosition.current.y += (mousePosition.current.y - outlinePosition.current.y) * outlineSpeed;

            // Apply the specific position to each element
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
        window.addEventListener('click', handleMouseClick);
        document.querySelectorAll('a, button, input[type="submit"]').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
            document.querySelectorAll('a, button, input[type="submit"]').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const outlineSize = isHovering ? 40 : 30;
    const dotSize = isHovering ? 0 : 8;

    return (
        <>
            {/* Cursor Outline */}
            <div
                ref={outlineRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-blue-600 transition-[width,height,opacity] duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                    opacity: isHovering ? 0.5 : 1,
                    willChange: 'transform',
                }}
            />
            {/* Cursor Dot */}
            <div
                ref={dotRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-blue-600 transition-[width,height] duration-200 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    willChange: 'transform',
                }}
            />
        </>
    );
}