
"use client";

import { FaRegClock, FaFire, FaRegStar, FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import { PlanWorkout } from "@/types/type";
import toast from "react-hot-toast";
import { Suspense } from "react";


const MyPlanContent = () => {
    const searchParams = useSearchParams();

    const [plan, setPlan] = useState<PlanWorkout[]>([]);
const [saved, setSaved] = useState<PlanWorkout[]>([]);
const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
const [activeTab, setActiveTab] = useState<"plan" | "saved">(
  searchParams.get("tab") === "saved" ? "saved" : "plan"
);
useEffect(() => {
  setActiveTab(searchParams.get("tab") === "saved" ? "saved" : "plan");
}, [searchParams]);
useEffect(() => {
  const savedPlan = JSON.parse(
    localStorage.getItem("fitlog-plan") || "[]"
  );

  const savedWorkouts = JSON.parse(
    localStorage.getItem("fitlog-saved") || "[]"
  );

  setPlan(
    savedPlan.map((item: PlanWorkout) => ({
      ...item,
      isDone: item.isDone ?? false,
    }))
  );

  setSaved(
    savedWorkouts.map((item: PlanWorkout) => ({
      ...item,
      isDone: item.isDone ?? false,
    }))
  );
}, []);
// const displayedWorkouts = activeTab === "plan" ? plan : saved;
const displayedWorkouts = [...(activeTab === "plan" ? plan : saved)].sort((a, b) => {
  if (sortBy === "duration") return a.duration - b.duration;
  if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
  return b.rating - a.rating;
});

// const toggleComplete = (id: number) => {
//   const updatedPlan = plan.map((workout) =>
//     workout.id === id
//       ? { ...workout, isDone: !workout.isDone }
//       : workout
//   );

//   setPlan(updatedPlan);
//   localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
// };
  
  const markAsDone = (id: number) => {
  const updatedPlan = plan.map((workout) =>
    workout.id === id ? { ...workout, isDone: true } : workout
  );

  setPlan(updatedPlan);
  localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
  toast.success("Workout marked as completed!");
};


    const removeWorkout = (id: number) => {
  if (activeTab === "plan") {
    const updatedPlan = plan.filter((workout) => workout.id !== id);

    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
    window.dispatchEvent(new Event("fitlog-update"));
    toast.success("Workout removed from your plan!");
  } else {
    const updatedSaved = saved.filter((workout) => workout.id !== id);

    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));
    window.dispatchEvent(new Event("fitlog-update"));
    toast.success("Workout removed from saved!");
  }
};

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-10 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p className="mt-2 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-gray-800 bg-[#14161d] p-6 sm:grid-cols-3">
  <div>
    <p className="text-sm text-gray-400">Exercises</p>
    <h2 className="mt-2 text-4xl font-bold text-[#c6ff00]">{plan.length}</h2>
  </div>

  <div className="border-gray-800 sm:border-l sm:pl-8">
    <p className="text-sm text-gray-400">Minutes</p>
    <h2 className="mt-2 text-4xl font-bold">
  {plan.reduce((total, workout) => total + workout.duration, 0)}
</h2>
  </div>

  <div className="border-gray-800 sm:border-l sm:pl-8">
    <p className="text-sm text-gray-400">Calories</p>
    <h2 className="mt-2 text-4xl font-bold">
  {plan.reduce((total, workout) => total + workout.caloriesBurned, 0)}
</h2>
  </div>
</div>

<div className="mt-8 flex items-center justify-between">
  <div className="flex gap-2 rounded-xl border border-gray-800 bg-[#14161d] p-1">
   <button
  onClick={() => setActiveTab("plan")}
//   className={`rounded-lg px-5 py-3 text-sm font-semibold ${
//     activeTab === "plan"
//       ? "bg-[#242832] text-white"
//       : "text-gray-400 hover:text-white"
//   }`} 
className={`rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
  activeTab === "plan"
    ? "bg-[#c5ff00] text-black"
    : "text-gray-400 hover:bg-[#242832] hover:text-white"
}`}
>
  Today's Plan ({plan.length})
</button>

   <button
  onClick={() => setActiveTab("saved")}
//   className={`rounded-lg px-5 py-3 text-sm font-semibold ${
//     activeTab === "saved"
//       ? "bg-[#242832] text-white"
//       : "text-gray-400 hover:text-white"  }`}
className={`rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
  activeTab === "saved"
    ? "bg-[#c5ff00] text-black"
    : "text-gray-400 hover:bg-[#242832] hover:text-white"
}`}
  
>
  Saved ({saved.length})
</button>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-sm text-gray-400">Sort By</span>
   <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
  className="rounded-xl border border-gray-800 bg-[#14161d] px-4 py-3 text-sm text-white"
>
  <option value="duration">Duration</option>
  <option value="calories">Calories</option>
  <option value="rating">Rating</option>
</select>
  </div>
</div>
      
      <div className="mt-8 space-y-4">
  {displayedWorkouts.length === 0 ? (
    <div className="rounded-2xl border border-dashed border-gray-800 bg-[#0f1116] py-20 text-center">
  <h2 className="text-xl font-bold uppercase text-white">Nothing here yet</h2>
  <p className="mt-2 text-sm text-gray-400">
    Browse the library and add a lift to get today moving.
  </p>
  <Link
    href="/#workouts"
    className="mt-6 inline-block rounded-full bg-[#c6ff00] px-6 py-3 text-sm font-bold text-black"
  >
    Go to workouts
  </Link>
</div>
  ) : (
    displayedWorkouts.map((workout) => (
     <div
  key={workout.id}
  className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#14161d] p-6 md:flex-row md:items-center"
>
  <img
    src={workout.image}
    alt={workout.name}
    className="h-[120px] w-full rounded-xl object-cover md:w-[216px]"
  />

  <div className="flex-1">
    <h2 className="text-xl font-bold uppercase">{workout.name}</h2>
    <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

    <div className="mt-4 flex flex-wrap gap-8 text-sm text-gray-400">
      <p className="flex items-center gap-2">
        <FaRegClock className="text-lg" /> {workout.duration} min
      </p>
      <p className="flex items-center gap-2">
        <FaFire className="text-lg" /> {workout.caloriesBurned} kcal
      </p>
      <p className="flex items-center gap-2">
        <FaRegStar className="text-lg" /> {workout.rating}
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <Link
      href={`/workout/${workout.id}`}
      className="rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-white hover:border-[#c6ff00]"
    >
      View Details
    </Link>

    {activeTab === "plan" &&
      (workout.isDone ? (
        <button
          disabled
          className="flex cursor-not-allowed items-center gap-2 rounded-full border border-[#c6ff00]/30 bg-[#171d0c] px-6 py-3 text-sm font-bold text-[#c6ff00]"
        >
          <FaCheck /> Completed
        </button>
      ) : (
        <button
          onClick={() => markAsDone(workout.id)}
          className="flex items-center gap-2 rounded-full bg-[#c6ff00] px-6 py-3 text-sm font-bold text-black"
        >
          <FaCheck /> Mark as Done
        </button>
      ))}

    <button
      onClick={() => removeWorkout(workout.id)}
      aria-label="Remove workout"
      className="p-2 text-gray-400 hover:text-red-400"
    >
      <FaTimes className="text-lg" />
    </button>
  </div>
</div>
    )
)
  )}
  
</div>

      </div>
    </main>
    
  );
};



const MyPlanPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0c0f]" />}>
      <MyPlanContent />
    </Suspense>
  );
};

export default MyPlanPage;