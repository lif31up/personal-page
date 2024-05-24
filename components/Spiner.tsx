import React from "react";
import TailwindProperties from "@/styles/TailwindProperties";

interface SpinerInterface {
  width: string;
  height: string;
  circleNumber: number;
}
function Spiner({ width, height, circleNumber }: SpinerInterface) {
  const style: TailwindProperties = {
    xl: "",
    base: "fixed  w-full h-full flex items-center justify-center",
  };
  return (
    <section
      className={`${style.base} ${style.xl} -z-50`}
      style={{ filter: "blur(2px)" }}
    >
      <div
        className="absolute  flex items-center justify-center"
        style={{ width: width, height: height }}
      >
        <div className="_spiner-container">
          <_Spiner index={circleNumber} />
        </div>
      </div>
    </section>
  );
}
function _Spiner({ index }: { index: number }) {
  if (index === 0) return <></>;
  return <div className="_spiner">{<_Spiner index={index - 1} />}</div>;
}
export default Spiner;
