"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { fetchPageinfo } from "@/utils/fetchPageinfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProject";
import { fetchSocial } from "@/utils/fetchSocials";

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}) {

  console.log(experiences, "index")

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>My Website</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>

      {/* Contact */}
      <section id="contactme" className="snap-center">
        <ContactMe />
      </section>

     
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="https://i.imgur.com/e2yvD6A.png"
                alt=""
              />
            </div>
          </footer>
        </Link>
     
    </div>
  );
}

export const getStaticProps = async () => {
  const pageInfo = await fetchPageinfo();
  const experiences = await fetchExperience();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocial();

  console.log(socials, "asda");

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
