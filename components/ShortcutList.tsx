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
        <Shortcut
          text="SoundCloud"
          href="https://l.instagram.com/?u=https%3A%2F%2Fon.soundcloud.com%2FS5Gmy&e=AT348kw8t7POFzLpn2-XaBkJaSIqG_z6g1qT2hs_qlh9eUXrEfv1Ubes0Y_qDNKfpqoKxC2wT6bkLBxBUprX4_6xETVoOmDYG_PGUZfBmO_3PoG6mwz1lmQ"
        />
        <Shortcut
          text="Pinterest"
          href="https://l.instagram.com/?u=https%3A%2F%2Fwww.pinterest.co.kr%2Fifdefme%2F&e=AT3fz5fwlCTcOoONYJkNjASac-FjSjCYb_cY0kG2kpibonrhhuwggUBsP2nkuK5LhCQ6Y2lI6w6-WrMBra-GUk1ywEEbfg8EhlRrEHIlCsj6u44kzGs8kJg"
        />
        <Shortcut
          text="Spotify"
          href="https://l.instagram.com/?u=https%3A%2F%2Fopen.spotify.com%2Fuser%2Fpcsyqo1bjc3yqbgd0rvwwske2%3Fsi%3DiZtDohlKRsi5WWu_TKeZSA&e=AT0d_xYA25gnjJpNO9lZO2NYGY8xRmNAcTHKk1S4EFIpJ7VKuawHyZfAOop39X1eHyiQ9Y6TqpXphDOg191NaOoUak0FHA3R"
        />
        <Shortcut text="Instagram" href="https://www.instagram.com/lif31up" />
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
