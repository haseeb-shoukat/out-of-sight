import Post from "../images/post/post-apocalypse.jpg";
import tom from "../images/post/characters/tom.png";
import ash from "../images/post/characters/ash.png";
import spiderman from "../images/post/characters/spiderman.png";
import patrick from "../images/post/characters/patrick.png";
import Level from "./Level";
import { v4 as uuidv4 } from "uuid";

const characters = [
  { key: uuidv4(), name: "Tom", img: tom },
  { key: uuidv4(), name: "Ash", img: ash },
  { key: uuidv4(), name: "Spider-Man", img: spiderman },
  { key: uuidv4(), name: "Patrick", img: patrick },
];

const PostApocalypse = <Level characters={characters} image={Post} />;

export default PostApocalypse;
