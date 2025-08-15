export default function Navbar() {
  return (
    <header className="container mx-auto flex items-center justify-between bg-red-500 p-8 text-white">
      <div>Logo</div>
      <nav>
        <ul className="flex items-center gap-2 bg-green-500 capitalize">
          <li>about us</li>
          <li>our services</li>
          <li>case studies</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
