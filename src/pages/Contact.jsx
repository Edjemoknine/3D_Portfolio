import { motion } from "framer-motion";
import Heading from "../components/Heading";
import { useRef, useState } from "react";
import EarthCanvas from "../components/EarthCanvas";
import StarsCanvas from "../components/StarsCanvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-6xl  mx-auto p-4 min-h-screen flex justify-center items-center w-full text-white ">
      <div className="flex w-full  flex-col-reverse md:flex-row gap-10">
        <motion.div className="bg-gradient-to-tr from-blue-950 to-teal-900 p-8 flex-1 rounded-2xl">
          <Heading title={"Contact"} desc={"GET IN TOUCH"} />

          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="mt-6 w-full flex flex-col gap-3"
          >
            <label className="flex flex-col">
              <span className="font-medium mb-2"> Your Name texw</span>
              <input
                type="text"
                placeholder="What your name?"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-2 outline-none border-none rounded-lg text-white placeholder:text-gray-400 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2"> Your Name texw</span>
              <input
                type="text"
                placeholder="example@example.com"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-2 outline-none border-none rounded-lg text-white placeholder:text-gray-400 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2"> Your Name texw</span>
              <textarea
                rows={4}
                type="text"
                placeholder="What you have in mind?"
                value={form.message}
                onChange={handleChange}
                className="px-4 py-2 outline-none border-none rounded-lg text-white placeholder:text-gray-400 font-medium"
              />
            </label>
            <button className="px-4 py-2 bg-pink-500 rounded-lg text-white font-bold">
              Send
            </button>
          </form>
        </motion.div>
        <motion.div className=" flex-1 h-[350px] xl:h-auto md:h-[550px] ">
          <EarthCanvas />
          {/* <StarsCanvas /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
