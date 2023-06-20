import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import SocialLink from "../components/About/Social/SocialLink";
import AboutMe from "../components/AboutMeDetails/AboutMe";
import Checking from "./Checking";
import Contact from "../components/Contact/Contact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Saleheen </title>
            </Helmet>
         
            <div name="nm" className="bg-neutral text-white">
            <Navbar></Navbar>
            <About></About>
            <SocialLink></SocialLink>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <Contact></Contact>
            <Checking></Checking>
            </div>
        </div>
    );
};

export default Home;