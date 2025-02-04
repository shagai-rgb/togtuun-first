"use client";
import { useEffect, useState } from "react";

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
  return (
    <section id="hero">
      <div className="grid items-center  relative">
        <img
          className="h-screen w-screen object-cover     "
          src="./images/herobg.jpeg"
          alt="A boy with a hat image"
        />
        <div className="grid gap-5 p-10 rounded-r-3xl   w-11/12 md:w-4/5 xl:w-2/4 font-roboto bg-white absolute bottom-14 ">
          <h1 className="text-yellow-400  text-7xl md:text-8xl  font-lobster ">
            Тогтуун
          </h1>
          <h3 className="text-3xl md:text-6xl">
            Таныг миний нэг насны төрсөн өдөрт урьж байна
          </h3>
          <p>
            Төрсөн өдөр болоход {timeRemaining.days} өдөр {timeRemaining.hours}{" "}
            цаг {timeRemaining.minutes} минут {timeRemaining.seconds} секунд
            дутуу байна
          </p>
        </div>
      </div>
    </section>
  );
}
