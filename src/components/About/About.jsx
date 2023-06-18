import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './About.css';
import ParticleBg from "../Paticles/ParticleBg";
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
        <div className="about">
            <div className="pt-24 container">
                {/* <ParticleBg></ParticleBg> */}
            <div className="party"  >
         
            <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        // background: {
                        //     color: {
                        //         value: "#0d47a1",
                        //     },
                        // },
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
                                enable: false,
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
                                type: "image",
                                options: {
                                    image: [
                                        {
                                            src: "../../../public/particles/React-icon.svg.png"
                                     
                                        },
                                        {
                                            src: "../../../public/particles/javascript-removebg-preview.png"
                                        
                                        },
                                        {
                                            src: "../../../public/particles/pngaaa.com-3920388.png"
                                        
                                        }
                                    ]
                                }
                                // "image": {
                                //     "src": "../../../public/particles/React-icon.svg.png"

                                // }
                            },
                            size: {
                                value: { min: 5, max: 10 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
                    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mydiv" >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis amet quidem eius optio, id repellat odio at dolore eligendi laboriosam quam velit aliquid molestias porro praesentium, aperiam nisi perferendis animi provident, vel nobis hic. Quod ab tempore atque deleniti doloribus, ipsam ad praesentium, necessitatibus doloremque iure dolore deserunt odit..</p>

                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam error earum itaque ullam sequi dignissimos? Earum temporibus sequi nam, ducimus, sint, id repellendus harum voluptas enim quis officia eos optio nostrum! Beatae laboriosam ipsam libero tempore! Corporis fuga impedit facilis temporibus nihil, accusamus adipisci ratione nulla nobis delectus quos. Minima!</div>
                </div>
            </div>
        </div>
    );
};

export default About;