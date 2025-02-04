import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(true);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav className="bg-stone-700 h-20 flex items-center justify-between fixed inset-0 xl:px-20 z-30 ">
            {/* hamburger menu */}
            <button
                onClick={showDropdown}
                className="md:hidden  ml-6 ">
                <RxHamburgerMenu className="text-yellow-400 text-3xl" />
            </button>
            {dropdown && (
                <div className="   w-3/5  rounded-br-3xl text-yellow-200 font-bold text-2xl  bg-stone-700  opacity-90 absolute z-10 md:hidden  place-content-center top-20  py-16  ">
                    <button
                        onClick={showDropdown}
                        className="text-4xl absolute right-5 top-2 hover:text-yellow-400">
                        <IoCloseSharp />
                    </button>
                    <div className="grid place-content-center gap-16  ">
                        <a
                            onClick={showDropdown}
                            href="#hero"
                            className="hover:text-yellow-400">
                            Home
                        </a>
                        <a
                            onClick={showDropdown}
                            href="#"
                            className="hover:text-yellow-400">
                            About
                        </a>
                        <a
                            onClick={showDropdown}
                            href="#contact"
                            className="hover:text-yellow-400">
                            Contact
                        </a>
                    </div>
                </div>
            )}

            {/* logo */}
            <FaCakeCandles className="hidden text-yellow-300  text-4xl lg:flex ml-16" />

            {/* menu */}
            <div className="md:flex ml-16 gap-16 xl:gap-28 text-yellow-200 font-bold  hidden lg:ml-0  ">
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    Home
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    About
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    Contact
                </a>
            </div>

            {/* phone number - call button */}
            <button className="bg-yellow-200 flex items-center px-8 py-3  rounded-full mr-6 md:mr-12 hover:bg-yellow-300  ">
                <FaPhoneAlt /> +1 (234) 567-8910
            </button>
        </nav>
    );
}
