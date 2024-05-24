"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import TailwindProperties from "@/styles/TailwindProperties";

interface SpinerInterface {
  width: string;
  height: string;
  circleNumber: number;
}
function Spiner({ width, height, circleNumber }: SpinerInterface) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 700) setIsMobile(true);
  }, []);
  let size: CSSProperties;
  if (isMobile) {
    size = { width: "120vh", height: "120vh" };
  } else {
    size = { width: "110vw", height: "110vw" };
    circleNumber += 4;
  } // if

  const style: TailwindProperties = {
    xl: "",
    base: "fixed  w-full h-full flex items-center justify-center",
  };
  return (
    <section
      className={`${style.base} ${style.xl} -z-50`}
      style={{ filter: "blur(2px)" }}
    >
      <div className="absolute  flex items-center justify-center" style={size}>
        <div>
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
