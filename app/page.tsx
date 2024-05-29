import Spine from "@/components/Spine";
import ShortcutList from "@/components/ShortcutList";
import Image from "next/image";
import ColorChanger from "@/components/ColorChanger";
import TailwindProperties from "@/styles/TailwindProperties";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const style: TailwindProperties = {
    size: "w-screen h-screen",
    display: "flex items-center justify-center",
    color: "",
    deco: "",
  };
  return (
    <main
      className={`${style.size} ${style.display} ${style.color} ${style.deco}`}
    >
      <h1 className="absolute  bottom-52  outline outline-2  text-red-900 font-bold _font-slab bg-slate-900 px-2">
        Looking For Crew Now!
      </h1>
      <Spine data={{ circles: 8, border: "" }} />
      <ProfileCard />
    </main>
  );
}
