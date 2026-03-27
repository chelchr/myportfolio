import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="top-0 left-0 w-full z-50 h-16 border-b border-fuchsia-300 bg-brand-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="flex items-center transition-all hover:scale-110"
        >
          <Image
            src="/INITIAL.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <ul className="flex gap-8 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-all hover:text-lime-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
