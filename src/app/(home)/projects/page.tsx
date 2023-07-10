"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "@/styles/globals.css"
import Project from "@/components/Project"
const Projects = () => {
  const [projectsCounter, setProjectsCounter] = useState(0);
  const [sponsersCounter, setSponsersCounter] = useState(0);
  useEffect(() => {
    const numCounter = () => {
      if (projectsCounter < 20) {
        setProjectsCounter((num) => num + 1);
      }

      if (sponsersCounter < 10) {
        setSponsersCounter((num) => num + 1);
      }
    };
    
    const intervalId = setInterval(numCounter, 200);

    return () => clearInterval(intervalId);
  }, [projectsCounter, sponsersCounter]);

  return (
    <>
      <div>
        <Image
          src="/projects/projectsHero.png"
          alt="Projects hero BG"
          width={1440}
          height={500}
          quality={100}
          className="h-[20vh] w-screen md:h-full projectsHeroSlideIn"
        ></Image>
      </div>
      <div className="projectsAnimation mt-8 flex flex-col items-center justify-center duration-500 ease-out smm:mt-2">
        <h1 className="animate-[fadeinout_6s] bg-gradient-to-b  from-[#5051F9] to-[#AE86E0] bg-clip-text text-3xl font-bold text-transparent md:text-4xl md:h-[3rem] lg:text-5xl lg:h-[4rem] smm:h-[2.5rem]">
          Projects
        </h1>
        <div className="text-md mt-2 md:text-lg lg:text-xl">
          <p className="animate-[fadeinout_12s] text-center">
            <span>We Are Proud Of Our </span>
            <span className="bg-gradient-to-b font-semibold from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent">
              Community Members
            </span>
          </p>
          <div className="mt-4 flex justify-between bg-gradient-to-b from-[#5051F9] to-[#AE86E0] bg-clip-text text-transparent animate-[fadeinout_16s]">
            <div className="flex flex-col ">
              <span className="text-2xl font-bold md:text-3xl">{projectsCounter}+</span>
              <span className="text-xl font-semibold md:text-2xl">Finished Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-3xl">{sponsersCounter}+</span>
              <span className="text-xl font-semibold md:text-2xl">Sponsers</span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex h-[45px] w-1/3 min-w-[340px] items-center justify-between rounded-full border-[1px] border-[#878787] bg-[#252525] bg-opacity-50 pl-2 pr-1 md:h-[50px]">
          <span className="px-2">
            <FaSearch className="text-sm text-center text-[#aba8a8] md:text-base" />
          </span>
          <input
            type="search"
            id="search-input"
            placeholder="Search Projects here"
            className="h-full w-full border-none bg-[#252525] bg-opacity-0 px-2 text-sm outline-none md:text-base"
          />
          <span className="flex h-[85%] text-center items-center rounded-full bg-[#86A1FF] px-6 py-2 text-base md:text-lg">
            Search
          </span>
        </div>
      </div>
      <Project />
    </>
  );
};

export default Projects;
