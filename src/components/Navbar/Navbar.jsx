import logo from '../../../public/logo3-short-removebg-preview.png';
import './Navbar.css';
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-neutral  top-0 fixed z-30 text-white">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden  md:pe-40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 shadow bg-neutral rounded-box me-40  w-52">
                        <Link to='nm' smooth duration={500}  className="my-4"><li> Home </li></Link>
                        <Link to='abt' smooth duration={500} className="my-4"><li> About </li></Link>
                        <Link to='rsm' smooth duration={500} className="my-4"><li> Resume </li></Link>
                        <Link to='cnt' smooth duration={500} className="my-4"><li> Send Message </li></Link>
                       
                        </ul>
                    </div>
                    <Link to='nm' smooth duration={500}><img className="nav-logo mx-auto ms-5" src={logo} alt="" /></Link>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ms-40 ps-40">
                        <Link to='nm' smooth duration={500}  className="mx-8"><li> Home </li></Link>
                        <Link to='abt' smooth duration={500} className="mx-8"><li> About </li></Link>
                        <Link to='rsm' smooth duration={500} className="mx-8"><li> Resume </li></Link>
                        <Link to='cnt' smooth duration={500} className="mx-10"><li> Send Message </li></Link>

                        
                    </ul>
                </div>
             <div className='navbar-end md:pe-52 lg:hidden'>

          


        
             
             </div>

            </div>        </div>
    );
};

export default Navbar;