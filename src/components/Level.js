const Level = ({ characters, image }) => {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-name">Out Of Sight</div>
        <div className="characters">
          {characters.map((character) => {
            console.log(character);
            return (
              <div key={character.key} className="character">
                <img className="character-img" src={character.img} />
                <div className="character-name">{character.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <img width="100%" src={image} />
    </div>
  );
};

export default Level;
