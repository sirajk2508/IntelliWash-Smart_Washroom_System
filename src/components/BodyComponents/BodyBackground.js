import React from "react";
import backgroundImage1 from "../../assets/backgroundImage1.jpg";

const BodyBackground = () => {
  return (
    <div className="w-screen h-[92vh] absolute">
      <img
        alt="background"
        className="w-screen h-[92vh]"
        src={backgroundImage1}
      />
    </div>
  );
};

export default BodyBackground;
