import AboutUs from "./ui/AboutUs";
import BackgroundVideo from "./ui/BackgroundVideo";
import CaseStudies from "./ui/CaseStudy";
import Contact from "./ui/Contact";
import Hero from "./ui/Hero";
import LogoCarousel from "./ui/LogoCarousel";
import Navbar from "./ui/Navbar";
import OurServices from "./ui/OurServices";
import Shorts from "./ui/Shorts";
import Video from "./ui/Video";

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
