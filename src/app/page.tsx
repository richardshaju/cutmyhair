
import Dashboard from "@/components/dashboard/dashboard";

import HeroBanner from "@/components/home/heroBanner";
import Services from "@/components/home/services";


export default function Home() {
  return (
    <>
      <Dashboard />
      <HeroBanner />
      <hr />
      <Services />
    </>
  );
}
