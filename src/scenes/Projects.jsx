import { AiFillGithub, } from "react-icons/ai";
import{BsSend } from 'react-icons/bs';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative ">     
      <div className="absolute h-full  opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col w-full l text-center p-16 text-deep-blue">
        <p className="text-4xl   font-bold bg-black w-full h-full text-white flex justify-evenly  items-center">
            <AiFillGithub/>
            <BsSend/>
        </p>
        <p className="mt-7">   
        </p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />   

    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto  gap-5 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            PROJECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">                 
        </p>
      </motion.div>

     
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}          
        >
       
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />         
          <Project title="Project 2" />
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />        
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
