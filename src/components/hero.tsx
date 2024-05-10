import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const name = "Loic Fonkam";
const summary =
  "Award-winning Flutter developer with over 5 years of experience. Organized, highly motivated problem-solver who is enthusiastic about CyberSecurity and Specializes in secure coding.";
const yearsOfExperience = 5;
function Hero() {
  return (
    <section className="max-w-6xl mx-auto min-w-0 flex flex-col flex-wrap gap-8 md:flex-row px-8 md:min-h-[calc(100vh-6rem)] md:items-center overflow-hidden py-12 pb-32 md:py-0">
      <div className="flex-1 flex flex-col justify-between max-h-[35rem] min-w-0">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-primary text-xl font-light tracking-wider">
            Hi, I&apos;m
          </h3>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg font-light tracking-wide">{summary}</p>

          <div>
            <Button
              variant={"outline"}
              className="mt-12 mb-12 md:mb-0 md:mt-8 inline-flex bg-primary/[0.1] border-primary text-primary"
              size="lg"
            >
              Get in touch
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="gap-4 items-end mt-12 hidden md:flex">
          <h1 className="text-6xl tracking-wider font-extrabold">
            {yearsOfExperience}+
          </h1>
          <div className="flex flex-col gap-1">
            <p className=" uppercase font-light tracking-wider">years</p>
            <p className=" uppercase font-light tracking-wider">
              of experience
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 self-stretch flex items-center justify-end min-w-0 mr-8">
        <div className="container relative shadow-md z-10 w-full -rotate-6 h-full origin-center min-w-[15rem] min-h-[18rem] max-h-[28rem] max-w-[22rem] md:max-h-[25rem] md:max-w-[25rem] bg-background/[0.1] border border-background/[0.5] rounded-xl">
          <div className="back-container absolute w-full h-full bg-background/[0.2] shadow-md rounded-xl rotate-12 backdrop-blur origin-center border border-background/[0.5]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
