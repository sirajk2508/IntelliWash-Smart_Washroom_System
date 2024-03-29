import { BACKGROUND_IMAGE_URL } from "../lib/constants";

const BodyBackground = () => {
  return (
    <div className="w-screen h-[92vh] absolute">
      <img
        alt="background"
        className="w-screen h-[92vh]"
        src={BACKGROUND_IMAGE_URL}
      />
    </div>
  );
};

export default BodyBackground;
