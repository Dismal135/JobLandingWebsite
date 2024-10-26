import HeroSlideShow from "@/components/ui/heroSlideshow";
import Websites from "@/components/ui/website";

export default function Home() {
  return (
    <>
      <nav>
        <h1>Websites</h1>
      </nav>
      <HeroSlideShow />
      <main>
        <Websites />
      </main>
    </>
  );
}
