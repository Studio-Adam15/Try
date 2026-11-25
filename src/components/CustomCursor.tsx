import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Language } from '../types';

interface CustomCursorProps {
  language: Language;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ language }) => {
  const [cursorType, setCursorType] = useState<'default' | 'explore' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const visibleRef = useRef(false);
  const typeRef = useRef<'default' | 'explore' | 'button'>('default');

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { damping: 32, stiffness: 420, mass: 0.25 });
  const y = useSpring(rawY, { damping: 32, stiffness: 420, mass: 0.25 });

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncCapabilities = () => {
      const enabled = pointerQuery.matches && !motionQuery.matches;
      setIsEnabled(enabled);
      if (!enabled) {
        visibleRef.current = false;
        setIsVisible(false);
      }
    };

    syncCapabilities();
    pointerQuery.addEventListener('change', syncCapabilities);
    motionQuery.addEventListener('change', syncCapabilities);

    return () => {
      pointerQuery.removeEventListener('change', syncCapabilities);
      motionQuery.removeEventListener('change', syncCapabilities);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      let nextType: 'default' | 'explore' | 'button' = 'default';

      if (target) {
        if (target.closest('[data-cursor="explore"]')) {
          nextType = 'explore';
        } else if (target.closest('button, a, input, select, textarea, [data-cursor="pointer"]')) {
          nextType = 'button';
        }
      }

      const halfSize = nextType === 'explore' ? 38 : nextType === 'button' ? 20 : 6;
      rawX.set(e.clientX - halfSize);
      rawY.set(e.clientY - halfSize);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      if (typeRef.current !== nextType) {
        typeRef.current = nextType;
        setCursorType(nextType);
      }
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isEnabled, rawX, rawY]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ x, y }}
        animate={{
          width: cursorType === 'explore' ? 76 : cursorType === 'button' ? 40 : 12,
          height: cursorType === 'explore' ? 76 : cursorType === 'button' ? 40 : 12,
          backgroundColor:
            cursorType === 'explore'
              ? 'rgba(182, 151, 91, 0.92)'
              : cursorType === 'button'
              ? 'rgba(74, 16, 27, 0.25)'
              : '#B6975B',
          borderColor: cursorType === 'button' ? '#B6975B' : 'transparent',
          borderWidth: cursorType === 'button' ? 1.5 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.35,
        }}
        className="fixed top-0 left-0 rounded-full flex items-center justify-center backdrop-blur-xs select-none shadow-md"
      >
        {cursorType === 'explore' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif-luxury text-[10px] tracking-widest rtl:tracking-normal text-[#2A0B10] uppercase font-bold"
          >
            {language === 'ar' ? 'استكشف' : 'EXPLORE'}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
