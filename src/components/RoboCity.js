import Robo from "../images/robo/robo-city.jpg";
import batman from "../images/robo/characters/batman.png";
import jason from "../images/robo/characters/jason.png";
import meg from "../images/robo/characters/meg.png";
import mojo from "../images/robo/characters/mojo.png";
import Level from "./Level";
import { v4 as uuidv4 } from "uuid";

const characters = [
  { key: uuidv4(), name: "Batman", img: batman },
  { key: uuidv4(), name: "Jason", img: jason },
  { key: uuidv4(), name: "Meg", img: meg },
  { key: uuidv4(), name: "Mojo", img: mojo },
];

const RoboCity = <Level characters={characters} image={Robo} />;

export default RoboCity;
