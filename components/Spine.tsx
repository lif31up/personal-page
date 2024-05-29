"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import TailwindProperties from "@/styles/TailwindProperties";
import DefaultProps from "@/utils/DefaultProps";

type SpineData = {
  circles: number;
  border: string;
};
function Spine({ data, className }: DefaultProps<SpineData>) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 700) setIsMobile(true);
  }, []);

  if (!data) return <></>;
  let { circles, border }: SpineData = data;

  let size: CSSProperties;
  if (isMobile) {
    size = { width: "120vh", height: "120vh" };
  } else {
    size = { width: "110vw", height: "110vw" };
    circles += 4;
  } // if

  const style: TailwindProperties = {
    color: "fixed",
    size: "w-full h-full",
    display: "flex items-center justify-center",
  };

  return (
    <section
      className={`${style.size} ${style.color} ${style.display} ${className} -z-50`}
      style={{ filter: "blur(1px)" }}
    >
      <div className="absolute  flex items-center justify-center" style={size}>
        <div title="container">
          <_Spine index={circles} border={border} />
        </div>
      </div>
    </section>
  );
}

interface _SpineProps {
  index: number;
  border: string;
}
function _Spine({ index, border }: _SpineProps) {
  if (index === 0) return <></>;
  const css: CSSProperties = {
    border: border,
  };
  return (
    <div className="_spiner" style={css}>
      {<_Spine index={index - 1} border={border} />}
    </div>
  );
}
export default Spine;
