import './Extracurricular.css'

const Extracurricular = () => {
    return (
        <div className='mt-5 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-4 ms-5 lg:ms-48 me-5 lg:me-10 gap-5 lg:gap-24'>
                {/* card 1 */}
                <div className='col-span-1 md:col-span-1 lg:col-span-2 ' >
                    <div className="card card-side  shadow-3xl rounded-3xl bg-slate-700 h-full   lg:w-full shadow-2xl shadow-black">

                        <div className="card-body">

                            <h2 className="text-xl font-bold col-span-10  ">Assistant Director of Human Resources</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-8'>
                                <p >
                                    <span className='font-bold '>Robotics Club of BRAC University</span>
                                </p>
                                <p className='font-sans'>Aug 19, 2021-Jan 2023</p>
                            </div>



                            <p className='text-justify mt-7'>
                            During my undergraduate years at BRAC University, I was an active member of the Robotics Club (ROBU), engaging in effective communication and coordination. ROBU organized various online and offline competitions, where I played a crucial role in participant coordination and query resolution. Additionally, I utilized G Suite tools like Google Sheets, Forms, Drive, Calendar, and Docs for data management, honing my proficiency in G Suite. As Assistant Director, I further developed my leadership skills while enhancing communication, teamwork, and problem-solving abilities.
                            </p>



                        </div>
                    </div>
                </div>


                {/* card2 */}
                <div className='col-span-1 lg:col-span-2 me-1 lg:me-16 mt-10 lg:mt-0'>
                    <div className="card card-side  bg-slate-700 h-full lg:w-full rounded-3xl  shadow-2xl shadow-black">

                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Senior Executive of Event Management</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-8'>
                                <p >
                                    <span className='font-bold '>BRAC University Computer Club</span>
                                </p>
                                <p className='font-sans'>Aug 12, 2020 - Jan 2021</p>
                            </div>



                            <p className='text-justify mt-7'>
                            During my time at BRAC University, I actively participated in the BRAC University Computer Club (BUCC) and held a role in event management. I contributed to event planning and execution, including venue selection, logistics management, and guest coordination. Through this experience, I developed skills in planning, organization, and event management. As a senior executive, I further honed my abilities in overseeing successful events. This club experience greatly enhanced my capabilities in planning and executing diverse activities.
                            </p>
                        </div>
                    </div>
                </div>



            </div>




        </div>
    );
};

export default Extracurricular;