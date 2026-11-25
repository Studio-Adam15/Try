import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  highlightText?: string;
  highlightClassName?: string;
  delay?: number;
}

/**
 * Scroll/Entrance headline reveal inspired by React Bits ScrollReveal.
 * Preserves full screen-reader accessibility with aria-label on the container
 * and marks visual word spans aria-hidden="true", while honoring prefers-reduced-motion.
 */
export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  className = '',
  as = 'h2',
  highlightText,
  highlightClassName = 'text-[#B6975B]',
  delay = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Tag = as;
  const words = text.split(/\s+/).filter(Boolean);

  if (prefersReducedMotion) {
    return (
      <Tag className={className}>
        {highlightText && text.includes(highlightText) ? (
          <>
            {text.split(highlightText)[0]}
            <span className={highlightClassName}>{highlightText}</span>
            {text.split(highlightText).slice(1).join(highlightText)}
          </>
        ) : (
          text
        )}
      </Tag>
    );
  }

  const normalizedHighlight = highlightText?.replace(/[.*+?^${}()|[\]\\]/g, '') ?? '';

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true" className="inline">
        {words.map((word, index) => {
          const cleanWord = word.replace(/[.,،!؟]/g, '');
          const isHighlighted =
            Boolean(normalizedHighlight) &&
            (cleanWord === normalizedHighlight ||
              normalizedHighlight.split(/\s+/).includes(cleanWord));

          return (
            <React.Fragment key={`${word}-${index}`}>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: delay + Math.min(index * 0.045, 0.35),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
              >
                {word}
              </motion.span>
              {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          );
        })}
      </span>
    </Tag>
  );
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Smooth GPU-composited viewport entrance inspired by React Bits AnimatedContent.
 * Uses only transform & opacity and skips motion when user prefers-reduced-motion.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
