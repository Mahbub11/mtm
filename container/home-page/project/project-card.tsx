"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ item }: { item: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative group w-full rounded-md">
      <Link
      href={item.href}
        className="rounded-md overflow-hidden hover:scale-[0.95]
         transition cursor-pointer transform duration-[1s] ease-[.4,0,.2,1] block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={item.src}
          alt={`${item.title}Img`}
          className="object-cover rounded-md h-[30rem] w-[35rem]
           group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
        />
      </Link>
      <div
        // Adjust position for responsive behavior
        className={`absolute w-fit flex top-[50%] -translate-x-[50%]
         -translate-y-1/2 overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] 
          ${
            item.id % 2 === 0
              ? "sm:left-1/2 md:left-[15%] lg:left-[15%]"
              : "sm:left-1/2 md:left-[90%] lg:left-[90%]"
          }
        `}
      >
        {item.title.split("").map((char: any, i: any) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={hovered ? { y: 0 } : { y: "100%" }}
            transition={{
              delay: i * 0.02,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="sm:text-[45px] md:text-[90px] 
            lg:text-[120px] leading-none inline-block
             uppercase text-btn_clr font-bold text-center pointer-events-none"
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
