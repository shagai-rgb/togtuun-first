// FINISHED
import React from "react";

export default function WhatParentsSay() {
    return (
        <section className="bg-orange-50  grid justify-center text-center pb-16">
            <div className=" max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                <div className="  ">
                    <h2 className="  font-lobster py-16 text-2xl md:text-5xl">
                        What parents say
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* card */}
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8 ">
                        <div className="flex flex-col items-center    gap-4">
                            <img
                                className="w-24 h-24   rounded-full  object-cover object-right "
                                src="./images/stellalarson.jpg"
                                alt="Stella Larson image"
                            />
                            <h5 className=" text-xl font-bold  ">
                                Stella Larson
                            </h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3 ">
                                MONDAY, MAY 2022
                            </span>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                className="w-24 h-24 rounded-full   object-cover object-left"
                                src="./images/nickjohnson.jpg"
                                alt="Nick Johnson image"
                            />
                            <h5 className=" text-xl font-bold  ">
                                Nick Johnson
                            </h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3  ">
                                MONDAY, MAY 2022
                            </span>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                className="w-24 h-24  rounded-full   object-cover"
                                src="./images/olgaivanova.jpg"
                                alt="Olga Ivanova image"
                            />
                            <h5 className="text-xl font-bold  ">
                                Olga Ivanova
                            </h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3  ">
                                MONDAY, MAY 2022
                            </span>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                className="w-24 h-24  rounded-full   object-cover "
                                src="./images/paulhudson.jpg"
                                alt="Paul Hudson image"
                            />
                            <h5 className="text-xl font-bold  ">Paul Hudson</h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3  ">
                                MONDAY, MAY 2022
                            </span>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                className="w-24 h-24   rounded-full  object-cover object-right "
                                src="./images/valerystowon.jpg"
                                alt="Valery Stowon image"
                            />
                            <h5 className=" text-xl font-bold  ">
                                Valery Stowon
                            </h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3 ">
                                MONDAY, MAY 2022{" "}
                            </span>
                        </div>
                    </div>
                    <div className=" max-w-lg bg-white rounded-lg shadow-sm px-4 py-8">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                className="w-24 h-24   rounded-full  object-cover object-right "
                                src="./images/stellaperry.jpg"
                                alt="Stella Perry image"
                            />
                            <h5 className=" text-xl font-bold  ">
                                Stella Perry
                            </h5>
                            <p className=" text-slate-500 border-b pb-8 ">
                                We want your child's birthday to be magical!
                                With animators, we can bring their favorite
                                characters to life, creating a celebration
                                filled with wonder and excitement. Let's make
                                their special day unforgettable with laughter,
                                games, and joy.
                            </p>
                            <span className="text-sm text-slate-400 italic pt-3 ">
                                MONDAY, MAY 2022{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
