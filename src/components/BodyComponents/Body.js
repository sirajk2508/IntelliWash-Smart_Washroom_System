import About from "../About/About";
import Contributors from "../ContributorCard/Contributors";
import BodyDetails from "./BodyDetails";

const Body = () => {
  return (
    <div>
      <BodyDetails/>
      <About/>
      <Contributors/>
    </div>
  );
};

export default Body;
