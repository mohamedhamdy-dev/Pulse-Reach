import AboutUs from "./ui/aboutUs";
import BackgroundVideo from "./ui/backgroundVideo";
import CaseStudies from "./ui/caseStudy";
import Hero from "./ui/hero";
import Navbar from "./ui/navbar";
import OurServices from "./ui/ourServices";
import Shorts from "./ui/shorts";
import Video from "./ui/video";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <Navbar />
        <Hero />
        <AboutUs />
        <OurServices />
        {/* <CaseStudies /> */}
        {/* <Video
          src="/videos/Khyam ... A Tent For The Soul.mp4"
          youtubeLink="https://youtu.be/W67mTedWhQg"
          title="Khyam ... A Tent For The Soul"
        /> */}
        <Shorts />
      </div>
    </>
  );
}

{
  /* <iframe
  width="1259"
  height="708"
  src="https://www.youtube.com/embed/W67mTedWhQg"
  title="Khyam ... A Tent For The Soul"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe> */
}
