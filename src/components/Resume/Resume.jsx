
import './Resume.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Resume = () => {
 
    return (
        <div className="h-96 pt-80 md:pt-32 resume">
            <h2 className='text-3xl md:text-5xl text-center font-bold '>Resume</h2>
            <div className='mt-12'>
                <Tabs  selectedTabClassName="active mb-10 font-semibold " >
                    <TabList className="text-3xl text-center grid grid-cols-12 md:grid-cols-4 me-5 ms-5 lg:ms-32 md:ms-12">
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Skills</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Projects</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Education</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl hidden lg:block">Extracurricular </Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl lg:hidden">Extra-curricular </Tab>
                    </TabList>
                    {/* Skills */}
                    <TabPanel className="me-5 ms-10 lg:ms-32 md:ms-12 mt-16 md:mt-8 lg:mt-5">
                        <ul>
                            <div className='grid grid-cols-12'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>React</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="80" max="100"></progress>
</div>
                            </div>
                            {/* Javascript */}
                            <div className='grid grid-cols-12 mt-5 '>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold  me-5 md:pe-12'>JavaScript</li>
                            <div className='col-span-7 md:col-span-5 mt-1 ms-4'><progress className="progress  progress-secondary w-full" value="75" max="100"></progress>
</div>
                            </div>
                            {/* HTML */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>HTML</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="96" max="100"></progress>
</div>
                            </div>
                            {/* CSS */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>CSS</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="87" max="100"></progress>
</div>
                            </div>
                            {/* Bootstrap */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Bootstrap</li>
                            <div className='col-span-7 md:col-span-5 mt-1 ms-4'><progress className="progress  progress-secondary w-full" value="83" max="100"></progress>
</div>
                            </div>

                            {/* Taiwind */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Tailwind CSS</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="85" max="100"></progress>
</div>
                            </div>
                            {/* Nodejs */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Node Js</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="25" max="100"></progress>
</div>
                            </div>
                            {/* Express js */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Express Js</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="23" max="100"></progress>
</div>
                            </div>
                            {/* Mongodb */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>MongoDB</li>
                            <div className='col-span-7 md:col-span-5 mt-1 ms-4'><progress className="progress  progress-secondary w-full" value="27" max="100"></progress>
</div>
                            </div>
                            {/* Firebase */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Firebase</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="60" max="100"></progress>
</div>
                            </div>
                            {/* Java */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Java</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="35" max="100"></progress>
</div>
                            </div>
                            {/* Python */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Python</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="37" max="100"></progress>
</div>
                            </div>
                            {/* Microsoft office */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>Microsoft Office</li>
                            <div className='col-span-7 md:col-span-5 mt-1 ms-4'><progress className="progress  progress-secondary w-full" value="77" max="100"></progress>
</div>
                            </div>
                    
                            {/* G-suite */}
                            <div className='grid grid-cols-12 mt-5'>
                            <li className='col-span-4 md:col-span-2 text-2xl font-bold '>G Suite</li>
                            <div className='col-span-7 md:col-span-5 mt-1'><progress className="progress  progress-secondary w-full" value="82" max="100"></progress>
</div>
                            </div>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Resume;