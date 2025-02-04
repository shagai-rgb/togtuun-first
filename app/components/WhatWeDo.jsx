import React from "react";

export default function WhatWeDo() {
    return (
        <section className=" grid justify-items-center  relative overflow-visible">
            <img
                className="object-cover w-screen h-screen  absolute -z-20 "
                src="./images/starsbg.jpg"
                alt="Stars image"
            />
            <div className=" text-center py-12 md:py-20 ">
                <h1 className=" font-lobster py-3  text-2xl md:text-5xl   ">
                    What We Do
                </h1>

                <div className="max-w-7xl grid md:gap-2 md:py-6    grid-cols-1 md:grid-cols-2  lg:grid-cols-4   ">
                    {/* card */}

                    <div className="  grid justify-items-center text-center gap-8    px-20 md:p-8 py-8  content-start ">
                        <img
                            className="size-24"
                            src="./images/animators.png"
                            alt="animators"
                        />
                        <h1 className=" text-xl   xl:py-3 ">Animators</h1>
                        <p className="   ">
                            We want your child's birthday to be magical! With
                            animators, we can bring their favorite characters to
                            life, creating a celebration filled with wonder and
                            excitement. Let's make their special day
                            unforgettable with laughter, games, and joy.
                        </p>
                    </div>

                    {/* card */}
                    <div className="  grid justify-items-center text-center gap-8    px-20 md:p-8 py-8  content-start ">
                        <img
                            className="size-24"
                            src="./images/facepainting.png"
                            alt="animators"
                        />
                        <h1 className=" text-xl  xl:py-3 ">Face Painting</h1>
                        <p className="">
                            With face painting, we can transform their friends
                            into superheroes, princesses, or wild animals. Let's
                            create a celebration where every child feels like a
                            star, their faces adorned with colors and designs
                            that reflect their dreams.
                        </p>
                    </div>
                    {/* ------------------------------------------------ */}
                    {/* card */}
                    <div className="  grid justify-items-center text-center gap-8    px-20 md:p-8 py-8  content-start ">
                        <img
                            className="size-24"
                            src="./images/games.png"
                            alt="animators"
                        />
                        <h1 className=" text-xl  xl:py-3 ">Games</h1>
                        <p className=" ">
                            With games, we can create a celebration where every
                            child is engaged and having fun. Picture the
                            excitement as they play games on the playground of
                            happiness, where memories are made through friendly
                            competition and shared laughter.
                        </p>
                    </div>
                    {/* ------------------------------------------------ */}

                    {/* card */}
                    <div className="  grid justify-items-center text-center gap-8    px-20 md:p-8 py-8  content-start ">
                        <img
                            className="size-24"
                            src="./images/quest.png"
                            alt="animators"
                        />
                        <h1 className="text-xl  xl:py-3 ">Quest</h1>
                        <p className="  ">
                            ​With quests, we can turn their special day into an
                            epic adventure, full of excitement and discovery.
                            Imagine the joy on their faces as they embark on
                            treasure hunts, solve puzzles, and conquer
                            challenges with their friends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
