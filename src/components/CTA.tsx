"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/button";

export default function CTA() {
  const email = "chelseachristoferaantonio@mail.ugm.ac.id";
  const subject = "Collaboration Invitation";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-3 items-center transition-all">
      <Button variant="primary" className="hover:scale-110 active:scale-95">
        Culsi
      </Button>
      <Button variant="secondary" className="hover:scale-110 active:scale-95">
        Aura
      </Button>
    </div>
  );
}
