# 🏋️ FitLog – Workout Library

**Train with intent. Log every set.**

FitLog is a workout planning web application. Users can explore workouts, create daily plans, and save their favorite exercises.

**Live Demo:** [FitLog](https://a6-fit-log-workout.vercel.app/)  
**GitHub Repository:** [Add your repository link here]

## About

FitLog helps users manage their daily workouts. Users can view workout details, add up to 5 exercises to Today's Plan, save workouts for later, and track their progress.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Icons
- React Hot Toast
- localStorage

## Features

- Browse different workouts.
- View workout details and instructions.
- Add up to 5 workouts to Today's Plan.
- Save workouts for later.
- Mark workouts as completed.
- Remove workouts from lists.
- Track exercises, minutes, and calories.
- Live Plan and Saved counters.
- Responsive design for all devices.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   └── workout/
│       └── [id]/
│           ├── page.tsx
│           └── loading.tsx
├── components/
│   ├── Banner.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WorkoutCard.tsx
│   ├── CardDetails.tsx
│   └── WorkoutDetails.tsx
├── lib/
│   └── api.ts
└── types/
    └── type.ts
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/monima40/fit-log.git
```

Go to the project folder:

```bash
cd fit-log
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Deployment

Deployed on **Vercel**.
