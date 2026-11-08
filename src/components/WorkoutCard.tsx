
"use client";

import { Workout } from "@/types/type";



import Link from "next/link";
import Image from "next/image";

import { FaRegClock, FaFire, FaRegStar } from "react-icons/fa";

const WorkOutCard = ({ workoutCard }: { workoutCard: Workout[] }) => {


  return (
    <section  id="library" className="main-container py-10  ">
      <h2 className="font-[var(--font-oswald)] text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl">The Library</h2>

      <p className="mb-8 text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workoutCard.map((workout) => (
          <Link
            key={workout.id}
            href={`/workout/${workout.id}`}
            className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] transition hover:-translate-y-1"
          >
            <div className="relative h-64 w-full">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-bold text-black"
                  >
                    {muscle.toUpperCase()}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold uppercase text-white">
                {workout.name}
              </h3>

              <p className="text-gray-400">{workout.equipment}</p>

              {/* Workout Information */}
              <div className="grid grid-cols-3 border-t border-gray-800 pt-5 text-sm text-gray-400">

                <p className="flex items-center gap-2">
                  <FaRegClock className="text-lg" />
                  {workout.duration} min
                </p>

                <p className="flex items-center gap-2">
                  <FaFire className="text-lg" />
                  {workout.caloriesBurned} kcal
                </p>

                <p className="flex items-center gap-2">
                  <FaRegStar className="text-lg" />
                  {workout.rating}
                </p>

              </div>
            </div>
          </Link>
        ))}
        
      </div>
    
    
    </section>
  );
};

export default WorkOutCard;
