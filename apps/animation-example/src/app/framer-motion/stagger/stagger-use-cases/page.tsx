'use client'

import StaggeredGridCards from "./StaggeredGridCards";
import StaggeredIntro from "./StaggeredIntro";
import StaggeredList from "./StaggeredList";
import StaggeredShapes from "./StaggeredShapes";

export default function StaggerExamplesGrid() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h3>🪄 아래와 같은 UI에서 <code>stagger</code>를 사용할 수 있습니다:</h3>

      <div
      className="grid grid-rows-2 grid-cols-2 gap-4 mt-4"
      >
          <StaggeredList style={cardStyle} />
          <StaggeredIntro style={cardStyle} />
          <StaggeredGridCards style={cardStyle} />
          <StaggeredShapes style={cardStyle} />
      </div>
    </div>
  );
}

export const cardStyle: React.CSSProperties = {
  background: "#fefefe",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
  fontFamily: "sans-serif",
  width: "100%",
  margin: "0 auto",
};
