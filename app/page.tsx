'use client';

import { useState } from 'react';

const colours = ['bg-slate-100', 'bg-violet-200', 'bg-amber-200'] as const;

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center gap-8 transition-colors duration-500 ${colours[index]}`}>
      <h1 className="text-6xl font-bold tracking-tight">Pipeline Works</h1>
      <button
        onClick={() => setIndex((i) => (i + 1) % colours.length)}
        className="px-8 py-3 bg-black text-white text-lg rounded-xl hover:bg-gray-800 active:scale-95 transition-all"
      >
        Change colour
      </button>
    </main>
  );
}
