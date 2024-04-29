import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.png";
const Navbar = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);

    const toggleMenu = () => {
        setIsOpenNav(!isOpenNav);
    };
    return (
        <header className="shadow  z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-12 bg-white" alt="Logo" />
                    </NavLink>
                    <div className="block sm:hidden" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
                    <div
                        className={` justify-between items-center w-full sm:flex sm:w-auto sm:basis-1/4 ${isOpenNav ? "block basis-full" : "hidden"} `}
                        id="mobile-menu-2">
                        <ul className={`flex flex-col mt-4 font-medium sm:flex-row sm:space-x-8 lg:mt-0 `}>
                            <li>
                                <NavLink to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent sm:border-0 hover:text-orange-700 lg:p-0 text-center`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent sm:border-0 hover:text-orange-700 lg:p-0 text-center`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/message"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent sm:border-0 hover:text-orange-700 lg:p-0 text-center`
                                    }
                                >
                                    Message
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;