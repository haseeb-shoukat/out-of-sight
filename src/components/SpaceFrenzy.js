import Space from "../images/space/space.jpg";
import aang from "../images/space/characters/aang.png";
import forrest from "../images/space/characters/forrest-gump.png";
import sonic from "../images/space/characters/sonic.png";
import lara from "../images/space/characters/lara-croft.png";
import Level from "./Level";
import { v4 as uuidv4 } from "uuid";

const characters = [
  { key: uuidv4(), name: "Aang", img: aang },
  { key: uuidv4(), name: "Forrest Gump", img: forrest },
  { key: uuidv4(), name: "Sonic", img: sonic },
  { key: uuidv4(), name: "Lara Croft", img: lara },
];

const SpaceFrenzy = <Level characters={characters} image={Space} />;

export default SpaceFrenzy;
