
import { Workout } from "@/types/type";
import Image from "next/image";

const CardDetails = ({ workout }: { workout: Workout }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#15171c] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

      {/* Workout Image */}
      <div className="relative h-52 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Card Content */}
      <div className="space-y-4 p-5">

        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-white">
            {workout.name}
          </h2>

          <span className="shrink-0 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400">
            {workout.difficulty}
          </span>
        </div>

        <p className="text-sm leading-6 text-gray-400">
          {workout.description}
        </p>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-gray-700 px-3 py-1 text-xs text-gray-200"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Details */}
        <div className="grid grid-cols-2 gap-3 border-y border-gray-700 py-4 text-sm">
          <p className="text-gray-400">
            Duration: <span className="font-semibold text-white">{workout.duration} min</span>
          </p>

          <p className="text-gray-400">
            Calories: <span className="font-semibold text-white">{workout.caloriesBurned} kcal</span>
          </p>

          <p className="text-gray-400">
            Sets: <span className="font-semibold text-white">{workout.sets}</span>
          </p>

          <p className="text-gray-400">
            Reps: <span className="font-semibold text-white">{workout.reps}</span>
          </p>

          <p className="text-gray-400">
            Rating: <span className="font-semibold text-yellow-400">★ {workout.rating}</span>
          </p>

          <p className="text-gray-400">
            Equipment: <span className="font-semibold text-white">{workout.equipment}</span>
          </p>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="mb-2 font-semibold text-white">
            Instructions
          </h3>

          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-400">
            {workout.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
};

export default CardDetails;
