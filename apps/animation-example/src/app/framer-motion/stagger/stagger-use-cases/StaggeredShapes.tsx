import { motion } from "framer-motion";

const NUM_SHAPES = 50;

function generateShapes(n: number) {
  const types = ["circle", "square", "triangle"];
  const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#A66DD4"];
  const shapes = [];

  for (let i = 0; i < n; i++) {
    const size = Math.floor(20 + Math.random() * 30); // 20 ~ 50px
    const x = Math.floor(Math.random() * (100 - size / 5)); // 위치 여유
    const y = Math.floor(Math.random() * (100 - size / 5));
    const type = types[Math.floor(Math.random() * types.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    shapes.push({ type, color, x, y, size });
  }

  return shapes;
}

const shapes = generateShapes(NUM_SHAPES);

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const shapeVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

export default function StaggeredShapes({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      className="overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h4 className="text-gray-700 text-lg mb-4">
        🔷 랜덤하게 도형이 순차적으로 등장할 때
      </h4>

      <motion.div className="relative w-full h-full">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            variants={shapeVariants}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="absolute"
            style={{
              ...shapeStyle(shape.type, shape.size),
              backgroundColor: shape.type !== "triangle" ? shape.color : "transparent",
              borderBottomColor: shape.type === "triangle" ? shape.color : "transparent",
              top: `${shape.y}%`,
              left: `${shape.x}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function shapeStyle(type: string, size: number): React.CSSProperties {
  switch (type) {
    case "circle":
      return {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
      };
    case "square":
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    case "triangle":
      return {
        width: "0",
        height: "0",
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid`,
      };
    default:
      return {};
  }
}
