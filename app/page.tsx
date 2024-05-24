import Spiner from "@/components/Spiner";
import ShortcutList from "@/components/ShortcutList";

export default function Home() {
  return (
    <main className="h-screen w-screen  flex items-center justify-center">
      <Spiner width="50rem" height="50rem" circleNumber={10} />
      <section className="grid justify-items-center gap-2 p-2 bg-red-800 bg-opacity-50">
        <h1 className="fixed font-bold text-xs">Yooü m@ke 3y lif31up!</h1>
        <img
          className="w-28 h-32"
          src="https://orig00.deviantart.net/667e/f/2015/225/c/b/black_cat_pixel_animation_by_sillybluewolf-d95it6h.png"
          alt=""
        />
        <ShortcutList />
      </section>
    </main>
  );
}
