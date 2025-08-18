"use client";
import { motion, stagger } from "framer-motion";

const points = [
  { x: 40, y: 80 }, { x: 120, y: 40 }, { x: 200, y: 90 },
  { x: 260, y: 30 }, { x: 320, y: 100 },
];

export default function Constellation() {
  return (
    <motion.svg
      width={360} height={140}
      initial="initial" animate="animate"
      variants={{ animate: { transition: { delayChildren: stagger(0.15, { from: 0 }) } } }}
    >
      {points.map((p, i) => (
        <motion.circle
          key={i} cx={p.x} cy={p.y} r="4" fill="#60a5fa"
          variants={{
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 240, damping: 14 }}
        />
      ))}
      {/* 선은 마지막에 드로잉 */}
      <motion.polyline
        points={points.map(p => `${p.x},${p.y}`).join(" ")}
        fill="none" stroke="#93c5fd" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.15 * points.length, duration: 0.8, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
