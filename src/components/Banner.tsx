
import React from "react";

const Banner = () => {
  return (
    
     <section className="w-full bg-black px-3 sm:px-4 my-6 md:my-10">

       <div className="hero w-full main-container  min-h-[330px] rounded-xl bg-[#15171c] px-2 py-4 sm:px-4 md:py-6 lg:px-6">

        <div className="hero-content flex-col-reverse justify-between gap-6 w-full max-w-none px-4 py-8 md:flex-row-reverse md:gap-8 md:px-10">

          {/* Banner Image */}
          <img
            src="/assets/banner.png"
            alt="Workout illustration"
            className="w-full max-w-[220px] object-contain md:max-w-[250px] md:ml-auto"
          />

          {/* Banner Content */}
          <div className="flex-1 text-center sm:text-left">

            <p className="  mb-5 text-xs font-bold tracking-wider text-[#c5ff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <button className="btn-primary ">
              BROWSE WORKOUTS
            </button>

          </div>
        </div>
      </div>
   
     </section>
  );
};

export default Banner;
