import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import SocialLink from "../components/About/Social/SocialLink";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Saleheen </title>
            </Helmet>
         
            <div className="bg-neutral text-white">
            <Navbar></Navbar>
            <About></About>
            <SocialLink></SocialLink>
            <Resume></Resume>
            </div>
        </div>
    );
};

export default Home;