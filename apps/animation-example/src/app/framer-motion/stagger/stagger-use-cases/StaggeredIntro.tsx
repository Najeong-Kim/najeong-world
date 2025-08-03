import { motion } from "framer-motion";

const introLines = [
  "아주 평범한 하루였습니다.",
  "그런데 그날, 하나의 아이디어가 머릿속을 스쳤죠.",
  "복잡하고 불편한 도구 대신, 정말 필요한 것만 담긴 무언가를 만들면 어떨까?",
  "그렇게 이 프로젝트는 시작되었습니다.",
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, ease: "easeOut" },
};

export default function StaggeredIntro({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.6,
      }}
    >
      <h4 className="mb-2">📖 텍스트를 순차적으로 보여줄 때</h4>

      <motion.div className="flex flex-col gap-8 pt-4 size-full">
        {introLines.map((line, i) => (
          <motion.p
            key={i}
            variants={textVariants}
            transition={{ duration: 0.8 }}
            className="m-0 text-base leading-6 text-gray-800"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
