"use client";

import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chelsea-christofera-antonioli-purnomo-189484276/",
      icon: "/linkedin.webp",
    },
    {
      name: "Mail",
      href: "mailto:chelseachristoferaantonio@mail.ugm.ac.id",
      icon: "/mail.webp",
    },
    {
      name: "GitHub",
      href: "https://github.com/chelchr",
      icon: "/github.webp",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/chelllseaaach",
      icon: "/instagram.webp",
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full h-16 border-t border-fuchsia-300 bg-brand-bg/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12 font-medium text-white/90">
        <div className="text-sm md:text-base">
          © {currentYear} Chelsea Christofera
        </div>

        <ul className="flex gap-6">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-120 active:scale-95 block"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="brightness-0 invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
