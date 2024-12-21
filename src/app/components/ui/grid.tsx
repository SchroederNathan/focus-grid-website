import React from "react";

const Grid = () => {
  const rows = 5;
  const [cols, setCols] = React.useState(24);

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

  // Helper function to get random opacity level
  const getRandomOpacity = () => {
    const levels = [0, 0.3, 0.6, 1];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  return (
    <div
      className="flex flex-col gap-1 items-center justify-center"
      data-grid-container
    >
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {[...Array(cols)].map((_, colIndex) => {
            const opacity = getRandomOpacity();
            return (
              <div
                key={colIndex}
                className={`w-4 h-4 rounded ${
                  opacity === 0 ? "bg-secondaryContainer" : "bg-primary"
                }`}
                style={{
                  opacity: opacity || 1, // Use 1 when opacity is 0 to show full secondary-container color
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
