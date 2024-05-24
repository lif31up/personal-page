import Spiner from "@/components/Spiner";
import ShortcutList from "@/components/ShortcutList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen  flex items-center justify-center">
      <Spiner width="50rem" height="50rem" circleNumber={10} />
      <section className="grid justify-items-center gap-2 p-2 bg-red-800 bg-opacity-50">
        <h1 className="fixed font-bold text-xs">Yooü m@ke 3y lif31up!</h1>
        <Image width={108} height={92} src="/cat.gif" alt="" />
        <ShortcutList />
      </section>
    </main>
  );
}
