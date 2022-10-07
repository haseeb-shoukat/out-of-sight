import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Level = ({ characters, image }) => {
  const [menu, showMenu] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [imageCoords, setImageCoords] = useState([0, 0]);
  const [found, updateFound] = useState([]);

  const registerClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const [x, y] = [e.clientX - rect.left + 16, e.clientY - rect.top + 16];
    if (!menu) showMenu(true);
    setCoords([x, y]);
    setImageCoords([(x / e.target.width) * 100, (y / e.target.height) * 100]);
  };

  const registerGuess = async (e, key) => {
    e.stopPropagation();
    showMenu(false);
    const docSnap = await getDoc(doc(db, "characters", key));

    if (docSnap.exists()) {
      const data = docSnap.data();
      const [x, y] = imageCoords;

      if (
        x >= data.startX &&
        x <= data.endX &&
        y >= data.startY &&
        y <= data.endY
      ) {
        toast.success("Found! You are doing great");
        updateFound((x) => [...x, key]);
      } else {
        toast.error("Wrong! Keep looking");
      }
    } else {
      // doc.data() will be undefined in this case
      toast.error("Document not found! Please refresh the page.");
    }
  };

  return (
    <div>
      <ToastContainer
        limit={2}
        position="top-center"
        autoClose={1500}
        theme="dark"
        newestOnTop
      />
      <div className="nav-bar">
        <a href="/">
          <div className="nav-name">Out Of Sight</div>
        </a>
        <div className="characters">
          {characters.map((character) => {
            let c = "character";
            if (found.includes(character.key)) c = "character found";
            return (
              <div key={character.key} className={c}>
                <img className="character-img" src={character.img} />
                <div className="character-name">{character.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-container">
        <img
          className="main-image"
          width="100%"
          src={image}
          onClick={registerClick}
        />
        {menu ? (
          <div
            className="menu"
            style={{
              position: "absolute",
              top: `${coords[1] + 16}px`,
              left: `${coords[0] + 16}px`,
            }}
          >
            {characters.map((character) =>
              found.includes(character.key) ? null : (
                <div
                  key={character.key}
                  className="menu-item"
                  onClick={(e) => registerGuess(e, character.key)}
                >
                  {character.name}
                </div>
              )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Level;
