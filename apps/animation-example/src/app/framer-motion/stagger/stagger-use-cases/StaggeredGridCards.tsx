import { motion } from "framer-motion";

const topics = [
  { icon: "📰", title: "뉴스" },
  { icon: "📊", title: "리포트" },
  { icon: "🎨", title: "디자인" },
  { icon: "📦", title: "상품" },
  { icon: "💬", title: "피드백" },
  { icon: "📁", title: "자료실" },
  { icon: "🎥", title: "영상" },
  { icon: "📈", title: "분석" },
  { icon: "🛠", title: "도구" },
  { icon: "📅", title: "캘린더" },
  { icon: "🧪", title: "실험실" },
  { icon: "🛎", title: "알림" },
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export default function StaggeredGridCards({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h4 className="mb-2">🗂 카드 UI가 그리드로 렌더링될 때</h4>

      <motion.div
        className="grid grid-cols-4 grid-rows-3 gap-4"
      >
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 py-3 px-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center"
          >
            <span className="mb-2">{topic.icon}</span>
            <span className="text-sm">{topic.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
