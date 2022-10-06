import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RoboCity from "./RoboCity";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robo-city" element={<RoboCity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
