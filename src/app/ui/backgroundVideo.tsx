export default function BackgroundVideo() {
  return (
    // <video
    //   autoPlay
    //   loop
    //   muted
    //   playsInline
    //   //   className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    //   className="absolute top-0 left-0 -z-10 h-dvh w-screen object-cover"
    // >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    >
      <source src="/hero-section-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
