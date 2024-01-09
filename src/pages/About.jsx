import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Heading from "../components/Heading";

const About = () => {
  return (
    <motion.div className="max-w-5xl min-h-screen grid place-content-center py-10 text-white  mx-auto px-3">
      <div className="grid md:grid-cols-2 justify-items-center overflow-hidden items-start gap-10">
        <Tilt className=" duration-300 p-6 ">
          <div className="border-8 w-80 bg-red-100 cursor-pointer shadow shadow-pink-600  border-slate-300 rounded-2xl">
            <motion.img
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -80, opacity: 0 }}
              src="mok.jpg"
              alt="profile"
              className="object-cover rounded-lg w-full h-full "
            />
          </div>
        </Tilt>
        <div>
          <Heading title={"About Me"} desc={"Who Am I ?"} />
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -80, opacity: 0 }}
            className="leading-8 mt-3 text-slate-400"
          >
            I'm a skilled software developer with experiance in TypeScript and
            JavaScript and expertise in frameworks like React, Next.js and
            Three.js. I'm a quick learner and collaborate closely with clients
            to create efficient , scalable and flexible solutions that solve
            real-world problems. Let's work together and bring your idea to
            life!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
