import Robo from "../images/robo/robo-city.jpg";
import batman from "../images/robo/characters/batman.png";
import jason from "../images/robo/characters/jason.png";
import meg from "../images/robo/characters/meg.png";
import mojo from "../images/robo/characters/mojo.png";
import Level from "./Level";

const characters = [
  { key: "367589e898274b928b6e443e5c63c133", name: "Batman", img: batman },
  { key: "7f9368b0997b488f946a40bc7a41f21e", name: "Jason", img: jason },
  { key: "fdeccabaee4741dcaf9a1640a6426303", name: "Meg", img: meg },
  { key: "faa9678449b14a24a2a22ad5d7bdd24e", name: "Mojo", img: mojo },
];

const RoboCity = (
  <Level
    levelKey={"0afb4c16fdd0467d871d3e0936b84658"}
    characters={characters}
    image={Robo}
  />
);

export default RoboCity;
