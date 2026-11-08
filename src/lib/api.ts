export const getWorkoutCard = async () =>{

    const res = await fetch('https://api.api-store.workers.dev/api/fitlog',{cache:"no-store"},

    );

     if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
    return res.json();
}