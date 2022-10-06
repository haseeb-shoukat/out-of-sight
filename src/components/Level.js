import { useState } from "react";

const Level = ({ characters, image }) => {
  const [menu, showMenu] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  const registerClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    showMenu(true);
    setCoords([e.clientX - rect.left, e.clientY - rect.top]);
  };

  const registerGuess = (e, key) => {
    e.stopPropagation();
    console.log(key);
    console.log(coords);
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
      <div className="main-container" onClick={registerClick}>
        <img className="main-image" width="100%" src={image} />
        {menu ? (
          <div
            className="menu"
            style={{
              position: "absolute",
              top: `${coords[1] + 32}px`,
              left: `${coords[0] + 32}px`,
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
