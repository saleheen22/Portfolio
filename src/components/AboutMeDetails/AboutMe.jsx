import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import img2 from '../../../public/IMG-20230320-WA0085.jpg'
import './AboutMe.css';
import { Link } from 'react-router-dom';
const AboutMe = () => {
    return (
        <div name="abt" className='aboutme pt-80 md:pt-32 ms-16 lg:ms-32 mb-28'>
            <h2 className='  text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500 '> About <br /></h2>

            <br />
            <div className='grid grid-cols-12 mt-2 md:mt-16'>
                <div className='col-span-12 lg:col-span-4  '>
                    <img className='h-96 lg:h-full rounded-2xl' src={img2} alt="" />
                </div>
                <div className='col-span-12 lg:col-span-8 ms-4 me-12 lg:ms-12 text-justify mt-4'>
                  <p>  I am a Computer Science and Engineering graduate from BRAC University, Bangladesh, with a passion for technology and a drive to excel. During my undergraduate years, I actively participated in various extracurricular activities that enriched my overall experience.</p>
                  <br />

                  <p>  In university, I actively participated in two prominent clubs: the Robotics Club and the Computer Club at BRAC University. In the Robotics Club, I served as Assistant Director of Human Resources, refining my teamwork, communication and leadership skills. Additionally, I held the position of Senior Executive of Event Management in the Computer Club, further developing my organizational abilities.</p>
                  <br />

                 <p>Over time, I have developed a strong proficiency in React, enabling me to create full-stack websites using React on the frontend and Node.js with MongoDB on the server-side. I am particularly adept at leveraging Firebase for user authentication, ensuring secure and seamless user experiences. Furthermore, I possess expertise in CSS frameworks such as Tailwind and Bootstrap, allowing me to create visually appealing and responsive designs.</p>
                 <br />

                 <p>I excel under pressure, maintaining composure while delivering high-quality results within deadlines. Additionally, I possess an insatiable curiosity and passion for exploring new technologies and expanding my knowledge.</p>
                 <br />

                 <p>With a solid foundation in computer science, hands-on experience in web development, and a continuous drive for growth, I am ready to tackle new challenges and contribute to innovative projects.</p>
                 <br />
                 <br />
                    <div className='grid grid-cols-2'>
                        <div>                 <p className='text-2xl font-bold'>Social Links</p>

<div className='grid grid-cols-8 mt-4'>
   <div className='col-span-4 md:col-span-1'> <Link to= "https://www.linkedin.com/in/abrar-saleheen-6a9416177/"><FaLinkedinIn size={30}></FaLinkedinIn></Link></div>
   <div className='col-span-4 md:col-span-1'><Link to= "https://github.com/saleheen22"  ><FaGithub size={30}></FaGithub></Link></div>

</div></div>
                        <div>
                        <p className='text-2xl font-bold mb-2'>Contact Details</p>
                        <p className='font-semibold hidden lg:block me-4 pe-16 '>Email: muntasaleheen@gmail.com</p>
                        <p className='lg:hidden'>Email: <span>muntasaleheen</span> <br />  <span>@gmail.com</span></p>
                        <p className='font-semibold '>Phone: +8801790511279</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;