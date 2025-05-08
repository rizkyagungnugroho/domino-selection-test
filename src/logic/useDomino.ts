"use client";
import { useState } from "react";

export type Domino = [number, number];

export function useDomino() {
  const initialDomino: Domino[] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 3],
  ];

  const [domino, setDomino] = useState<Domino[]>(initialDomino);
  const [inputNumber, setInputNumber] = useState("");

  const countDoubles = () => domino.filter(([a, b]) => a === b).length;

  const sortAsc = () => {
    setDomino([...domino].sort((a, b) => a[0] + a[1] - (b[0] + b[1])));
  };

  const sortDesc = () => {
    setDomino([...domino].sort((a, b) => b[0] + b[1] - (a[0] + a[1])));
  };

  const flip = () => {
    setDomino(domino.map(([a, b]) => [b, a]));
  };

  const removeDup = () => {
    const unique = domino.filter(
      ([a, b], index, self) =>
        index ===
        self.findIndex(
          ([x, y]) => (x === a && y === b) || (x === b && y === a)
        )
    );
    setDomino(unique);
  };

  const reset = () => setDomino(initialDomino);

  const removeNumber = () => {
    const num = parseInt(inputNumber);
    if (!isNaN(num)) {
      setDomino(domino.filter(([a, b]) => a !== num && b !== num));
    }
  };

  return {
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
  };
}
