import {
  obj_electricity,
  reason_electricity,
  obj_water,
  reason_water,
  obj_flush,
  reason_flush,
  obj_monitoring,
  reason_monitoring,
} from "../lib/constants";

import { FcElectricity } from "react-icons/fc";
import { FaHandHoldingWater, FaToilet } from "react-icons/fa";

import ObjectiveCard from "./ObjectiveCard";
import { MdVisibility } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-gray-100 h-screen ">
      <p className="font-bold text-center text-3xl m-2 p-2 pt-10">
        Objectives
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
        <div className="shadow-lg hover:shadow-2xl cursor-pointer w-[32%] m-4 mx-12 p-2 flex flex-col justify-center items-center">
          <FcElectricity fontSize={75} color="black" className=" m-4 p-2" />
          <p className="text-lg p-1 font-semibold">{obj_electricity}</p>
          <p className="p-1 text-lg mx-2">{reason_electricity}</p>
        </div>

        <ObjectiveCard
          objective={obj_water}
          reason={reason_water}
          icon={
            <FaHandHoldingWater
              fontSize={75}
              color="#00B5E2"
              className=" m-4 p-2"
            />
          }
        />
        <ObjectiveCard
          objective={obj_flush}
          reason={reason_flush}
          icon={<FaToilet fontSize={75} color="#00B5E2" className=" m-4 p-2" />}
        />
        <ObjectiveCard
          objective={obj_monitoring}
          reason={reason_monitoring}
          icon={
            <MdVisibility fontSize={75} color="#00B5E2" className="p-2" />
          }
        />
      </div>
    </div>
  );
};

export default About;
