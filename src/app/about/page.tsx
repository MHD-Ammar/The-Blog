import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="flex gap-28">
        <div className="flex-1 flex flex-col gap-14 ">
          <h2 className="text-[--btn] font-bold text-xl">Ablut Agency</h2>
          <h1 className="text-6xl">
            We create digial ideas that are bigger, bolder, braver and better.
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit
            aspernatur placeat, earum eveniet, culpa optio molestiae nam dolorum
            eius non quasi? Dolore suscipit exercitationem quidem quae velit
            magni aperiam!
          </p>
          <div className="flex gap-5">
            <button className="p-4 cursor-pointer border-none bg-[--btn] text-[--bg] text-white">
              Learn More
            </button>
            <button className="p-4 cursor-pointer border-none bg-[--text] text-[--bg]">
              Contacat
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 flex-col">
              <h1 className="text-2xl font-semibold text-[--btn]">10 K+</h1>
              <p> Year of experience</p>
            </div>
            <div className="flex gap-2 flex-col">
              <h1 className="text-2xl font-semibold text-[--btn]">10 K+</h1>
              <p> Year of experience</p>
            </div>
            <div className="flex gap-2 flex-col">
              <h1 className="text-2xl font-semibold text-[--btn]">10 K+</h1>
              <p> Year of experience</p>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/about.png"
            fill
            alt="about image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
