import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com/in/owolabi-destiny-oluwanifemi-231222265"
        target="_blank"
        rel="noreferrer"
      >        
        <AiFillLinkedin/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/iboytech123"
        target="_blank"
        rel="noreferrer"
      >        
        <AiOutlineTwitter/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >        
        <FaFacebookSquare/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/owolabijunior12" 
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare/>      
      </a>
    </div>
  );
};

export default SocialMediaIcons;
