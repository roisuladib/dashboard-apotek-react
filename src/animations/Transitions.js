import React from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

export const Transitions = ({ children, initial, animate, exit }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </motion.div>
  )
}

Transitions.propTypes = {
  initial: propTypes.string,
  animate: propTypes.string,
  exit: propTypes.string,
}
Transitions.defaultProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
