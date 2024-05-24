"use client";

import TailwindProperties from "@/styles/TailwindProperties";

function ShortcutList({}) {
  const style: TailwindProperties = {
    xl: "",
    base: "w-fit h-fit  grid items-center justify-items-center gap-1",
  };
  return (
    <div className={`${style.xl} ${style.base}`}>
      <div className="grid gap-1 w-56">
        <Shortcut text="SoundCloud" href="soundcloud.com" />
        <Shortcut text="Pinterest" href="soundcloud.com" />
        <Shortcut text="Instagram" href="soundcloud.com" />
        <Shortcut text="Spotify" href="soundcloud.com" />
      </div>
    </div>
  );
}

export default ShortcutList;

function Shortcut({ text, href }: { text: string; href: string }) {
  const clickHandler = () => window.open(href);
  const style: TailwindProperties = {
    xl: "",
    base: "w-full h-fit px-4 py-2  bg-black text-white",
  };
  return (
    <button onClick={clickHandler} className={`${style.xl} ${style.base}`}>
      {text}
    </button>
  );
}
