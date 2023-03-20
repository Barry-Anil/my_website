"use client"
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience({experiences}) {
  return (
    <div>
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-fulll flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* ExperienceCard */}
        {
          experiences?.map(experience => (

            <ExperienceCard experience={experience}  key={experience._id}/>
          ))
        }
       
      </div>
    </motion.div>
    </div>
  );
}

export default Experience;
