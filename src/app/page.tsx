
import Dashboard from "@/components/dashboard/dashboard";

import HeroBanner from "@/components/home/heroBanner";
import CardComponent from "@/components/home/cardComponent";
import Services from "@/components/home/services";


export default function Home() {
  return (
    <>
      <Dashboard />
      <HeroBanner />
      <CardComponent />
      <hr />
      <Services />
    </>
  );
}
