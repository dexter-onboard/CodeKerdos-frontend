import React from "react";

import { cn } from "../../utils/cn"; // Make sure to replace this with the actual path or implementation

function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 1.24,
  numCircles = 10,
  className,
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-gray/5 [mask-image:linear-gradient(to_bottom,black,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:${i}]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        );
      })}
    </div>
  );
}

Ripple.displayName = "Ripple";

export default Ripple;
