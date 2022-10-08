const Overlay = ({ score }) => {
  return (
    <div className="overlay">
      <div className="overlay-card">
        <div className="overlay-heading">
          Congratulations On Clearing This Level!
        </div>
        <div className="overlay-text">Your Score: {score}</div>
        <button
          onClick={() => {
            window.location.reload();
            return false;
          }}
        >
          Replay
        </button>
        <a href="/">
          <button>Other Levels</button>
        </a>
      </div>
    </div>
  );
};

export default Overlay;
