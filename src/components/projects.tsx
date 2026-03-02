"use client";
import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import SectionHeading from "./section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/app/data";
import { Project } from "@/app/schema";

function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".bento-item");
    if (!items?.length) return;

    gsap.set(items, { opacity: 0, y: 40 });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      gsap.set(items, { opacity: 1, y: 0 });
    };
  }, []);

  const renderLinks = (links: Project["links"]) => {
    return (
      <div className="flex items-center gap-4 flex-wrap">
        {links.map((link) => {
          if (link.label.toLowerCase().startsWith("linkedin")) {
            return (
              <Link key={link.url} href={link.url} target="_blank">
                {Icons.linkedIn("w-4 h-4")}
              </Link>
            );
          }
          if (link.label.toLowerCase().startsWith("github")) {
            return (
              <Link key={link.url} href={link.url} target="_blank">
                {Icons.gitHub({ className: "w-4 h-4" })}
              </Link>
            );
          }
          if (link.label.toLowerCase().startsWith("twitter")) {
            return (
              <Link key={link.url} href={link.url} target="_blank">
                {Icons.twitter({ className: "w-4 h-4 fill-white" })}
              </Link>
            );
          }
          return (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-zinc-600 bg-background/0.4",
              )}
            >
              {link.label}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          );
        })}
      </div>
    );
  };

  const renderSkills = (skills: Project["skills"]) => {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center justify-center gap-2 bg-background/[0.9] p-2 rounded-md border border-zinc-500"
          >
            {skill.icon}
            <span className="text-sm  text-white">{skill.label}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="min-h-screen relative" id="works">
      <div className="project-bento opacity-1 min-w-screen">
        <div className="max-w-6xl mx-auto py-32 px-8 relative min-h-screen" ref={sectionRef}>
          <SectionHeading number={2} title="Projects" />
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[28rem]">
            {projects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <div className="relative h-[16rem] overflow-hidden rounded-xl">
                    <div className="w-full h-full rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black dark:bg-background/[0.5]">
                      <Image
                        src={item.picture.src}
                        alt={item.picture.alt}
                        className="object-cover w-full h-full rounded-xl"
                        width={item.picture.width}
                        height={item.picture.height}
                      />
                    </div>
                    <div className="absolute top-2 left-2 w-full min-h-0 z-10">
                      {renderSkills(item.skills)}
                    </div>
                  </div>
                }
                className={cn(
                  item.className,
                  "dark:bg-background/[0.3] bento-item",
                )}
                icon={renderLinks(item.links)}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

export default Projects;
