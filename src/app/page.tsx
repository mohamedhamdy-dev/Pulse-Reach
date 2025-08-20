import AboutUs from "./Components/AboutUs";
import BackgroundVideo from "./Components/BackgroundVideo";
import CaseStudies from "./Components/CaseStudy";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";

import LogoCarousel from "./Components/LogoCarousel";
import Navbar from "./Components/Navbar";
import OurServices from "./Components/OurServices";
import Shorts from "./Components/Shorts";
import Video from "./Components/Video";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Puma_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
];

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <Navbar />
        <Hero />
        <AboutUs />
        <OurServices />
        {/* <CaseStudies /> */}
        <Video
          src="/videos/Khyam ... A Tent For The Soul.mp4"
          youtubeLink="https://youtu.be/W67mTedWhQg"
          title="Khyam ... A Tent For The Soul"
        />
        <Shorts />
        <LogoCarousel logos={logos} />
        <Contact />
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
