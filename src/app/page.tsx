import HeroBanner from "@/components/home/heroBanner";
import CardComponent from "@/components/home/cardComponent";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CardComponent />
      <hr />
      <Services />
    </>
  );
}
