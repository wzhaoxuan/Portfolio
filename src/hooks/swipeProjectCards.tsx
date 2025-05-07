import { useRef, useState } from "react";

const useSwipeNavigation = (length: number) => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(length / 2));
  const startX = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX.current === null) return;
    const deltaX = e.clientX - startX.current;

    if (deltaX > 50 && centerIndex > 0) {
      setCenterIndex((prev) => prev - 1);
    } else if (deltaX < -50 && centerIndex < length - 1) {
      setCenterIndex((prev) => prev + 1);
    }

    startX.current = null;
  };

  return { centerIndex, handleMouseDown, handleMouseUp };
};

export default useSwipeNavigation;