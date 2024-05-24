"use client";

function ColorChanger({}) {
  const colorArray = ["green", "red", "yellow"];
  const clickHandler = () => {
    let color: string = document.body.style.background;
    if (color === "red") {
      document.body.style.background = "green";
    } else document.body.style.background = "red";
  };
  return (
    <button
      onClick={clickHandler}
      className="px-1 bg-black text-white text-xs mr-1"
    >
      CHANGE
    </button>
  );
}
export default ColorChanger;
