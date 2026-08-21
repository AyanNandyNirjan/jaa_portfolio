import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const animate = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    const onOver = (event) => {
      const interactive = event.target.closest('a,button,[data-cursor]');
      ringRef.current?.classList.toggle('cursor-ring--active', Boolean(interactive));
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerover', onOver);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot pointer-events-none fixed left-0 top-0 z-[120] hidden md:block" />
      <div ref={ringRef} className="cursor-ring pointer-events-none fixed left-0 top-0 z-[119] hidden md:block" />
    </>
  );
}
