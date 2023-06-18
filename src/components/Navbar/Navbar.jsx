import { Link } from "react-router-dom";
import logo from '../../../public/logo3-short-removebg-preview.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-neutral  top-0 fixed z-10 text-white">
                <div className="navbar-start">
                  
                    <img className="nav-logo mx-8" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ps-40 ms-40">
                        <Link className="mx-8"><li> Home </li></Link>
                        <Link className="mx-8"><li> About </li></Link>
                        <Link className="mx-8"><li> Resume </li></Link>
                        <Link className="mx-8"><li> Contact </li></Link>

                        
                    </ul>
                </div>
             <div>
             <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ms-32 md: ps-40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 ms-28 p-2 shadow bg-neutral rounded-box w-52">
                        <Link className="my-4"><li> Home </li></Link>
                        <Link className="my-4"><li> About </li></Link>
                        <Link className="my-4"><li> Resume </li></Link>
                        <Link className="my-4"><li> Contact </li></Link>
                        </ul>
                    </div>
             </div>

            </div>        </div>
    );
};

export default Navbar;