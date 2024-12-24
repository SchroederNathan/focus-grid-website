"use client";
import React from "react";

const Grid = () => {
  const rows = 5;
  const [cols, setCols] = React.useState(24);
  // Add state for opacity values
  const [opacityValues, setOpacityValues] = React.useState<number[][]>([]);

  // Helper function to get random opacity level
  const getRandomOpacity = () => {
    const levels = [0, 0.3, 0.6, 1];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  // Initialize opacity values on client side
  React.useEffect(() => {
    const newOpacityValues = Array(rows)
      .fill(0)
      .map(() =>
        Array(cols)
          .fill(0)
          .map(() => getRandomOpacity())
      );
    setOpacityValues(newOpacityValues);
  }, [rows, cols]);

  // Add resize observer to update columns
  React.useEffect(() => {
    const updateCols = (containerWidth: number) => {
      // Assuming each cell is 16px (w-4) + 4px gap
      const cellWidth = 20;
      const newCols = Math.floor(containerWidth / cellWidth);
      setCols(Math.max(1, Math.min(newCols, 24))); // Limit between 1 and 24 columns
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateCols(entry.contentRect.width);
      }
    });

    // Find the container element and observe it
    const container = document.querySelector("[data-grid-container]");
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col gap-1 items-center justify-center"
      data-grid-container
    >
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {[...Array(cols)].map((_, colIndex) => {
            const opacity = opacityValues[rowIndex]?.[colIndex] ?? 0;
            return (
              <div
                key={colIndex}
                className={`w-4 h-4 rounded ${
                  opacity === 0 ? "bg-secondaryContainer" : "bg-primary"
                }`}
                style={{
                  opacity: opacity || 1,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
