import './Educations.css';
const Educations = () => {
    return (
        <div className=" pt-0 lg:pt-16 w-full h-[180vh] border-l-[5px] border-white education">
            <div className="w-full h-1/3 flex  text-center group ">
                <div className="w-20 lg:w-80 h-[6px] mt-16 relative bg-slate-200">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center group-hover:bg-red-700 bg-amber-400"></span>

                </div>

                <div>
                <div className='grid grid-cols-1            lg:grid-cols-4  me-5 lg:me-10 '>
                {/* card 1 */}
                    <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                    <div className="card card-side  shadow-3xl rounded-3xl bg-slate-700 lg:h-72 h-full  lg:w-[700px] shadow-2xl shadow-black">

                        <div className="card-body">

                            <h2 className="text-xl font-bold col-span-2 text-start ">fgh</h2>
                     

                          <div className="grid grid-cols-12">
                            <p className="col-span-9 text-start">
                                <span className="font-bold">BRAC University</span> <br />
                                Dhaka, Bangladesh
                            </p>
                            <p className="font-sans col-span-3">2019-2023</p>

                            

                          </div>
                          <p className="text-start">CGPA:<span className="btn btn-warning btn-sm font-sans ms-3">3.63/4</span></p>

                            <p className='text-justify'><span className='font-bold '>Notable Courses:</span> <br />
                                Object Oriented Programming, Data Structures, Algorithms, 	Database Systems, Software Engineering,System Analysis,Operating Systems, Computer Networks,Discrete Mathematics, etc.
                            </p>



                        </div>
                    </div>
                </div>
                </div>
                </div>

            </div>


            {/* second education */}
            {/* ;;;;;;;;;;;;;;;;;;; */}
            <div className="w-full h-1/3 flex mt-28 md:mt-4 lg:mt-4 text-center group ">
                <div className="w-20 lg:w-80 h-[6px] mt-16 relative bg-slate-200">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center group-hover:bg-red-700 bg-amber-400"></span>

                </div>

                <div>
                <div className='grid grid-cols-1 lg:grid-cols-4  me-5 lg:me-10 '>
                {/* card 1 */}
                <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                    <div className="card card-side  shadow-3xl rounded-3xl bg-slate-700 lg:h-72 h-96  lg:w-[700px] shadow-2xl shadow-black">

                        <div className="card-body">

                            <h2 className="text-xl font-bold col-span-2 text-start ">BSc in Computer Science & Engineering</h2>
                     
                            <div className="grid grid-cols-12">
                            <p className="col-span-9 text-start">
                                <span className="font-bold">Brac University</span> <br />
                                Dhaka, Bangladesh
                            </p>
                            <p className="font-sans col-span-3">2019-2023</p>

                            

                          </div>
                          <p className="text-start">CGPA:<span className="btn btn-warning btn-sm font-sans ms-3">3.63/4</span></p>
                          

                            <p className='text-justify'><span className='font-bold '>Notable Courses:</span> <br />
                                   Object Oriented Programming, Data Structures, Algorithms, 	Database Systems, Software Engineering,System Analysis,Operating Systems, Computer Networks,Discrete Mathematics, etc.
                            </p>



                        </div>
                    </div>
                </div>
                </div>
                </div>

            </div>


         

          
        </div>
    );
};

export default Educations;