import Image from "next/image";

export default function OurServices() {
  return (
    <div className="container mx-auto space-y-18 py-10 2xl:max-w-7xl">
      <h2 className="rounded-2xl bg-white p-5 text-center text-5xl font-bold">
        <span className="bg-gradient-to-l from-violet-700 to-indigo-900 bg-clip-text text-transparent">
          Our Servcies
        </span>
      </h2>
      <div className="flex justify-between">
        <ServiceCard data={services[0]} />
        <ServiceCard data={services[1]} />
        <ServiceCard data={services[2]} />
      </div>
      <div className="flex justify-between">
        <ServiceCard data={services[3]} />
        <ServiceCard data={services[4]} />
        <ServiceCard data={services[5]} />
      </div>
      <div className="flex justify-between">
        <ServiceCard data={services[6]} />
        <ServiceCard data={services[7]} />
      </div>
    </div>
  );
}

function ServiceCard({ data }) {
  const { image, title } = data;

  return (
    <figure className="relative size-96 overflow-clip rounded-2xl bg-white p-5 text-center">
      <Image
        src={image}
        alt={title}
        // width={64}
        // height={64}
        width={500}
        height={500}
        className="size-full"
      />
      {/* <p className="text-xl capitalize">{title}</p> */}
      {/* <p className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-3xl text-nowrap capitalize"> */}

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-3xl text-nowrap capitalize">
        <span className="bg-gradient-to-l from-violet-700 to-indigo-900 bg-clip-text text-transparent">
          {title}
        </span>
      </p>
    </figure>
  );
}

const services = [
  { title: "media buying", image: "/servcies/mediaBuying.svg" },
  { title: "creative design", image: "/servcies/creativeDesign.svg" },
  { title: "market research", image: "/servcies/marketResearch.svg" },
  { title: "Influencer Marketing", image: "/servcies/influencerMarketing.svg" },
  {
    title: "Social Media Marketing",
    image: "/servcies/socialMediaMarketing.svg",
  },
  { title: "Content Creation", image: "/servcies/contentCreation.svg" },
  { title: "Media Production", image: "/servcies/mediaProduction.jpg" },
  { title: "SEO and SEM", image: "/servcies/SEOwSEM.svg" },
];
