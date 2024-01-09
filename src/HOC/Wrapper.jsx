import { motion } from "framer-motion";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        //   variants={}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl  text-white mx-auto px-8 min-h-screen"
      >
        <Component />
      </motion.section>
    );
  };

export default Wrapper;
