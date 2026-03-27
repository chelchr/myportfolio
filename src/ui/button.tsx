import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-2.5 rounded-full font-semibold transition-all active:scale-95 text-sm md:text-base";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
