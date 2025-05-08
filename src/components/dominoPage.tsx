"use client";

import { useDomino } from "@/logic/useDomino";

export default function DominoPage() {
  const {
    domino,
    inputNumber,
    setInputNumber,
    countDoubles,
    sortAsc,
    sortDesc,
    flip,
    removeDup,
    reset,
    removeNumber,
  } = useDomino();

  return (
    <main className="p-6 max-w-md mx-auto text-center text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Domino</h1>

      <p className="mb-4">Double Count: <strong>{countDoubles()}</strong></p>

      <div className="flex flex-wrap justify-center gap-2 mb-6 rounded-4xl">
        {domino.map(([a, b], i) => (
          <div key={i} className="border rounded w-12 h-20 flex flex-col items-center justify-between p-1 bg-white shadow-sm">
            <span>{a}</span>
            <hr className="w-full border-gray-300" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button onClick={sortAsc} className="px-3 py-1 border rounded text-sm">Sort ASC</button>
        <button onClick={sortDesc} className="px-3 py-1 border rounded text-sm">Sort DESC</button>
        <button onClick={flip} className="px-3 py-1 border rounded text-sm">Flip</button>
        <button onClick={removeDup} className="px-3 py-1 border rounded text-sm">Remove Duplicates</button>
        <button onClick={reset} className="px-3 py-1 border rounded text-sm text-red-600">Reset</button>
      </div>

      <div className="flex justify-center items-center gap-2">
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Number to remove"
          className="border p-1 rounded w-32 text-sm"
        />
        <button onClick={removeNumber} className="px-3 py-1 border rounded text-sm">Remove</button>
      </div>
    </main>
  );
}
