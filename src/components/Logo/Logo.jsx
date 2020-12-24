import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt shadow-2 br2"
        options={{ max: 65 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            style={{ paddingTop: "13px" }}
            src={brain}
            alt="Jay"
            height="90"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
