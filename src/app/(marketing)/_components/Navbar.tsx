"use client";
import { useContext, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ContextActive";
import clsx from "clsx";
import { cn } from "@/lib/utils";
export function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="flex justify-between items-center shadow-2xl fixed p-6 top-0 w-full  bg-black/15 backdrop-blur-md text-balance z-[999]   ">
      {/* Brand Logo */}
      <motion.nav
        initial={{ y: 100, x: "50%", opacity: 0 }}
        animate={{ y: 0, x: "50%", opacity: 1 }}
        className="flex items-center"
      >
        <Link href="/" className="flex justify-start">
          <BrandLogo />
        </Link>
      </motion.nav>

      {/* Center Links */}
      <div className="hidden md:flex justify-center items-center gap-10 bg-black backdrop-blur-sm rounded-3xl flex-col  border border-white/[0.2] shadow-xl p-[0.7rem] px-12 fixed  top-[0.15rem]  left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0 ">
        <ul className="flex justify-center items-center w-[22rem] flex-wrap m-[-1rem] gap-y-1 text-[0.9rem] font-medium text-gray-200  sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className=" 2/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 130,
                damping: 9,
                duration: 0.3,
              }}
            >
              <Link
                // className={clsx(
                //   "flex w-full justify-center items-center px-[0.81rem] ",
                //   { " text-gray-950 ": activeSection === link.name }
                // )}
                className={clsx(
                  "flex w-full justify-center items-center px-[0.81rem]  py-1  hover:text-gray-100/25 transition ",
                  { " text-gray-100 ": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100/10 py-5 border border-white/5  flex justify-center   items-center  
 -z-10 w-[5rem]  rounded-full absolute"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                    {" "}
                  </motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex justify-end items-center  px-4 py-2 rounded-[4px] border border-black bg-white/90 text-black  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition  duration-20 ">

   
        <SignedIn>
          <Link href="/dashboard" className="text-lg font-medium">
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">Login</SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
