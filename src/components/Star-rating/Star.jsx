import { useState } from "react";
export default function Star({ maxStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <h1>Star Rating component</h1>
      <div style={{ gap: "10px" }}>
        {[...Array(maxStars)].map((_, index) => {
          const value = index + 1;
          return (
            <span
              style={{
                cursor: "pointer",
                color: value <= (hover || rating) ? "#FFD700" : "#D3D3D3",
              }}
              onClick={() => {
                setRating(value);
              }}
              onMouseEnter={() => {
                setHover(value);
              }}
              onMouseLeave={() => {
                setHover(0);
              }}
            >
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
}
