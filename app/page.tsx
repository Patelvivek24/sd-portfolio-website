import { CareerJourney } from "@/components/Home/Career-Journey/page";
import { Education } from "@/components/Home/Education/page";
// import { Footer } from "@/components/Home/Footer/page";
import { ExecutiveProfile } from "@/components/Home/Executive-Profile/page";
import { HeroBanner } from "@/components/Home/HeroBanner/page";
import { Ventures } from "@/components/Home/Ventures/page";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ExecutiveProfile />
      <Ventures />
      <CareerJourney />
      <Education />
      {/* <Footer /> */}
    </>
  );
}
