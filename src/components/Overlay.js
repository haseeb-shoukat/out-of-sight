import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "./firebase";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Overlay = ({ score, levelKey }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [input, setInput] = useState("");
  const [addedHS, setAddedHS] = useState(false);

  const scoreInSeconds = score.h * 60 * 60 + score.m * 60 + score.s;

  const toHMS = (s) => new Date(s * 1000).toISOString().substring(11, 19);

  const cmpFunc = (a, b) => {
    return a.score < b.score ? -1 : a.score > b.score ? 1 : 0;
  };

  const highScore = (score) => {
    if (leaderboard.length < 10) return true;

    return score > leaderboard[leaderboard.length - 1] ? true : false;
  };

  const add = (arr, obj) => {
    if (!highScore(obj.score)) return false;
    if (arr.length > 9) arr.pop();
    arr.push(obj);
    arr.sort(cmpFunc);
    return arr;
  };

  useEffect(() => {
    const getScores = async () => {
      const docSnap = await getDoc(doc(db, "leaderboards", levelKey));
      if (docSnap.exists()) {
        const arr = JSON.parse(docSnap.data().scores);
        arr.sort(cmpFunc);
        setLeaderboard(arr);
      }
    };
    getScores();
  }, [levelKey]);

  const saveScore = async () => {
    if (input.length > 15) {
      toast.error("Name length exceeds limit");
      return;
    }

    const copyLeaderboard = [...leaderboard];

    if (!add(copyLeaderboard, { name: input, score: scoreInSeconds })) {
      toast.error("Unable to add score. Please refresh");
      return;
    }

    await updateDoc(doc(db, "leaderboards", levelKey), {
      scores: JSON.stringify(copyLeaderboard),
    });

    setLeaderboard(copyLeaderboard);
    setAddedHS(true);
  };

  return (
    <div className="overlay">
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={1500}
        theme="dark"
        newestOnTop
      />
      <div className="overlay-card">
        <div className="leaderboard">
          <div className="leaderboard-heading">Leaderboard</div>
          {leaderboard.length < 1 ? (
            <div className="leaderboard-text">
              No scores. Be the first to add a score.
            </div>
          ) : null}
          {leaderboard.map((score, index) => {
            return (
              <div key={index} className="user-score">
                {index + 1}). {score.name} {toHMS(score.score)}
              </div>
            );
          })}
        </div>
        <div className="my-score">
          <div className="my-score-heading">Game Over!</div>
          <div className="my-score-text">
            Your Score: {toHMS(scoreInSeconds)}
          </div>
          {highScore(scoreInSeconds) && !addedHS ? (
            <div className="high-score">
              <div className="high-score-text">
                Congrats! You are eligible to enter the leaderboard.
              </div>
              <label>
                Your name:
                <input
                  type="text"
                  maxLength="15"
                  value={input}
                  onInput={(e) => setInput(e.target.value)}
                ></input>
                <button className="over-btn high-score-btn" onClick={saveScore}>
                  Enter
                </button>
              </label>
            </div>
          ) : null}
          <div className="over-buttons">
            <button
              className="over-btn"
              onClick={() => {
                window.location.reload();
                return false;
              }}
            >
              Replay
            </button>
            <a href="/">
              <button className="over-btn">Other Levels</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
