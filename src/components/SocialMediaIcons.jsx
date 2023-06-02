import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter,AiFillGithub,AiFillFacebook  } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition text-blue-800 font-bold text-4xl  duration-500"
        href="https://linkedin.com/in/owolabi-destiny-oluwanifemi-231222265"
        target="_blank"
        rel="noreferrer"
      >        
        <AiFillLinkedin/>
      </a>
      <a
        className="hover:opacity-50 text-blue-500 font-bold text-4xl transition duration-500"
        href="https://twitter.com/iboytech123"
        target="_blank"
        rel="noreferrer"
      >        
        <AiOutlineTwitter/>
      </a>
      <a
        className="hover:opacity-50 text-blue-500 font-bold text-4xl  transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >        
        <AiFillFacebook/>
      </a>
      <a
        className="hover:opacity-50 text-gray-400 font-bold text-4xl  transition duration-500"
        href="https://github.com/owolabijunior12" 
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub/>      
      </a>
    </div>
  );
};

export default SocialMediaIcons;
