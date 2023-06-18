import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './About.css';
import img1 from '../../../public/19101331 Abrar Saleheen.jpg';
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import cv from '../../../public/Resume.pdf';
import img2 from '../../../public/IMG-20230320-WA0085.jpg'
const About = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className="about ms-4 lg:ms-32">
            <div className="pt-24 container">
                {/* <ParticleBg></ParticleBg> */}
                <div className="party"  >

                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{

                            fpsLimit: 120,
                            fullScreen: {
                                enable: false,
                                zIndex: 0
                            },

                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: true,
                                    speed: 2,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 100,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                    // options: {
                                    //     image: [
                                    //         {
                                    //             src: "../../../public/particles/React-icon.svg.png"

                                    //         },
                                    //         {
                                    //             src: "../../../public/particles/javascript-removebg-preview.png"

                                    //         },
                                    //         {
                                    //             src: "../../../public/particles/pngaaa.com-3920388.png"

                                    //         }
                                    //     ]
                                    // }
                                    // "image": {
                                    //     "src": "../../../public/particles/React-icon.svg.png"

                                    // }
                                },
                                size: {
                                    value: { min: 2, max: 7 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>

                <div className="grid grid-cols-12 gap-20 md:gap-5 mydiv" >


                    <div className="md:col-span-8 col-span-5 z-20">
                        <div className="hidden lg:block">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />



                        </div>
                       <div className="z-40">
                       <p className="text-left">
                            <span className="text-3xl  font-bold text-left">Hi, <br></br> <span className="text-4xl md:text-7xl">
                                
                            I am <span className="text-amber-400 ">Abrar  Saleheen </span>
                                </span></span>

                            <br />
                            </p>
                         <p className="text-justify">  <span className="py-4 ">
                           I am a results-oriented web developer with a specialization in React and a
                            passion for exploring new technologies. Proficient in building dynamic
                            and responsive web applications using React, CSS, HTML, and JavaScript.
                            Experienced in implementing Firebase authentication for secure user
                            authentication and authorization. Possesses beginner-level expertise in
                            Express.js and MongoDB for server-side development. A quick learner
                            and adaptable professional who thrives in collaborative environments,
                            dedicated to delivering high-quality code and exceptional user
                            experiences. <Link>adfd</Link>
                            </span> <br />
                            {/* <div className="">
                            <button className="btn mt-4 font-bold btn-warning z-20 grid grid-cols-2"> <a href="google.com"><div>Download CV </div> <div><FaDownload></FaDownload></div></a> </button>
                            
                            </div> */}
                            <a href={cv} download="Resume" >

                            <div className="">
                            <button className="btn mt-4 font-bold btn-warning  "> <div>Download CV </div> <div><FaDownload></FaDownload></div> </button>
                            
                            </div>

                            </a>
       
                        </p>
                       </div>
                    </div>

                    <div className="overflow-hidden md:col-span-4 col-span-10 text-center  2xl:ms-28 z-20 pe-16">
                        <div className="hidden lg:block">
                            <br />
                            <br />
                            <br />
                            <br />
                            


                        </div>
                        <img className="z-10 h-4/5  image rounded-3xl md:w-full" src={img1} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default About;