import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase";

const Level = ({ characters, image }) => {
  const [menu, showMenu] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [imageCoords, setImageCoords] = useState([0, 0]);

  const registerClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const [x, y] = [e.clientX - rect.left + 16, e.clientY - rect.top + 16];
    if (!menu) showMenu(true);
    setCoords([x, y]);
    setImageCoords([(x / e.target.width) * 100, (y / e.target.height) * 100]);
  };

  const registerGuess = async (e, key) => {
    e.stopPropagation();
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
        alert("Found");
      } else {
        alert("Not Found");
      }
    } else {
      // doc.data() will be undefined in this case
      alert("Document not found! Please refresh the page.");
    }
  };

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-name">Out Of Sight</div>
        <div className="characters">
          {characters.map((character) => {
            return (
              <div key={character.key} className="character">
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
            {characters.map((character) => (
              <div
                key={character.key}
                className="menu-item"
                onClick={(e) => registerGuess(e, character.key)}
              >
                {character.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Level;
