import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const ProjectCard = ({ project, index }) => {
  return (
    <Tilt className="duration-300">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 * index }}
        viewport={{ once: true, amount: 0.5 }}
        className="p-3 rounded-xl sm:w-[300px] shadow bg-gradient-to-tr from-blue-950 to-teal-900 "
      >
        <div className="h-60 w-full overflow-hidden">
          <img
            src={project.img}
            alt="project"
            className="w-full h-full object-cover bg-gradient-to-r from-sky-950 to-purple-950 rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-xs">{project.desc}</p>
          <div className="flex justify-center gap-3 items-center">
            <button className="bg-blue-900 px-3 py-1 rounded-lg hover:bg-blue-700 text-xs">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </button>
            <button className="bg-blue-900 px-3 py-1 rounded-lg hover:bg-blue-700 text-xs">
              {" "}
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </button>
          </div>
          <div className="flex justify-center gap-3 items-center">
            {project.tech.map((t) => (
              <span
                className="px-4 py-1 text-xs rounded-lg  hover:text-pink-700"
                key={t}
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
