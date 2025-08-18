"use client";

import { animate, motion, stagger, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

function StaggerWithRefs() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elems = dotsRef.current.filter(
      (el): el is HTMLDivElement => el !== null
    );

    animate(
      elems,
      { y: [0, -20, 0] },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.2),
        repeat: Infinity,
        repeatDelay: 1.5,
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center size-full p-20 gap-5 list-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="size-4 rounded-full bg-gray-400"
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  },
};

function StaggerWithFramerMotion() {
  return (
    <motion.ul
      className="flex justify-center items-center size-full p-20 gap-5 list-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.li
          key={i}
          className="size-4 rounded-full bg-gray-400"
          variants={circleVariants}
        />
      ))}
    </motion.ul>
  );
}

export default function StaggerComparisonPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 border-r border-gray-200">
        <div className="h-full flex flex-col">
          <h2 className="text-lg font-semibold p-4 border-b border-gray-200">
            Stagger with Refs
          </h2>
          <div className="flex-1">
            <StaggerWithRefs />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full flex flex-col">
          <h2 className="text-lg font-semibold p-4 border-b border-gray-200">
            Stagger with Framer Motion
          </h2>
          <div className="flex-1">
            <StaggerWithFramerMotion />
          </div>
        </div>
      </div>
    </div>
  );
}
