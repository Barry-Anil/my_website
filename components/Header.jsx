"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header({ socials }) {
  console.log(socials, "socials")
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* social icons */}
          {socials &&
            socials?.map((social) => {
              return (
                <SocialIcon
                  key={social?._id}
                  url={social?.url}
                  fgColor="gray"
                  bgColor="transparent"
                />
              );
            })}
        </motion.div>
      </div>
      <div>
        {/* <Link href="#contactme">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              url="https://twitter.com/jaketrent"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex  text-sm text-gray-400">
              Get In touch
            </p>
          </motion.div>
        </Link> */}
      </div>
    </header>
  );
}
