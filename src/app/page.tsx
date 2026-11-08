import Banner from "@/components/Banner";
import WorkoutCard from "@/components/WorkoutCard";
import { getWorkoutCard } from "@/lib/api";
import Image from "next/image";
import { Workout } from "@/types/type";

  

export default async function Home() {
  
   const workoutCard = await getWorkoutCard();

  // console.log("Workout Data:", workoutCard);
  return (
    <div >
    <Banner />
     
      <WorkoutCard workoutCard={workoutCard} />
    </div>
  );
}

export const instant = false;