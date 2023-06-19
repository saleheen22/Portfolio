import './Extracurricular.css'

const Extracurricular = () => {
    return (
        <div className='mt-5 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-4 ms-5 lg:ms-32 me-5 lg:me-10 gap-5'>
                {/* card 1 */}
                <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                    <div className="card card-side  shadow-3xl rounded-3xl bg-slate-700 lg:h-72 h-80  lg:w-[500px] shadow-2xl shadow-black">

                        <div className="card-body">

                            <h2 className="text-xl font-bold col-span-10  ">Assistant Director of Human Resources</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-8'>
                                <p >
                                    <span className='font-bold '>Robotics Club of BRAC University</span> 
                                </p>
                                <p className='font-sans'>Aug 19, 2021-Jan 2023</p>
                            </div>

                   

                            <p className='text-justify'> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima ratione pariatur ut nisi dolorem vel minus veritatis omnis similique!.
                            </p>



                        </div>
                    </div>
                </div>

                {/* card2 */}
                <div className='col-span-1 lg:col-span-2'>
                    <div className="card card-side  bg-slate-700 lg:h-72 h-80 lg:w-[500px] rounded-3xl  shadow-2xl shadow-black">

                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Senior Executive of Event Management</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-8'>
                                <p >
                                    <span className='font-bold '>BRAC University Computer Club</span> 
                                </p>
                                <p className='font-sans'>Aug 12, 2020 - Jan 2021</p>
                            </div>

                   

                            <p className='text-justify'> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima ratione pariatur ut nisi dolorem vel minus veritatis omnis similique!.
                            </p>
                        </div>
                    </div>
                </div>

              

            </div>
            



        </div>
    );
};

export default Extracurricular;