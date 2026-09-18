import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default function AnimatedHeading({ text, className = '', tag = 'h2' }: AnimatedHeadingProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={`overflow-hidden flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="inline-flex flex-wrap gap-x-3 gap-y-1"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block transform-gpu"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
