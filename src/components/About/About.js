import {
  ELECTRICITY_MANAGEMENT_IMG_URL,
  obj_electricity,
  reason_electricity,
} from "../../constants";

import ObjectiveCard from "./ObjectiveCard";

const About = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <p className="font-bold text-center text-3xl m-2 p-2 pt-10">
        About Project
      </p>
      <p className="m-2 p-2 font-normal text-xl text-center">
        <span style={{ fontStyle: "italic" }}>IntelliWash</span> is an
        innovative project focused on improving washroom functionality, hygiene,
        and sustainability. Through advanced sensor integration, we aim to
        optimize electricity usage, reduce water wastage, and maintain
        cleanliness standards, contributing to better health and environmental
        outcomes.
      </p>

      <div className="flex flex-wrap justify-center">
        <div className="shadow-2xl cursor-pointer w-[30%] m-2 mx-16 p-4 flex flex-col justify-center items-center">
          <img
            alt="electricity management logo"
            className="w-40 m-2 p-2"
            src={ELECTRICITY_MANAGEMENT_IMG_URL}
          />
          <p className="text-lg p-1 font-semibold">{obj_electricity}</p>
          <p className="p-1 text-lg mx-2">{reason_electricity}</p>
        </div>

        <ObjectiveCard
          objective={obj_electricity}
          reason={reason_electricity}
          imgUrl={ELECTRICITY_MANAGEMENT_IMG_URL}
        />

        <ObjectiveCard
          objective={obj_electricity}
          reason={reason_electricity}
          imgUrl={ELECTRICITY_MANAGEMENT_IMG_URL}
        />

        <ObjectiveCard
          objective={obj_electricity}
          reason={reason_electricity}
          imgUrl={ELECTRICITY_MANAGEMENT_IMG_URL}
        />
      </div>
    </div>
  );
};

export default About;
