
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-black">


      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-700 border-t-[#c6ff00]" />


      <div className="text-center">
        <h2 className="text-lg font-bold text-white">
          Loading Workout...
        </h2>


        <p className="mt-2 text-sm text-gray-400">
          Preparing your workout details
        </p>
      </div>


    </div>
  );
}
