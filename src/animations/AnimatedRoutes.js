import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { GlobalRoutes } from '../routes';

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <GlobalRoutes />
    </AnimatePresence>
  )
}
