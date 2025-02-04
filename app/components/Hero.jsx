"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const targetDate = new Date("2025-02-09T16:00:00"); // Set target date (Feb 11, 2025)

  // Initialize state to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      // If the countdown is finished, clear the interval
      if (distance <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculate remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the state
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  const ref = (useRef < HTMLDivElement) | (null > null);

  const isInView = useInView(ref, { threshold: 0.1 });

  const ref1 = (useRef < HTMLDivElement) | (null > null);

  const isInView1 = useInView(ref1, { threshold: 0.1 });
  const ref2 = (useRef < HTMLDivElement) | (null > null);

  const isInView2 = useInView(ref1, { threshold: 0.1 });

  return (
    <section id="hero">
      <div className="grid items-center  relative">
        <img
          className="h-screen w-screen object-cover     "
          src="./images/togtuun-bg.png"
        />
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView2 ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >
          <div className="grid gap-5 rounded-r-3xl  w-11/12 md:w-4/5 xl:w-2/4 font-roboto bg-white absolute bottom-14 ">
            <img
              src="./images/cover.jpg"
              alt=""
              className="relative rounded-r-3xl "
            />
            <div className="p-10 absolute ">
              <h1 className="text-yellow-400  text-3xl md:text-5xl  font-lobster ">
                Тогтуун
              </h1>
              <h3 className="text-xl md:text-4xl md:pt-4">
                Таныг миний нэг насны
              </h3>
              <h3 className="text-xl md:text-4xl md:pt-3">
                төрсөн өдөрт урьж байна
              </h3>
              <p className="italic text-xs md:text-xl md:pt-3">
                Төрсөн өдөр болоход
              </p>
              <p className="italic text-xs md:text-xl md:pt-3">
                {timeRemaining.days} өдөр {timeRemaining.hours} цаг{" "}
                {timeRemaining.minutes} минут
              </p>
              <p className="italic text-xs md:text-xl md:pt-2">
                {timeRemaining.seconds} секунд дутуу байна
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
