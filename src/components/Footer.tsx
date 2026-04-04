"use client";

import React from "react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chelsea-christofera-antonioli-purnomo-189484276/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "mailto:chelseachristoferaantonio@mail.ugm.ac.id",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/chelchr",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/chelllseaaach",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
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
                className="transition-all hover:text-lime-300 hover:scale-110 active:scale-95 block"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
