import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const fruits = [
  { name: "Apple", emoji: "🍎", color: "#ffe8e8" },
  { name: "Banana", emoji: "🍌", color: "#fffbe6" },
  { name: "Cherry", emoji: "🍒", color: "#fde6f0" },
  { name: "Grapes", emoji: "🍇", color: "#f0eaff" },
];

export default function StaggeredList({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h4 className="mb-2">📋 리스트 아이템이 순서대로 등장할 때</h4>

      <motion.ul className="list-none p-0 m-0">
        {fruits.map((fruit, i) => (
          <motion.li
            key={fruit.name}
            variants={itemVariants}
            className="flex items-center gap-2 py-3 px-4 mb-2 rounded-lg shadow-sm"
            style={{
              background: fruit.color,
            }}
          >
            <span className="text-2xl">{fruit.emoji}</span>
            {fruit.name}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
