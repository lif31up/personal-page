import Spiner from "@/components/Spiner";
import ShortcutList from "@/components/ShortcutList";
import Image from "next/image";
import ColorChanger from "@/components/ColorChanger";

export default function Home() {
  return (
    <main className="h-screen w-screen  flex items-center justify-center">
      <Spiner width="50rem" height="50rem" circleNumber={8} />
      <section className="grid justify-items-center gap-2 p-2">
        <h1 className="fixed text-white text-xs bg-black px-2 py-1  rotate-2  _font-just">
          Yooü m@ke 3y lif31up!
        </h1>
        <Image
          width={240}
          height={240}
          src="/profile.png"
          alt=""
          className="-mb-12 brightness-125 -z-10"
        />
        <ShortcutList />
      </section>
      <section className="fixed right-0 top-0">
        <ColorChanger />
      </section>
    </main>
  );
}
