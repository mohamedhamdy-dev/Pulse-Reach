import AboutUs from "./ui/aboutUs";
import BackgroundVideo from "./ui/backgroundVideo";
import CaseStudies from "./ui/caseStudy";
import Hero from "./ui/hero";
import Navbar from "./ui/navbar";
import OurServices from "./ui/ourServices";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <Navbar />
        <Hero />
        <AboutUs />
        <OurServices />
        {/* <CaseStudies /> */}
      </div>
    </>
  );
}
