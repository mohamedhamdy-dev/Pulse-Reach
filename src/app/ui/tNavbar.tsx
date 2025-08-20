import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    // <header className="absolute left-1/2 container flex -translate-x-1/2 items-center justify-between bg-red-500 p-8 text-white 2xl:max-w-7xl">
    <header className="absolute left-1/2 z-10 container flex -translate-x-1/2 items-center justify-between bg-transparent p-1 text-white 2xl:max-w-7xl">
      <Link href="/">
        <Image
          src="/logo.png"
          width={260}
          height={200}
          alt="Pulse Reach Logo"
          // className="h-32 w-48"
          // className="h-32 w-48"
          className="size-25"
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-5 bg-green-500 capitalize">
          <li>
            <Link href="#about" className="cursor-pointer">
              about us
            </Link>
          </li>
          <li>
            <Link href="#our-services" className="cursor-pointer">
              about us
            </Link>
          </li>
          <li>
            <Link href="#case-studies" className="cursor-pointer">
              about us
            </Link>
          </li>
          <li>
            <Link href="#contact" className="cursor-pointer">
              about us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
