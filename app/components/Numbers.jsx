import React from "react"
import { FaArrowRightLong } from "react-icons/fa6"

export default function Numbers() {
    return (
        <section className=" bg-yellow-400  grid place-content-center text-center   p-14 ">
            <div className="max-w-3xl  grid lg:grid-cols-2   gap-7">
                <div className="  gap-4 grid place-content-center py-2 ">
                    <h1 className="text-white text-5xl py-2  font-bold font-inter ">
                        500
                    </h1>
                    <h3 className="text-xl   ">Holidays</h3>
                    <p className=" ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Harum, quaerat!
                    </p>
                    <div className=" text-center">
                        <div className="flex justify-center ">
                            <a
                                href="#"
                                className="">
                                <FaArrowRightLong className="text-4xl hover:opacity-65 duration-200 mt-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" gap-4 grid place-content-center py-2">
                    <h1 className="text-white text-5xl py-2  font-bold font-inter ">
                        140
                    </h1>
                    <h3 className="text-xl   ">Birthdays</h3>
                    <p className=" ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Harum, quaerat!
                    </p>
                    <div className=" text-center">
                        <div className="flex justify-center ">
                            <a
                                href="#"
                                className="">
                                <FaArrowRightLong className="text-4xl hover:opacity-65 duration-200 mt-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gap-4 grid place-content-center py-2">
                    <h1 className="text-white text-5xl py-2  font-bold font-inter ">
                        20
                    </h1>
                    <h3 className="text-xl   ">Victories</h3>
                    <p className=" ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Harum, quaerat!
                    </p>
                    <div className=" text-center">
                        <div className="flex justify-center ">
                            <a
                                href="#"
                                className="">
                                <FaArrowRightLong className="text-4xl hover:opacity-65 duration-200 mt-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gap-4 grid place-content-center py-2 ">
                    <h1 className="text-white text-5xl py-2  font-bold font-inter ">
                        56
                    </h1>
                    <h3 className="text-xl   ">Happy Clients</h3>
                    <p className=" ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Harum, quaerat!
                    </p>
                    <div className=" text-center">
                        <div className="flex justify-center ">
                            <a
                                href="#"
                                className="">
                                <FaArrowRightLong className="text-4xl hover:opacity-65 duration-200 mt-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
