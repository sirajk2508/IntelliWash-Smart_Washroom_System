import { CONTRIBUTOR_IMAGE_URL } from "../lib/constants";

const Card = () => {
  return (
    <div className="w-64 bg-white text-center p-8 rounded-sm">
      <div className="flex items-center justify-center">
        <img
          src={CONTRIBUTOR_IMAGE_URL}
          alt="contributor image"
          className="w-24 rounded-full m-4 "
        />
      </div>

      <h4 className="font-bold text-xl my-1">Name</h4>
      <p className="font-semibold text-gray-500">Role</p>
      <button className="border border-blue-600 my-3 w-36 h-10 rounded-md text-gray-500 font-bold hover:bg-blue-500 hover:text-white">Connect</button>
    </div>
  );
};

export default Card;
