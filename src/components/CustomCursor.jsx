import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const boxRef = useRef(null);
  const glowRef = useRef(null);
  const labelRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only enable custom cursor and global glow on desktop / fine-pointer devices with hover capability
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return undefined;
    }

    setMounted(true);

    let rafId = 0;
    let latestX = 0;
    let latestY = 0;
    let isVisible = false;
    let isHovering = false;

    const checkHoverTarget = (target) => {
      if (!target || !(target instanceof Element)) return false;
      return Boolean(
        target.closest(
          'button, a, [role="button"], input, select, textarea, .evidence-card, .archive-arrow, .hud-icon, .hud-link, .contact-initiate, .mode-button, .terminal-button, [data-cursor="hover"]'
        )
      );
    };

    const updateHoverState = (hovering) => {
      if (isHovering === hovering) return;
      isHovering = hovering;

      if (boxRef.current) {
        if (isHovering) {
          boxRef.current.style.width = '32px';
          boxRef.current.style.height = '32px';
          boxRef.current.style.backgroundColor = 'transparent';
          boxRef.current.style.border = '1.5px solid #ff2a2a';
          boxRef.current.style.transform = 'translate(-11px, -11px)';
        } else {
          boxRef.current.style.width = '10px';
          boxRef.current.style.height = '10px';
          boxRef.current.style.backgroundColor = '#ff2a2a';
          boxRef.current.style.border = '0px solid transparent';
          boxRef.current.style.transform = 'translate(0px, 0px)';
        }
      }

      if (labelRef.current) {
        if (isHovering) {
          labelRef.current.textContent = '>> ACCESS';
          labelRef.current.style.top = '25px';
          labelRef.current.style.left = '25px';
          labelRef.current.style.fontWeight = '600';
          labelRef.current.style.letterSpacing = '0.08em';
        } else {
          labelRef.current.textContent = `X: ${Math.round(latestX)} Y: ${Math.round(latestY)}`;
          labelRef.current.style.top = '16px';
          labelRef.current.style.left = '16px';
          labelRef.current.style.fontWeight = 'normal';
          labelRef.current.style.letterSpacing = '0.04em';
        }
      }
    };

    const render = () => {
      const transform = `translate3d(${latestX}px, ${latestY}px, 0)`;
      if (cursorRef.current) {
        cursorRef.current.style.transform = transform;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = transform;
      }
      rafId = 0;
    };

    const onPointerMove = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      if (!isVisible) {
        isVisible = true;
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
        if (glowRef.current) glowRef.current.style.opacity = '1';
      }

      const hovering = checkHoverTarget(event.target);
      updateHoverState(hovering);

      if (!isHovering && labelRef.current) {
        labelRef.current.textContent = `X: ${Math.round(latestX)} Y: ${Math.round(latestY)}`;
      }

      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onPointerOver = (event) => {
      const hovering = checkHoverTarget(event.target);
      updateHoverState(hovering);
    };

    const onPointerOut = (event) => {
      const hovering = checkHoverTarget(event.relatedTarget);
      updateHoverState(hovering);
    };

    const onPointerEnter = () => {
      isVisible = true;
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    const onPointerLeave = () => {
      isVisible = false;
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });
    document.documentElement.addEventListener('pointerenter', onPointerEnter, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave, { passive: true });
    window.addEventListener('blur', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      document.documentElement.removeEventListener('pointerenter', onPointerEnter);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('blur', onPointerLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <>
      {/* Global Red Shadow / Flashlight Glow across full website */}
      <div
        ref={glowRef}
        className="global-cursor-glow"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          marginLeft: '-300px',
          marginTop: '-300px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 40,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
          opacity: 0,
        }}
      />

      {/* Custom Square Cursor with Coordinates or >> ACCESS */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 2147483647,
          opacity: 0,
          willChange: 'transform',
          transition: 'opacity 0.15s ease',
        }}
      >
        {/* Dynamic square box (solid red 10px default -> hollow red box 32px on hover) */}
        <div
          ref={boxRef}
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#ff2a2a',
            border: '0px solid transparent',
            transform: 'translate(0px, 0px)',
            transition:
              'width 0.22s cubic-bezier(0.22, 1, 0.36, 1), height 0.22s cubic-bezier(0.22, 1, 0.36, 1), transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease, border 0.2s ease',
            boxSizing: 'border-box',
          }}
        />

        {/* Dynamic label (Coordinates default -> >> ACCESS on hover) */}
        <span
          ref={labelRef}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            fontFamily: "'IBM Plex Mono', SFMono-Regular, Consolas, monospace",
            fontSize: '10px',
            lineHeight: 1,
            color: '#ff2a2a',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            letterSpacing: '0.04em',
            transition: 'top 0.22s ease, left 0.22s ease',
          }}
        >
          X: 0 Y: 0
        </span>
      </div>
    </>,
    document.body,
  );
}