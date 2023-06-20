
import './Resume.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
// import img1 from '../../../public/19101331 Abrar Saleheen.jpg';
import img4 from '../../../public/portfoliowebsite1.png'
import img1 from '../../../public/kitchenchamp.png'
import img3 from '../../../public/banglarcanteen.png';
import img2 from '../../../public/sheldor.png';

import { Link } from 'react-router-dom';
import Educations from '../Educations/Educations';
import Extracurricular from '../Extracurricular/Extracurricular';

const carousel = (slider) => {

    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}
const Resume = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )


    return (
        <div name="rsm" className="h-96 pt-80 md:pt-32 resume">
            <h2 className='text-3xl md:text-5xl text-center font-bold '>Resume</h2>
            <div className='mt-12'>
                <Tabs selectedTabClassName="active mb-10 font-semibold " >
                    <TabList className="text-3xl text-center grid grid-cols-12 md:grid-cols-4 me-5 ms-5 lg:ms-32 md:ms-12">
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Skills</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Projects</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Education</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl lg:hidden">Extra-curricular </Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl hidden lg:block">Extracurricular </Tab>

                    </TabList>
                    {/* Skills */}
                    <TabPanel className="me-5 ms-10 lg:ms-32 md:ms-12 mt-16 md:mt-8 lg:mt-5">
                        <ul>
                            <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-20 me-1 md:me-4 lg:me-8'>
                                <div className='col-span-1 lg:col-span-6'>
                                    <div>
                                        <li className='text-2xl font-bold '>React</li>

                                        <div className='mt-1'><progress className="progress  progress-secondary w-full" value="80" max="100"></progress>
                                        </div>
                                    </div>

                                    {/* HTML */}
                                    <div className='mt-5'>
                                        <li className='text-2xl font-bold '>HTML</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="96" max="100"></progress>
                                        </div>
                                    </div>

                                    {/* Bootstrap */}
                                    <div className='mt-5'>
                                        <li className='text-2xl font-bold '>Bootstrap</li>
                                        <div className='col-span-7 md:col-span-5 mt-1 '><progress className="progress  progress-secondary w-full" value="83" max="100"></progress>
                                        </div>
                                    </div>
                                    {/* Express js */}
                                    <div className=' mt-5 '>
                                        <li className='text-2xl font-bold '>Express Js</li>
                                        <div className='mt-1'><progress className="progress  progress-secondary w-full" value="23" max="100"></progress>
                                        </div>
                                    </div>


                                    {/* Nodejs */}
                                    <div className='mt-5'>
                                        <li className=' text-2xl font-bold '>Node Js</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="25" max="100"></progress>
                                        </div>


                                        {/* Mongodb */}
                                        <div className='mt-5'>
                                            <li className='text-2xl font-bold '>MongoDB</li>
                                            <div className=' mt-1 '><progress className="progress  progress-secondary w-full" value="27" max="100"></progress>
                                            </div>
                                        </div>
                                        {/* Firebase */}
                                        <div className=' mt-5'>
                                            <li className='text-2xl font-bold '>Firebase</li>
                                            <div className='mt-1'><progress className="progress  progress-secondary w-full" value="60" max="100"></progress>
                                            </div>
                                        </div>
                                        {/* Leadershipt */}
                                        <div className=' mt-5'>
                                            <li className='text-2xl font-bold '>Leadership</li>
                                            <div className='mt-1'><progress className="progress  progress-secondary w-full" value="85" max="100"></progress>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-span-1 lg:col-span-6'>

                                    {/* Javascript */}
                                    <div className='mt-5 lg:mt-0'>
                                        <li className='text-2xl font-bold'>JavaScript</li>
                                        <div className='col-span-7 md:col-span-5 mt-1 '><progress className="progress  progress-secondary w-full" value="75" max="100"></progress>
                                        </div>
                                    </div>



                                    {/* CSS */}
                                    <div className='mt-5'>
                                        <li className=' text-2xl font-bold '>CSS</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="87" max="100"></progress>
                                        </div>
                                    </div>


                                    {/* Taiwind */}
                                    <div className='mt-5'>
                                        <li className='text-2xl font-bold '>Tailwind CSS</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="85" max="100"></progress>
                                        </div>
                                    </div>

                                    {/* Java */}
                                    <div className='mt-5'>
                                        <li className='text-2xl font-bold '>Java</li>
                                        <div className='mt-1'><progress className="progress  progress-secondary w-full" value="35" max="100"></progress>
                                        </div>
                                    </div>
                                    {/* Python */}
                                    <div className='mt-5'>
                                        <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Python</li>
                                        <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="37" max="100"></progress>
                                        </div>
                                    </div>
                                    {/* Microsoft office */}
                                    <div className=' mt-5'>
                                        <li className='text-2xl font-bold '>Microsoft Office</li>
                                        <div className=' mt-1 '><progress className="progress  progress-secondary w-full" value="77" max="100"></progress>
                                        </div>
                                    </div>

                                    {/* G-suite */}
                                    <div className=' mt-5'>
                                        <li className='text-2xl font-bold '>G Suite</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="82" max="100"></progress>
                                        </div>
                                    </div>

                                    {/* Presentation */}
                                    <div className=' mt-5'>
                                        <li className='text-2xl font-bold '>Presentation</li>
                                        <div className=' mt-1'><progress className="progress  progress-secondary w-full" value="86" max="100"></progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="wrapper mt-5 lg:mt-24">

                                <div className="scene">
                                    <div className="carousel  keen-slider" ref={sliderRef}>

                                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0  `}>

                                            <figure><img className='images' src={img1} alt="Shoes" /></figure>
                                            <div className='card-title mt-2'>Kitchen Champ</div>

                                            <div className="card-body   h-1/6 group grid grid-cols-2 gap-36">
                                                {/* <p className='text-justify mt-2 p-0'>Demo</p> */}
                                                <Link>Demo</Link>

                                                {/* <button className='btn btn-xs btn-outline btn-warning  mt-2' >Code</button> */}
                                                <Link>Code </Link>

                                            </div>





                                        </div>

                                        {/* no2 project */}

                                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0  `}>

                                            <figure><img className='images' src={img2} alt="" /></figure>
                                            <div className='card-title mt-2'>Sheldor Train World</div>
                                            <div className="card-body   h-1/6 group grid grid-cols-2 gap-36">
                                                {/* <p className='text-justify mt-2 p-0'>Demo</p> */}
                                                <Link>Demo</Link>

                                                {/* <button className='btn btn-xs btn-outline btn-warning  mt-2' >Code</button> */}
                                                <Link>Code</Link>

                                            </div>





                                        </div>

                                        {/* no3 projject */}

                                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0  `}>

                                            <figure><img className='images' src={img3} alt="Shoes" /></figure>
                                            <div className='card-title mt-2'>Bangladeshi Canteen</div>
                                            <div className="card-body   h-1/6 group grid grid-cols-2 gap-36">
                                                {/* <p className='text-justify mt-2 p-0'>Demo</p> */}
                                                <Link>Demo</Link>

                                                {/* <button className='btn btn-xs btn-outline btn-warning  mt-2' >Code</button> */}
                                                <Link>Code</Link>

                                            </div>





                                        </div>
                                        {/* no4 project */}
                                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0  `}>

                                            <figure><img className='images' src={img4} alt="Shoes" /></figure>
                                            <div className='card-title mt-2'>Portfolio Website</div>
                                            <div className="card-body   h-1/6 group grid grid-cols-2 gap-36">
                                                {/* <p className='text-justify mt-2 p-0'>Demo</p> */}
                                                <Link>Demo</Link>

                                                {/* <button className='btn btn-xs btn-outline btn-warning  mt-2' >Code</button> */}
                                                <Link>Code</Link>

                                            </div>





                                        </div>




                                    </div>
                                </div>
                            </div>

                            {/* no2 project */}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='ms-5 lg:ms-32'>
                            {/* <Education></Education> */}
                            <Educations></Educations>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Extracurricular></Extracurricular>
                    </TabPanel>
                    <TabPanel>
                        <Extracurricular></Extracurricular>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Resume;