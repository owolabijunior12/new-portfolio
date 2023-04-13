import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import person from '../assets/person-1.png'

const About = () => {
  return (
    <section id="About" className="pt-28 pb-16">     
      <motion.div
        className="md:w-1/3 pb-10 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-2 text-red">
         ABOUT
        </p>
        <LineGradient width="mx-auto w-2/5" />
        
        <p className="mt-10">
        I'm Owolabi Destiny Oluwanifemi from Lagos state, Nigeria. Im a self-taught frontend developer and a forward thinking,and an excellence-driven individual with great organisational and interpersonal skills, offering more than a year experience building and intragrating,scaling and supporting web applications.
          
        </p>
      </motion.div>            
      <motion.div
        className="md:w-1/3 pb-10 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-2 text-red">
        EDUCATION
        </p>
        <LineGradient width="mx-auto w-2/5" />
        
        <p className="my-10 flex">
              <img src={person} alt=""  className="mb-10 "/>
            <p className=" ml-5">
               <p>YABA COLLEGE OF TECHNOLOGY</p>
              <p> Computer Science</p>
              <p>2021 - 2023</p>
            </p>
            
        </p>
      </motion.div>            

    </section>
  );
};

export default About;
