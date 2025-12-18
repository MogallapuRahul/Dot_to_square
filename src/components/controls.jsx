const Controls = ({ onReset }) => {
  const handleResetClick = (e) => {
    e.stopPropagation(); // 🔥 KEY FIX
    onReset();
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default Controls;
