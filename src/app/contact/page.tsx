import React from "react";
import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="flex justify-between my-14 max-lg:justify-center">
      <div className="relative flex-1 h-[500] max-lg:hidden">
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-24 flex-1">
        <form action="" className="flex flex-col gap-5 w-3/5 max-lg:w-[90%]">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-3 rounded-md border-none outline-none bg-[--bgSofg] text-[text] "
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 rounded-md border-none outline-none bg-[--bgSofg] text-[text] "
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-3 rounded-md border-none outline-none bg-[--bgSofg] text-[text] "
          />
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-3 rounded-md border-none outline-none bg-[--bgSofg] text-[text] "
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="p-3 rounded-md border-none outline-none bg-[--bgSofg] text-[text] "
          ></textarea>
          <button className="p-4 bg-[--btn] rounded-xl  font-medium">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
