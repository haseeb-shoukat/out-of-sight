import Post from "../images/post/post-apocalypse.jpg";
import tom from "../images/post/characters/tom.png";
import ash from "../images/post/characters/ash.png";
import spiderman from "../images/post/characters/spiderman.png";
import patrick from "../images/post/characters/patrick.png";
import Level from "./Level";

const characters = [
  { key: "df1f8b2ccac944ada02cd1d8911b4cb9", name: "Tom", img: tom },
  { key: "d11daff360ac478bab629fa93e227386", name: "Ash", img: ash },
  {
    key: "dbcbec64d4e143ac8974a7b9a2994204",
    name: "Spider-Man",
    img: spiderman,
  },
  { key: "e1344323aa594563b132fd7bbd126cef", name: "Patrick", img: patrick },
];

const PostApocalypse = <Level characters={characters} image={Post} />;

export default PostApocalypse;
