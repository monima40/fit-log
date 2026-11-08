"use client";
import { Workout } from "@/types/type";
import toast from "react-hot-toast";
import Image from "next/image";
import { FaPlus, FaRegBookmark } from "react-icons/fa";

const WorkoutDetails = ({ workout }: { workout: Workout }) => {
  


 const addToPlan = () => {
  const plan = JSON.parse(localStorage.getItem("fitlog-plan") || "[]");

  if (plan.some((item: Workout) => item.id === workout.id)) {
    toast.error("Already added to your plan!");
    return;
  }

  if (plan.length >= 5) {
    toast.error("Your plan is full! Maximum 5 lifts per day.");
    return;
  }

  localStorage.setItem("fitlog-plan", JSON.stringify([...plan, workout]));
  window.dispatchEvent(new Event("fitlog-update"));
  toast.success("Workout added to today's plan!");
};


const saveForLater = () => {
  const saved = JSON.parse(localStorage.getItem("fitlog-saved") || "[]");

  if (saved.some((item: Workout) => item.id === workout.id)) {
    toast.error("Already saved!");
    return;
  }

  localStorage.setItem("fitlog-saved", JSON.stringify([...saved, workout]));
  window.dispatchEvent(new Event("fitlog-update"));
  toast.success("Workout saved for later!");
};
    return (
    <section className="main-container grid grid-cols-1 items-start gap-10 py-10 lg:grid-cols-2">

      {/* Left: Large Image */}
      <div className="relative h-[450px] w-full overflow-hidden rounded-2xl md:h-[650px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Right: Details */}
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold uppercase text-white">
            {workout.name}
          </h1>

          <p className="mt-3 text-gray-400">
            {workout.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-semibold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Information */}
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c]">

          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.caloriesBurned} kcal`],
            ["Rating", workout.rating],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-b border-gray-800 px-6 py-5 last:border-0"
            >
              <span className="font-semibold uppercase text-gray-400">
                {label}
              </span>
              <span className="font-semibold text-white">{value}</span>
            </div>
          ))}

        </div>

        {/* Instructions */}
        <div>
          <h3 className="mb-5 text-xl font-bold uppercase text-white">
            Instructions
          </h3>

          <ol className="list-inside list-decimal space-y-4 text-gray-300">
            {workout.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

<div className="mt-8 flex flex-wrap gap-3">
  <button
    onClick={addToPlan}
    className="flex items-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-400"
  >
    <FaPlus />
    Add to today's plan
  </button>

  <button
    onClick={saveForLater}
    className="flex items-center gap-2 rounded-lg border border-gray-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#c6ff00] hover:text-[#c6ff00]"
  >
    <FaRegBookmark />
    Save for later
  </button>
</div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
