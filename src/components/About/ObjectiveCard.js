const ObjectiveCard = ({ objective, reason, imgUrl }) => {

  return (
    <div className="hover:shadow-2xl cursor-pointer w-[30%] m-2 mx-16 p-4 flex flex-col justify-center items-center">
      <img
        alt="electricity management logo"
        className="w-40 m-2 p-2"
        src={imgUrl}
      />
      <p className="text-lg p-1 font-semibold">{objective}</p>
      <p className="p-1 text-lg mx-2">{reason}</p>
    </div>
  );
};

export default ObjectiveCard;
