"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const linkStyle = "min-w-20 p-1 text-center rounded-3xl";
  const session = true;
  const isAdmin = true;

  const Menu = ({ cls = "" }) => (
    <div className={`flex items-center gap-5 min-w ${cls}`}>
      <Link
        href="/"
        className={
          pathName === "/" ? `bg-[--text] text-[--bg] ${linkStyle}` : ""
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathName === "/about" ? `bg-[--text] text-[--bg] ${linkStyle}` : ""
        }
      >
        About
      </Link>
      <Link
        href="/contact"
        className={
          pathName === "/contact" ? `bg-[--text] text-[--bg] ${linkStyle}` : ""
        }
      >
        Contact
      </Link>
      <Link
        href="/blog"
        className={
          pathName === "/blog" ? `bg-[--text] text-[--bg] ${linkStyle}` : ""
        }
      >
        Blog
      </Link>
      {session ? (
        <>
          {isAdmin && <Link href="/admin">Admin</Link>}
          <button className="p-1 cursor-pointer font-semibold bg-[--text] text-[--bg]">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
  return (
    <div className="h-24 flex justify-between items-center">
      <div className="text-2xl font-bold none ">
        <Link href="./">THE-BLOG</Link>
      </div>
      <Menu cls="max-lg:hidden " />
      <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <Menu cls="flex-col h-screen absolute top-24 right-0 w-2/4 lg:hidden " />
      )}
    </div>
  );
}
