"use client";

import TailwindProperties from "@/styles/TailwindProperties";
import DefaultProps from "@/utils/DefaultProps";
import Image from "next/image";

function ProfileCard({ className }: DefaultProps<never>) {
  const style: TailwindProperties = {
    size: "w-fit h-fit p-1",
    display: "grid items-center",
    deco: "outline outline-2",
    color: "bg-red-600 outline-red-800",
    position: "relative",
  };
  return (
    <section
      className={`${style.display} ${style.deco} ${style.size} ${style.color} ${style.position} ${className}`}
    >
      <div className="h-7 w-7  bg-slate-900  absolute  top-0 right-0" />
      <div className="bg-black  outline outline-4 -outline-offset-4 outline-red-900  relative">
        <Image src="/profile.png" alt="" width={184} height={184} />
        <div
          title="container"
          className="absolute right-0 -bottom-4  grid justify-items-end gap-2"
        >
          <Stars />
          <h1 className="bg-black text-base px-2 pb-0.5 outline outline-red-800 text-red-600 _font-just">
            @lif31up
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-fit h-fit flex items-center gap-1">
              <div className="w-8 h-8 bg-black" />
              <div className="w-8 h-8 bg-black" />
            </div>
            <Shortcuts />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProfileCard;

function Shortcuts({ className }: DefaultProps<never>) {
  const style: TailwindProperties = {
    size: "w-fit h-fit p-2",
    display: "flex items-center justify-center gap-3",
    color: "bg-black  outline-red-900",
    deco: "rounded-full outline",
  };

  return (
    <div
      className={`${style.size} ${style.display} ${style.color} ${style.deco} ${className}`}
    >
      <Shortcut data={{ src: "/spotify.svg", href: "", title: "Spotify" }} />
      <Shortcut
        data={{ src: "/soundcloud.svg", href: "", title: "Soundcloud" }}
      />
      <Shortcut
        data={{ src: "/instagram.svg", href: "", title: "instagram" }}
      />
    </div>
  );
}

type ShortcutData = {
  href: string;
  src: string;
  title: string;
};
function Shortcut({ data, className }: DefaultProps<ShortcutData>) {
  if (!data) return <></>;
  const { href, src, title }: ShortcutData = data;

  const clickHandler = () => {
    window.open(href);
  };

  const style: TailwindProperties = {
    size: "w-6 h-6",
    display: "flex items-center justify-center",
    color: "bg-slate-900 text-red-600 outline-red-900",
    deco: "rounded-full outline",
  };

  return (
    <button
      title={title}
      className={`${style.size} ${style.display} ${style.text} ${style.color} ${style.deco} ${className}`}
      onClick={clickHandler}
    >
      <img src={src} alt="svg" height={10} />
    </button>
  );
}

function Stars({ className }: DefaultProps<never>) {
  const style: TailwindProperties = {
    size: "w-fit h-fit px-2",
    display: "flex items-center justify-center gap-1",
  };
  return (
    <div className={`${style.size} ${style.display} ${className}`}>
      <img src="/star.svg" alt="" width={20} height={20} className="" />
      <img src="/star.svg" alt="" width={20} height={20} className="" />
      <img src="/star.svg" alt="" width={20} height={20} className="" />
    </div>
  );
}
