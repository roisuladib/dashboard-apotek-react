import React from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

const Animates = {
  fadeUp: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    transition: { duration: '0.2' }
  },
  slideRight: {
    initial: { y: 30, width: 0 },
    animate: { y: 0, width: '100%' },
    exit: { y: -30, x: window.innerHeight },
    transition: { duration: '0.2' }
  }
}

export const Transitions = ({ children, variants, initial, animate, exit, transition }) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

Transitions.propTypes = {
  children: propTypes.node,
  variants: propTypes.object,
  initial: propTypes.object,
  animate: propTypes.object,
  exit: propTypes.object,
}
Transitions.defaultProps = Animates.slideRight;
