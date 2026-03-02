"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { WorkExperience } from "@/app/schema";
import { workExperiences } from "@/app/data";
import SectionHeading from "./section-heading";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="experience-card glow-card border border-transparent rounded-lg p-4 py-5 flex flex-col md:flex-row md:items-start relative md:gap-6 mb-2">
      <div className="md:w-48 shrink-0 mb-2 md:mb-0 px-4">
        <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">
          {experience.startDate} — {experience.endDate}
        </p>
      </div>

      <div className="flex-1 space-y-2 px-4">
        <h3 className="text-base font-semibold tracking-wide">
          {experience.position}
          <span className="text-primary"> · </span>
          <span className="text-sm text-muted-foreground font-normal">
            {experience.company}
          </span>
        </h3>
        <p className="font-light text-sm text-zinc-400 leading-relaxed">{experience.description}</p>
        {experience.links.length > 0 && (
          <div className="flex gap-3 items-center flex-wrap pt-2">
            {experience.links.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.label}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "border-zinc-700 text-xs bg-background/[0.1]",
                  )}
                  target="_blank"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3 ml-1.5" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".experience-card");
    if (!cards?.length) return;

    gsap.set(cards, { opacity: 0, y: 30 });

    const tween = gsap.to(cards, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      gsap.set(cards, { opacity: 1, y: 0 });
    };
  }, []);

  return (
    <section className="bg-background/[0.2]" id="experience">
      <div className="max-w-4xl mx-auto py-24 px-8" ref={sectionRef}>
        <SectionHeading number={1} title="Work Experience" />
        {workExperiences.map((experience) => {
          return (
            <ExperienceCard experience={experience} key={experience.company} />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
