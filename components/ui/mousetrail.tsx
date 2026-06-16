'use client';

import { cn } from '@/lib/utils';
import { type ReactNode, useRef, useCallback, useEffect } from 'react';

interface ImageMouseTrailProps {
  items: string[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  /** Smaller = more frequent trail drops. Default: 50 */
  distance?: number;
  /** Max visible images at once. Default: 5 */
  maxNumberOfImages?: number;
  /** Auto-fade images after 1.5s. Default: false */
  fadeAnimation?: boolean;
}

export default function ImageMouseTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = 'w-20 h-28',
  distance = 50,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Each image element ref
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  // Mutable state kept in refs so they never go stale between renders
  const globalIndex = useRef(0);
  const last = useRef({ x: 0, y: 0 });
  const zCounter = useRef(1);
  const fadeTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Cleanup fade timers on unmount
  useEffect(() => {
    return () => {
      fadeTimers.current.forEach(clearTimeout);
    };
  }, []);

  const distanceFromLast = useCallback((x: number, y: number) => {
    return Math.hypot(x - last.current.x, y - last.current.y);
  }, []);

  const activate = useCallback(
    (img: HTMLImageElement, x: number, y: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Position relative to container
      img.style.left = `${x - rect.left}px`;
      img.style.top = `${y - rect.top}px`;

      // Cycle z-index so newer images always appear on top
      if (zCounter.current > 50) zCounter.current = 1;
      img.style.zIndex = String(zCounter.current++);

      // Snap transition off so the image jumps to new position instantly
      img.style.transition = 'none';
      img.style.transform = 'translate(-50%, -50%) scale(0)';
      img.style.opacity = '0';

      // Force reflow so the next transition fires
      void img.offsetWidth;

      // Animate in
      img.style.transition =
        'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease';
      img.style.transform = 'translate(-50%, -50%) scale(1)';
      img.style.opacity = '1';

      // Auto-fade after delay
      if (fadeAnimation) {
        const id = setTimeout(() => {
          img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
          img.style.transform = 'translate(-50%, -50%) scale(0.85)';
          img.style.opacity = '0';
        }, 1500);
        fadeTimers.current.push(id);
      }

      last.current = { x, y };
    },
    [fadeAnimation]
  );

  const deactivate = useCallback((img: HTMLImageElement | null) => {
    if (!img) return;
    img.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    img.style.transform = 'translate(-50%, -50%) scale(0.85)';
    img.style.opacity = '0';
  }, []);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      const threshold = window.innerWidth / distance;
      if (distanceFromLast(clientX, clientY) < threshold) return;

      const count = imgRefs.current.length;
      const lead = imgRefs.current[globalIndex.current % count];
      const tailIndex = globalIndex.current - maxNumberOfImages;
      const tail =
        tailIndex >= 0 ? imgRefs.current[tailIndex % count] : null;

      if (lead) activate(lead, clientX, clientY);
      if (!fadeAnimation && tail) deactivate(tail);

      globalIndex.current++;
    },
    [activate, deactivate, distance, fadeAnimation, maxNumberOfImages, distanceFromLast]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX, e.clientY),
    [handleMove]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    },
    [handleMove]
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-lg',
        className
      )}
    >
      {items.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: 0,
            pointerEvents: 'none',
            willChange: 'transform, opacity, left, top',
          }}
          className={cn('object-cover rounded-lg', imgClass)}
        />
      ))}
      {children}
    </section>
  );
}