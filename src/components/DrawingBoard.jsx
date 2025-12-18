import { useRef, useState, useEffect } from "react";

const DrawingBoard = ({ onFirstClick, resetRef }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const popupTimeoutRef = useRef(null);

  const [currentSquare, setCurrentSquare] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    canvas.width = container.offsetWidth;
    canvas.height = 400;
  }, []);

  /* ===============================
     POPUP: CLICK OUTSIDE BOX
     (EXCEPT RESET)
  =============================== */
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const clickedOutsideBoard =
        containerRef.current &&
        !containerRef.current.contains(e.target);

      const clickedReset =
        resetRef?.current &&
        resetRef.current.contains(e.target);

      if (clickedOutsideBoard && !clickedReset) {
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

    popupTimeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const getCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();

    if (event.touches) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top
      };
    }

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  /* ===============================
     DRAWING LOGIC
  =============================== */
  const handleInteraction = (event) => {
    event.stopPropagation(); // 🚫 prevent popup

    onFirstClick && onFirstClick();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(event);

    // draw dot
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    const newSquare = [...currentSquare, { x, y }];

    if (newSquare.length > 1) {
      const prev = newSquare[newSquare.length - 2];
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    if (newSquare.length === 4) {
      const first = newSquare[0];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(first.x, first.y);
      ctx.stroke();
      setCurrentSquare([]);
    } else {
      setCurrentSquare(newSquare);
    }
  };

  return (
    <div
      ref={containerRef}
      className="board-wrapper"
    >
      <canvas
        ref={canvasRef}
        className="drawing-board"
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
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
