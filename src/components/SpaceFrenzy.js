import Space from "../images/space/space.jpg";
import aang from "../images/space/characters/aang.png";
import forrest from "../images/space/characters/forrest-gump.png";
import sonic from "../images/space/characters/sonic.png";
import lara from "../images/space/characters/lara-croft.png";
import Level from "./Level";

const characters = [
  { key: "456b914e33be48fcb86c43b7658475d7", name: "Aang", img: aang },
  {
    key: "fd6dd0d474ee406ba227a9099d02573b",
    name: "Forrest Gump",
    img: forrest,
  },
  { key: "831de51b4e5f4796aaa32f8ef533ad8e", name: "Sonic", img: sonic },
  { key: "5eb736d1677845818ffc0fce441c9432", name: "Lara Croft", img: lara },
];

const SpaceFrenzy = (
  <Level
    levelKey={"80b85439fb834d44a978917f1dbefcdd"}
    characters={characters}
    image={Space}
  />
);

export default SpaceFrenzy;
