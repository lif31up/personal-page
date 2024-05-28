"use client";

import TailwindProperties from "@/styles/TailwindProperties";

function ShortcutList({}) {
  const style: TailwindProperties = {
    xl: "",
    base: "w-fit h-fit  grid items-center justify-items-center gap-1",
  };
  return (
    <div className={`${style.xl} ${style.base}`}>
      <div className="grid gap-1 w-56  _font-just">
        <Shortcut
          text="SoundCloud"
          href="https://on.soundcloud.com/fuMxVfuHTdSG88EN9"
        />
        <Shortcut
          text="Spotify"
          href="https://open.spotify.com/user/pcsyqo1bjc3yqbgd0rvwwske2?si=iZtDohlKRsi5WWu_TKeZSA&nd=1&dlsi=f7bede0a46424145"
        />
        <Shortcut text="Instagram" href="https://www.instagram.com/lif31up" />
        <Shortcut text="BandCamp" href="https://bandcamp.com/solve_anything" />
      </div>
    </div>
  );
}

export default ShortcutList;

function Shortcut({ text, href }: { text: string; href: string }) {
  const clickHandler = () => window.open(href);
  const style: TailwindProperties = {
    xl: "",
    base: "w-full h-fit px-4 py-2 text-white  shadow-lg  bg-black",
  };
  return (
    <button
      onClick={clickHandler}
      className={`${style.xl} ${style.base} relative  bg-opacity-20`}
    >
      <>{text}</>
    </button>
  );
}
