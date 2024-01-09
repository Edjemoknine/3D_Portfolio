// import { Wrapper } from "../HOC/Wrapper";
// import { Tilt } from "react-tilt";
import { skills } from "../assets/index";
import Heading from "../components/Heading";
import BallCanvas from "../components/Ball";
const Skills = () => {
  return (
    <div className="max-w-6xl grid place-content-center  text-white mx-auto px-8 min-h-screen">
      <div>
        <Heading title={"My Skills"} desc={"What I Know"} />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center mt-6 md:mt-16 gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="h-40 md:h-48 g-red-300">
              <BallCanvas icon={skill.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
