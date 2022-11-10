import post from "../images/post/post-apocalypse.jpg";
import robo from "../images/robo/robo-city.jpg";
import space from "../images/space/space.jpg";
import underground from "../images/underground/underground-base.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="main-heading">Out Of Sight</div>
      <div className="wave">
        <div className="secondary-heading">Choose your Battlegrounds</div>
        <svg viewBox="0 0 500 100" preserveAspectRatio="none">
          <path
            d="M-70.02,-25.05 C168.68,72.62 271.49,-49.98 542.84,29.20 L500.00,0.00 L-40.11,-71.44 Z"
            style={({ stroke: "none" }, { fill: "white" })}
          ></path>
        </svg>
      </div>
      <div className="levels">
        <Link to="/robo-city">
          <div className="level-card">
            <img src={robo} className="level-img" />
            <div className="level-name">Robo City</div>
          </div>
        </Link>
        <Link to="/post-apocalypse">
          <div className="level-card">
            <img src={post} className="level-img" />
            <div className="level-name">Post Apocalypse</div>
          </div>
        </Link>
        <Link to="/underground-base">
          <div className="level-card">
            <img src={underground} className="level-img" />
            <div className="level-name">Underground Base</div>
          </div>
        </Link>
        <Link to="/space-frenzy">
          <div className="level-card">
            <img src={space} className="level-img" />
            <div className="level-name">Space Frenzy</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
