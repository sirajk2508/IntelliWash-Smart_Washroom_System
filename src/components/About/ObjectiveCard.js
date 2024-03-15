const ObjectiveCard = ({ objective, reason, icon }) => {

  return (
    <div className="hover:shadow-2xl cursor-pointer w-[32%] m-4 mx-12 p-2 flex flex-col justify-center items-center">
      {icon}
      <p className="text-lg p-1 font-semibold">{objective}</p>
      <p className="p-1 text-lg mx-2">{reason}</p>
    </div>
  );
};

export default ObjectiveCard;
