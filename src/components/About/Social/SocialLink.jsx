import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const SocialLink = () => {
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  z-30">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] my-0"><Link to="https://www.linkedin.com/in/abrar-saleheen-6a9416177/" target="_blank" className="flex justify-between items-center w-full bg-gray-500 py-2 px-4" ><>LinkedIn <FaLinkedin size={30}></FaLinkedin> </></Link></li>
                {/* Github */}
                <li className="flex justify-between items-center w-40 h-14 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] my-0"><Link to = "https://github.com/saleheen22" target="_blank" className="flex justify-between items-center w-full bg-gray-500 py-2 px-4" ><>Github <FaGithub size={30}></FaGithub> </></Link></li>
                <li className="flex justify-between items-center w-80 h-14 ml-[-260px] hover:rounded-md duration-300 hover:ml-[-10px] "><span to="mailto: muntasaleheen@gmail.com" className="flex justify-between items-center w-full bg-gray-500 py-2 px-4" ><>muntasaleheen@gmail.com<HiOutlineMail size={30}></HiOutlineMail> </></span></li>
            </ul>
        </div>
    );
};

export default SocialLink;