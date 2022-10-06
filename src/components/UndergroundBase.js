import Underground from "../images/underground/underground-base.jpg";
import cj from "../images/underground/characters/cj.png";
import courage from "../images/underground/characters/courage.png";
import hellboy from "../images/underground/characters/hellboy.png";
import saitama from "../images/underground/characters/saitama.png";
import Level from "./Level";

const characters = [
  { key: "be121941099349a68eec179cb3f2dc6c", name: "CJ", img: cj },
  { key: "b022389a950b4926b482c62315631cf6", name: "Courage", img: courage },
  { key: "2884a4e496f645a6ac5464ee645a212b", name: "Hellboy", img: hellboy },
  { key: "78672bfb22ba4cac99a949ff88a508e4", name: "Saitama", img: saitama },
];

const UndergroundBase = <Level characters={characters} image={Underground} />;

export default UndergroundBase;
