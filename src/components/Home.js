import post from "../images/post-apocalypse.jpg";
import robo from "../images/robo-city.jpg";
import space from "../images/space.jpg";
import underground from "../images/underground-base.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="main-heading">Out Of Sight</div>
      <div className="wave">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none">
          <path
            d="M-70.02,-25.05 C168.68,72.62 271.49,-49.98 542.84,29.20 L500.00,0.00 L-40.11,-71.44 Z"
            style={({ stroke: "none" }, { fill: "white" })}
          ></path>
        </svg>
      </div>
      <div className="levels">
        <div className="level-card">
          <img src={post} />
        </div>
        <div className="level-card">
          <img src={robo} />
        </div>
        <div className="level-card">
          <img src={space} />
        </div>
        <div className="level-card">
          <img src={underground} />
        </div>
      </div>
    </div>
  );
};

export default Home;
