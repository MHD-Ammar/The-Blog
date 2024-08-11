import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex gap-28">
      <div className="flex-1 flex flex-col gap-14 ">
        <h1 className="text-8xl">Creative Thought Agency.</h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit
          aspernatur placeat, earum eveniet, culpa optio molestiae nam dolorum
          eius non quasi? Dolore suscipit exercitationem quidem quae velit magni
          aperiam!
        </p>
        <div className="flex gap-5">
          <button className="p-4 cursor-pointer border-none bg-[--btn] text-[--bg] text-white">
            Learn More
          </button>
          <button className="p-4 cursor-pointer border-none bg-[--text] text-[--bg]">
            Contacat
          </button>
        </div>
        <div className="relative  w-[500] h-14 ">
          <Image
            src="/brands.png"
            fill
            className="grayscale"
            alt="brands image"
          ></Image>
        </div>
      </div>
      <div className="relative flex-1">
        <Image src="/hero.gif" alt="" fill className="" />
      </div>
    </div>
  );
}
