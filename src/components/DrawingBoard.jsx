import { useRef, useState, useEffect } from "react";

const DrawingBoard = ({ onFirstClick, resetRef }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const popupTimeoutRef = useRef(null);

  
  const pointsRef = useRef([]);
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const resizeCanvas = () => {
      const width = container.offsetWidth;
      const height = Math.min(window.innerHeight * 0.6, width * 0.65);

      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const outsideBoard =
        containerRef.current &&
        !containerRef.current.contains(e.target);

      const clickedReset =
        resetRef?.current &&
        resetRef.current.contains(e.target);

      if (outsideBoard && !clickedReset) {
        triggerPopup();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () =>
      document.removeEventListener("click", handleDocumentClick);
  }, [resetRef]);

  const triggerPopup = () => {
    setShowPopup(true);
    clearTimeout(popupTimeoutRef.current);
    popupTimeoutRef.current = setTimeout(
      () => setShowPopup(false),
      2000
    );
  };

  const getCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  
  const handlePointerDown = (event) => {
    event.stopPropagation();

    onFirstClick && onFirstClick();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(event);

   
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    const points = pointsRef.current;
    points.push({ x, y });

   
    if (points.length > 1) {
      const prev = points[points.length - 2];
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    
    if (points.length === 4) {
      const first = points[0];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(first.x, first.y);
      ctx.stroke();
      pointsRef.current = [];
    }
  };

  return (
    <div ref={containerRef} className="board-wrapper">
      <canvas
        ref={canvasRef}
        className="drawing-board"
        onPointerDown={handlePointerDown}
      />

      {showPopup && (
        <div className="popup">
          Click inside the drawing area
        </div>
      )}
    </div>
  );
};

export default DrawingBoard;
