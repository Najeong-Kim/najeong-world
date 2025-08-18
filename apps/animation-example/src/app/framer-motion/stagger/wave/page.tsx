"use client";
import { motion, stagger, type Variants } from "framer-motion";

const RINGS = 5;             // 링 개수 (0은 중앙)
const DOTS_PER_RING = 12;    // 각 링의 점 개수
const RING_SPACING = 32;     // 링 간격(px)
const SIZE = 360;            // 컨테이너 크기(px)
const RING_DELAY = 0.09;     // ring 1당 지연(= 이전 수동 delay와 동일)

type Dot = { x: number; y: number };
type Ring = { ring: number; dots: Dot[] };

function makeRings(): Ring[] {
  const cx = SIZE / 2, cy = SIZE / 2;
  const rings: Ring[] = [];

  // ring 0: 중앙 1개
  rings.push({ ring: 0, dots: [{ x: cx, y: cy }] });

  // ring 1..RINGS
  for (let ring = 1; ring <= RINGS; ring++) {
    const r = ring * RING_SPACING;
    const dots: Dot[] = [];
    for (let i = 0; i < DOTS_PER_RING; i++) {
      const t = (i / DOTS_PER_RING) * Math.PI * 2;
      dots.push({ x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) });
    }
    rings.push({ ring, dots });
  }
  return rings;
}

const RINGS_DATA = makeRings();

// 바깥 컨테이너: "링"들을 순서대로 스타거 → ring * 0.09와 동일해짐
const outer: Variants = {
  animate: {
    transition: {
      delayChildren: stagger(RING_DELAY, { from: 0 }), // 0번(중앙) 링부터 시작
    },
  },
};

// 링 컨테이너: 내부 점들은 동시에(= 이전과 동일), 필요하면 아주 소량의 각도 스타거를 추가 가능
const ringContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      // 여기서는 동시 실행을 위해 스타거 없음 (원래 동작과 동일)
      // 원하면 staggerChildren: 0.01 정도로 살짝 돌려도 OK
    },
  },
};

// 점 애니메이션: 이전과 같은 패턴(스케일/투명도/글로우 등)
const dot: Variants = {
  initial: { scale: 0.8, opacity: 0.5, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  animate: {
    scale: [0.8, 1.5, 0.9],
    opacity: [0.5, 1, 0.6],
    boxShadow: [
      "0 0 0 rgba(0,0,0,0)",
      "0 0 12px rgba(0,0,0,0.15)",  // 그림자도 살짝 연하게
      "0 0 0 rgba(0,0,0,0)",
    ],
    backgroundColor: [
      "hsl(0, 60%, 75%)",   // 파스텔 레드
      "hsl(45, 60%, 75%)",  // 파스텔 오렌지/옐로
      "hsl(120, 60%, 75%)", // 파스텔 그린
      "hsl(200, 60%, 75%)", // 파스텔 블루
      "hsl(280, 60%, 80%)", // 파스텔 퍼플
    ],
    transition: {
      duration: 1.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};


export default function CircularRippleSameTiming() {
  return (
    <motion.ul
      className="relative list-none p-0 m-0"
      style={{ width: SIZE, height: SIZE }}
      variants={outer}
      initial="initial"
      animate="animate"
    >
      {RINGS_DATA.map((ring, idx) => (
        <motion.li key={idx} variants={ringContainer} className="absolute inset-0">
          {/* 각 링의 점들: 동시에(= 수동 delay 버전과 동일한 위상) */}
          {ring.dots.map((d, j) => (
            <motion.div
              key={j}
              variants={dot}
              className="absolute rounded-full"
              style={{
                width: 12,
                height: 12,
                left: d.x,
                top: d.y,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </motion.li>
      ))}
    </motion.ul>
  );
}
