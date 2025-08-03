"use client";

import { motion } from "framer-motion";

const items = [
  "Framer Motion은 React를 위한 강력한 애니메이션 라이브러리입니다.",
  "단순한 상태 변화부터 복잡한 애니메이션까지 간결한 문법으로 구현할 수 있습니다.",
  "stagger 기능을 사용하면 요소들을 순차적으로 자연스럽게 보여줄 수 있습니다.",
  "사용자 경험을 고려한 미세한 움직임이 인터페이스의 완성도를 높여줍니다.",
];

export default function AnimationComparison() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex gap-4 p-4">
      {/* ❌ 한꺼번에 등장 */}
      <div className="p-4 border border-gray-300 rounded-md">
        <h3 className="text-lg font-bold mb-2">한 번에 등장</h3>
        <motion.ul
          initial="initial"
          animate="animate"
          className="flex flex-col gap-2 list-none"
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* ✅ 순차적으로 등장 */}
      <div className="p-4 border border-gray-300 rounded-md">
        <h3 className="text-lg font-bold mb-2">순차적으로 등장</h3>
        <motion.ul
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-2 list-none"
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
