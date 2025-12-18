import { useState, useRef } from "react";
import DrawingBoard from "./components/DrawingBoard";
import Controls from "./components/controls";
import "./styles/DrawingBoard.css";

function App() {
  const [showReset, setShowReset] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const resetRef = useRef(null); // ✅ NEW

  const handleFirstClick = () => {
    setShowReset(true);
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1); // re-mount canvas
    setShowReset(false);
  };

  return (
    <div className="app-container">
      <h2>Place dots to connect</h2>

      <DrawingBoard
        key={resetKey}
        onFirstClick={handleFirstClick}
        resetRef={resetRef}   // ✅ PASS REF
      />

      {showReset && (
        <div ref={resetRef}>  {/* ✅ WRAP RESET */}
          <Controls onReset={handleReset} />
        </div>
      )}
    </div>
  );
}

export default App;
