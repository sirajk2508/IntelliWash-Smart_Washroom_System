import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { scrollAbout } from "../lib/helper";

const BodyDescription = () => {
  return (
    <div>
      <div className="relative h-[92vh] flex justify-between py-24 text-center text-black">
        <div className="">
          <h1 className="font-extrabold text-8xl text-white mx-10 grid">
            <span className=" text-center py-2 my-2 text-purple-600 text-8xl">
              IntelliWash
            </span>
            <span className="text-4xl text-center py-2 text-purple-500">
              Multi-Sensor Smart Washroom System
            </span>
          </h1>
          <p className="text-2xl mx-44 my-5 font-semibold py-1 text-purple-400">
            Your washroom experience should be effortless. And now it is.
            Redefining Washroom Comfort with Smart, Clean, and Effortless
            Solutions.
          </p>
          <button className="bg-gradient-to-br from-purple-600 to-purple-900 hover:shadow-xl hover-py-3 hover:font-semibold m-2 p-8 py-4 text-white ml-12 text-xl">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute bottom-20 bg-gradient-to-t from-purple-400 left-1/2 rounded-full flex justify-center items-center w-16 h-16">
        <MdOutlineKeyboardDoubleArrowDown
          fontSize={50}
          color="white"
          className="w-10 rounded-full animate-bounce mt-3 cursor-pointer"
          onClick={() => scrollAbout()}
        />
      </div>
    </div>
  );
};

export default BodyDescription;
