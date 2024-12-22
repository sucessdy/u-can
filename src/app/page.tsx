"use client";

import React, { useState } from "react";
import OutputScreen from "./calculator/OutputScreen";
import Button from "./calculator/Button";
import { evaluate } from "mathjs";
const btnValues = [
  ["C", "DEL", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Homepage() {
  const [calc, setCalc] = useState("");
  const handleClick = (btnValue: string | number) => {
    if (btnValue === "C") {
      setCalc("");
    } else if (btnValue === "=") {
      try {
        const value = evaluate(calc.replace("X", "*"));

        setCalc(value.toString());
      } catch {
        setCalc("Error");
      }
    } else if (btnValue === "DEL") {
      setCalc((prev) => prev.slice(0, -1));
    } else {
      setCalc((prev) => prev + btnValue);
    }
  };
  return (
    <div className="max-w-sm w-full mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100/20 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] ">
      <OutputScreen value={calc} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {btnValues.flat().map((btn, id) => (
          <Button key={id} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}
