"use client"
import React from 'react'
import { motion } from "framer-motion";
import { urlFor } from '@/sanity';


function ExperienceCard({experience}) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[600px] w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt=''
        />
</div>
        <div className='px-8 md:px-10'>
            <h4 className='text-4xl font-light'>XX XX XX</h4>
            <p className='font-bold text-2xl mt-1'> XAXA XAXA </p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                {
                    experience?.technologies?.map(technology => (

                        <img 
                            className='h-10 w-10 rounded-full'
                            alt=''
                            src=''
                        />
                    ))
                }
              
            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard