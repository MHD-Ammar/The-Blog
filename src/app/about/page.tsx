import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Image src="/about.png" height={300} width={200} alt="about image" />
    </div>
  );
}
