import React from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoTiktok } from "react-icons/io5"

export default function Footer() {
    return (
        <section>
            <div className="grid bg-stone-700 text-center text-white p-12 gap-9 ">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum, quasi?
                </p>
                <div className="flex items-center justify-center gap-5 ">
                    <a
                        href="#"
                        className="inline-flex items-center text-4xl font-medium text-center rounded-lg hover:opacity-65 duration-200 ">
                        <FaInstagram />
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center text-4xl font-medium text-center rounded-lg hover:opacity-65 duration-200 ">
                        <FaFacebook />
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center text-4xl font-medium text-center rounded-lg hover:opacity-65 duration-200 ">
                        <FaSquareXTwitter />
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center text-4xl font-medium text-center rounded-lg hover:opacity-65 duration-200 ">
                        <IoLogoTiktok />
                    </a>
                </div>
            </div>
        </section>
    )
}
