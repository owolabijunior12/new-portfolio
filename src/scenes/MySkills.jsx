import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
import {FaReact,FaHtml5,FaCss3} from 'react-icons/fa'

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className=" gap-2 my-10 flex justify-between ">
            <a href="https://react.dev/"><FaHtml5 className="m10x- text-6xl text-red-600"/> <p>HTML</p></a>
            <a href="https://react.dev/"><FaCss3 className="text-6xl text-blue-600"/><p>CSS</p></a>
            <a href="https://react.dev/"><SiJavascript className="text-6xl text-yellow-300"/><p>Javasricpt</p></a>
            <a href="https://react.dev/"><FaReact className="text-6xl text-purple-900 font-semibold"/> React.js</a>
            <a href="https://react.dev/"><SiTailwindcss className="text-6xl text-green-400 font-semibold"/><p>Tailwind Css</p></a>
          </p>  
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 w-90 h-80"
                src="assets/contact-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
                I have been learning web development from more than a year building project that involves me learn how to call API and i had some knowledge of Node.js and mongodb 
                which made me built a mern-stack music application using Mongodb,express.js,react.js and node.js.
          </p>
        </motion.div>
      
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
          </p>
        </motion.div> */}
        {/* IMAGINATIVE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">          
Front-end development involves creating the graphical user interface of an app or website. The main goal is that any user should be able to view and interact seamlessly with the GUI. All visual elements on an app or website such as animations, buttons, menus, and others are built by a front-end programmer
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MySkills;
