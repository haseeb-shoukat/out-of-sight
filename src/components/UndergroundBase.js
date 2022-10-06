import Underground from "../images/underground/underground-base.jpg";
import cj from "../images/underground/characters/cj.png";
import courage from "../images/underground/characters/courage.png";
import hellboy from "../images/underground/characters/hellboy.png";
import saitama from "../images/underground/characters/saitama.png";
import Level from "./Level";
import { v4 as uuidv4 } from "uuid";

const characters = [
  { key: uuidv4(), name: "CJ", img: cj },
  { key: uuidv4(), name: "Courage", img: courage },
  { key: uuidv4(), name: "Hellboy", img: hellboy },
  { key: uuidv4(), name: "Saitama", img: saitama },
];

const UndergroundBase = <Level characters={characters} image={Underground} />;

export default UndergroundBase;
