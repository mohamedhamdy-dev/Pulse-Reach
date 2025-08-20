"use client";

import { useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function VerticalVideo({
  youtubeLink,
  youtubeChannelLink,
  src,
  title,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    // <div className="relative h-[100vh] w-full overflow-hidden">
    <div className="group relative w-full overflow-hidden rounded-2xl 2xl:h-150 2xl:w-md">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full cursor-pointer object-cover"
        autoPlay
        loop
        muted
        onClick={togglePlay}
      />

      {/* Top Left: Title */}
      <div className="absolute top-4 left-4 hidden space-y-3 text-white group-hover:block">
        <p className="rounded-md bg-black/50 px-3 py-1 text-sm">{title}</p>
        <Link href={youtubeChannelLink} className="flex items-center gap-1">
          <Image
            src="/youtubeChannelLogo.png"
            width={64}
            height={64}
            alt={title}
            className="size-7 rounded-full"
          />
          <span className="text-sm">Pulse Reach</span>
        </Link>
      </div>

      {/* Bottom Right: Watch on YouTube */}
      <Link
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 bottom-4 hidden items-center gap-1 text-3xl font-bold text-white group-hover:flex"
      >
        <FaYoutube className="text-4xl" />
        <span className="text-2xl">YouTube</span>
      </Link>
    </div>
  );
}
