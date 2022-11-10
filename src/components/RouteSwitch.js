import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RoboCity from "./RoboCity";
import PostApocalypse from "./PostApocalypse";
import UndergroundBase from "./UndergroundBase";
import SpaceFrenzy from "./SpaceFrenzy";

const RouteSwitch = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robo-city" element={RoboCity} />
        <Route path="/post-apocalypse" element={PostApocalypse} />
        <Route path="/underground-base" element={UndergroundBase} />
        <Route path="/space-frenzy" element={SpaceFrenzy} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
