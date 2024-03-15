import posterboy from "../../assets/posterboy-removebg-preview.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { scrollAbout } from "../lib/helper";

const BodyDescription = () => {
  return (
    <div>
      <div className="relative h-[92vh] bg-black bg-opacity-45 py-10 flex justify-between items-center">
        <div className="mx-10 my-10">
          <h1 className="font-extrabold text-8xl text-white mx-10 py-6 grid shadow-custom">
            <span className="bg-gradient-to-r from-white text-center py-2 my-2 to-purple-300 text-transparent bg-clip-text text-8xl">
              IntelliWash
            </span>
            <span className="text-4xl text-center py-2">
              Multi-Sensor Smart Washroom System
            </span>
          </h1>
          <p className="text-2xl mx-44 text-white font-semibold py-1 ">
            Your washroom experience should be effortless. And now it is.
            Redefining Washroom Comfort with Smart, Clean, and Effortless
            Solutions.
          </p>
          <button className="bg-gray-950 hover:shadow-xl hover-py-3 hover:font-semibold m-2 p-8 py-4 text-white mx-44 text-xl">
            Get Started
          </button>
        </div>
        <div className="m-4 my-24 p-4 w-1/2 h-screen">
          <img className="my-24" src={posterboy} alt="poster boy" />
        </div>
      </div>
      <div className="absolute bottom-20 bg-gradient-to-t from-purple-400 left-1/2 rounded-full flex justify-center items-center w-16 h-16">
  
        <MdOutlineKeyboardDoubleArrowDown fontSize={50} color="white" className="w-10 rounded-full animate-bounce mt-3 cursor-pointer" onClick={() => scrollAbout()}/>
      </div>
    </div>
  );
};

export default BodyDescription;
