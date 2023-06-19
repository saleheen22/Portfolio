

const Extracurricular = () => {
    return (
        <div className='mt-5 text-white '>
            <div className='grid grid-cols-1 lg:grid-cols-4 ms-5 lg:ms-32 me-5 lg:me-10 gap-5'>
                {/* card 1 */}
                <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                    <div className="card card-side  shadow-3xl rounded-3xl bg-slate-700 lg:h-72 h-80  lg:w-[500px] shadow-2xl shadow-black">

                        <div className="card-body">

                            <h2 className="text-xl font-bold col-span-10  ">BSc in Computer Science & Engineering</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-48'>
                                <p >
                                    <span className='font-bold '>BRAC University</span> <br /> Dhaka, Bangladesh
                                </p>
                                <p className='font-sans'>2019-2023</p>
                            </div>

                            <p className='font-bold '>CGPA:<span className='font-sans ms-3  font-bold btn btn-warning btn-sm'> 3.63/4 </span></p>

                            <p className='text-justify'><span className='font-bold '>Notable Courses:</span> <br />
                                Object Oriented Programming, Data Structures, Algorithms, 	Database Systems, Software Engineering,System Analysis, etc.
                            </p>



                        </div>
                    </div>
                </div>

                {/* card2 */}
                <div className='col-span-1 lg:col-span-2'>
                    <div className="card card-side  bg-slate-700 lg:h-72 h-80 lg:w-[500px] rounded-3xl  shadow-2xl shadow-black">

                        <div className="card-body">
                            <h2 className="card-title">Higher Secondary School Certificate</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-20'>
                                <p >
                                    <span className='font-bold '>Ispahani Public School & College</span> <br /> Chattogram, Bangladesh
                                </p>
                                <p className='font-sans'>2016-2018</p>

                            </div>
                            <p className='font-bold '>GPA:<span className='font-sans ms-3 btn btn-warning btn-sm'> 4.75/5 </span></p>
                            <p className='text-justify'><span className='font-bold '>Notable Subjects:</span> <br />
                                Information and Communication Technology, Mathematics, English, Physics, Chemistry,Biology,  etc.
                            </p>
                        </div>
                    </div>
                </div>

                {/* card3 */}
                <div className=' mt-5 '>
                    <div className="card card-side  bg-slate-700 lg:h-72 h-80 lg:w-[500px] rounded-3xl shadow-2xl shadow-black">

                        <div className="card-body">
                            <h2 className="card-title">Secondary School Certificate</h2>
                            <div className='mt-2 flex justify-between md:gap-44 lg:gap-20'>
                                <p >
                                    <span className='font-bold '>Chattogram Collegiate School</span> <br /> Chattogram, Bangladesh
                                </p>
                                <p className='font-sans'>2010-2016</p>

                            </div>
                            <p className='font-bold '>GPA:<span className='font-sans ms-3 btn btn-warning btn-sm'> 5/5 </span></p>
                            <p className='text-justify'><span className='font-bold '>Notable Subjects:</span> <br />
                                Mathematics, English, Physics, Chemistry,Biology,  etc.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            



        </div>
    );
};

export default Extracurricular;