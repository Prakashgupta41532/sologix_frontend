import { Button } from "@nextui-org/react";
import { Hero } from "@/components/Home/Hero";
import { FreeElectricity } from "@/components/Home/FreeElectricity";
import { TrustedBy } from "@/components/Home/TrustedBy";
import { AboutUs } from "@/components/Home/AboutUs";
import { ExploreProducts } from "@/components/Home/ExploreProducts";
import { WhySolar } from "@/components/Home/WhySolar";
import { OurJourney } from "@/components/Home/OurJourney";



export default function Home() {
  return (
    <div>
      <Hero />
      <FreeElectricity />
      <TrustedBy />
      <AboutUs />
      <ExploreProducts />
      <WhySolar />
      <OurJourney />
      
    </div>
  );
}
