import React from "react";
import backgroundImage1 from "../../assets/backgroundImage1.jpg";

const BodyBackground = () => {
  return (
    <div className="w-screen h-[92vh] absolute">
      <img
        alt="background"
        className="w-screen h-[92vh]"
        // src={backgroundImage1}
        src="https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </div>
  );
};

export default BodyBackground;
