"use client";

import { useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

interface BackgroundVideoProps {
  src: string; // local mp4 or remote video file
  title: string;
  youtubeLink: string;
}

export default function BackgroundVideo({
  src,
  title,
  youtubeLink,
}: BackgroundVideoProps) {
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

  const copyLink = () => {
    navigator.clipboard.writeText(youtubeLink);
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
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
      <div className="absolute top-4 left-4 rounded-md bg-black/50 px-3 py-1 text-sm text-white">
        {title}
      </div>

      {/* Top Right: Copy link */}
      <button
        onClick={copyLink}
        className="absolute top-4 right-4 cursor-pointer rounded-md bg-black/50 p-2 text-white hover:bg-black/70"
        aria-label="Copy YouTube Link"
      >
        <FiCopy size={18} />
      </button>

      {/* Bottom Right: Watch on YouTube */}
      <Link
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        // className="absolute right-4 bottom-4 flex items-center gap-2 text-white"
        className="absolute right-4 bottom-4 flex items-center gap-2 text-3xl font-bold text-white"
      >
        {/* <FaYoutube size={60} />
        <span className="text-4xl">Youtube</span> */}
        <FaYoutube className="text-5xl" />
        <span className="text-3xl">YouTube</span>
      </Link>
    </div>
  );
}
