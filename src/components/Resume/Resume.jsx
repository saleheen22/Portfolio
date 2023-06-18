
import './Resume.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Resume = () => {
 
    return (
        <div className="h-96 pt-80 md:pt-32 resume">
            <h2 className='text-3xl md:text-5xl text-center font-bold '>Resume</h2>
            <div className='mt-12'>
                <Tabs  selectedTabClassName="active mb-10 font-semibold " >
                    <TabList className="text-3xl text-center grid grid-cols-12 md:grid-cols-4 me-5 ms-5 lg:ms-32 md:ms-28">
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Skills</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Projects</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Education</Tab>
                        <Tab className="col-span-6 md:col-span-1 p-2 rounded-2xl">Volunteer Experience</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>dkfdkjfkdfkdjfkdj</h2>
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