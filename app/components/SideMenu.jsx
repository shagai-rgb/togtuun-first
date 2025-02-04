import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function SideMenu(props) {
    const { toggleSideMenu } = props;

    return (
        <section className="   w-3/5 h-1/2 rounded-br-3xl text-yellow-200 font-bold text-2xl  bg-stone-700  opacity-90 absolute z-10 md:hidden  place-content-center top-20 ">
            <button
                onClick={toggleSideMenu}
                className="text-5xl absolute top-6 right-6 hover:text-yellow-400">
                <IoCloseSharp />
            </button>
            <div className="grid place-content-center gap-16  ">
                <a
                    href="#"
                    className="hover:text-yellow-400">
                    Home
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400">
                    About
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400">
                    Contact
                </a>
            </div>
        </section>
    );
}
