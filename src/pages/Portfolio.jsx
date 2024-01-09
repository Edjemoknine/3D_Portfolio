import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import { project } from "../assets/index";
const projects = [
  {
    id: 1,
    title: "Youtube Clone",
    img: project,
    desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo",
    githubLink: "",
    demo: "",
    tech: ["React", "Firebase", "Tailwindcss"],
  },
  {
    id: 2,
    title: "Daily Blogs",
    img: project,
    desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo",
    githubLink: "",
    demo: "",
    tech: ["React", "Firebase", "Tailwindcss"],
  },
  {
    id: 3,
    title: "Cyborg ",
    img: project,
    desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo",
    githubLink: "",
    demo: "",
    tech: ["React", "Firebase", "Tailwindcss"],
  },
];
const Portfolio = () => {
  return (
    <motion.div className="text-white max-w-6xl mx-auto w-full p-6 min-h-screen grid place-content-center ">
      <Heading title={"Work Experiance."} desc={"What I have done so far"} />
      <div className="flex flex-wrap mt-10 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
