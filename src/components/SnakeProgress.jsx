import { useEffect, useRef, useState } from 'react';

const DESKTOP_PATH =
  'M 83 -60 C 72 30 18 55 20 155 C 22 245 88 235 82 345 C 76 455 18 430 22 550 C 26 665 88 635 80 755 C 72 865 18 845 24 955 C 28 1025 58 1045 79 1080';

const MOBILE_PATH =
  'M 88 -60 C 64 50 71 120 88 205 C 98 300 70 355 82 455 C 94 555 68 620 84 720 C 96 805 72 880 86 1080';

export default function SnakeProgress() {
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(1);
  const [node, setNode] = useState({ x: 83, y: -60 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewportMode = () => setIsMobile(window.innerWidth < 768);
    updateViewportMode();
    window.addEventListener('resize', updateViewportMode, { passive: true });
    return () => window.removeEventListener('resize', updateViewportMode);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;

    const total = path.getTotalLength();
    setPathLength(total);

    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / scrollable));
      const point = path.getPointAtLength(total * nextProgress);

      setProgress(nextProgress);
      setNode({ x: point.x, y: point.y });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  const dashOffset = pathLength * (1 - progress);
  const percent = Math.round(progress * 100);
  const path = isMobile ? MOBILE_PATH : DESKTOP_PATH;

  return (
    <div className="snake-progress pointer-events-none fixed inset-0 z-30" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path className="snake-progress__rail" d={path} />
        <path
          ref={pathRef}
          className="snake-progress__active"
          d={path}
          strokeDasharray={pathLength}
          strokeDashoffset={dashOffset}
        />

        <g className="snake-progress__head" transform={`translate(${node.x} ${node.y})`}>
          <circle className="snake-progress__pulse" r="2.5" />
          <circle className="snake-progress__dot" r="1.05" />
        </g>
      </svg>

      <div className="snake-progress__readout">
        <span>PORTFOLIO_PROGRESS</span>
        <strong>{String(percent).padStart(2, '0')}%</strong>
      </div>
    </div>
  );
}