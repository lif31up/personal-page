"use client";

import { useState } from "react";
import TailwindProperties from "@/styles/TailwindProperties";
import DefaultProps from "@/utils/DefaultProps";

function ColorChanger({ className }: DefaultProps<never>) {
  const [index, setIndex] = useState<number>(0);
  const colorArray = ["green", "red", "yellow"];

  const clickHandler = () => {
    document.body.style.background = colorArray[index % colorArray.length];
    setIndex(index + 1);
  };

  const style: TailwindProperties = {
    size: "",
    display: "",
    color: "",
    text: "",
  };

  return (
    <button
      className={`${style.size} ${style.display} ${style.color} ${style.text} ${className}`}
      onClick={clickHandler}
    >
      next color
    </button>
  );
}
export default ColorChanger;
