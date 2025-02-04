import React from "react";

export default function WhyChooseUs() {
    return (
        <section className=" grid justify-items-center items-center   gap-12 py-12">
            <h1 className="text-2xl md:text-5xl  font-lobster ">
                Why Choose Us
            </h1>

            <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-y-2  gap-8  ">
                {/* card */}
                <div className="  grid justify-items-center text-center gap-8 px-20  md:p-8  xl:py-16 content-start">
                    <img
                        className="size-24"
                        src="./images/choose3.png"
                        alt="animators"
                    />
                    <h1 className="text-xl   xl:py-3 ">Professionalism</h1>
                    <p className="  ">
                        We want your child's birthday to be magical! With
                        animators, we can bring their favorite characters to
                        life, creating a celebration filled with wonder and
                        excitement. Let's make their special day unforgettable
                        with laughter, games, and joy.
                    </p>
                </div>

                {/* card */}
                <div className="  grid justify-items-center text-center gap-8  px-20  md:p-8 xl:py-16 content-start">
                    <img
                        className="size-24"
                        src="./images/choose1.png"
                        alt="animators"
                    />
                    <h1 className="text-xl  xl:py-3 ">Individuality </h1>
                    <p className="">
                        With face painting, we can transform their friends into
                        superheroes, princesses, or wild animals. Let's create a
                        celebration where every child feels like a star, their
                        faces adorned with colors and designs that reflect their
                        dreams.
                    </p>
                </div>
                {/* ------------------------------------------------ */}
                {/* card */}
                <div className="  grid justify-items-center text-center gap-8  px-20 md:p-8  xl:py-16 content-start">
                    <img
                        className="size-24"
                        src="./images/choose2.png"
                        alt="animators"
                    />
                    <h1 className="text-xl  xl:py-3 ">Uniqueness</h1>
                    <p className=" ">
                        With games, we can create a celebration where every
                        child is engaged and having fun. Picture the excitement
                        as they play games on the playground of happiness, where
                        memories are made through friendly competition and
                        shared laughter.
                    </p>
                </div>
                {/* ------------------------------------------------ */}

                {/* card */}
                <div className="  grid justify-items-center text-center gap-8  px-20 md:p-8  xl:py-16 content-start">
                    <img
                        className="size-24"
                        src="./images/choose4.png"
                        alt="animators"
                    />
                    <h1 className="text-xl  xl:py-3 ">Quality</h1>
                    <p className=" ">
                        ​With quests, we can turn their special day into an epic
                        adventure, full of excitement and discovery. Imagine the
                        joy on their faces as they embark on treasure hunts,
                        solve puzzles, and conquer challenges with their
                        friends.
                    </p>
                </div>
            </div>
        </section>
    );
}
