import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Animation Timing Constants
// ─────────────────────────────────────────────────────────────────────────────

export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    BASE: 0.5,
    SLOW: 0.8,
  },
  DELAY: {
    STAGGER: 0.1,
    SHORT: 0.1,
    MEDIUM: 0.2,
    LONG: 0.3,
  },
  EASING: {
    DEFAULT: [0.25, 0.46, 0.45, 0.94],
    EASE_OUT: [0.33, 1, 0.68, 1],
    EASE_IN_OUT: [0.4, 0, 0.2, 1],
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Fade In Variants
// ─────────────────────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Slide Up Variants
// ─────────────────────────────────────────────────────────────────────────────

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Scale In Variants
// ─────────────────────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stagger Container Variants
// ─────────────────────────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.DELAY.STAGGER,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stagger Item Variants (used with staggerContainer)
// ─────────────────────────────────────────────────────────────────────────────

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Slide Down Variants
// ─────────────────────────────────────────────────────────────────────────────

export const slideDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Slide Left Variants
// ─────────────────────────────────────────────────────────────────────────────

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    x: -24,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Slide Right Variants
// ─────────────────────────────────────────────────────────────────────────────

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.DURATION.BASE,
      ease: ANIMATION.EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: {
      duration: ANIMATION.DURATION.FAST,
    },
  },
};
