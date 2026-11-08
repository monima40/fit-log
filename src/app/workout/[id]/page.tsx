import { getWorkoutCard } from "@/lib/api";
import WorkoutDetails from "@/components/WorkoutDetails";
import { Workout } from "@/types/type";
import { notFound } from "next/navigation";


const WorkoutPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;


  const response = await getWorkoutCard();


  
  const workouts: Workout[] = Array.isArray(response)
    ? response
    : response.data;


  const workout = workouts.find(
    (item) => String(item.id) === id
  );


  if (!workout) {
    notFound();
  }


  return <WorkoutDetails workout={workout} />;
};


export default WorkoutPage;
