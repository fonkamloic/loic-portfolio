"use client";
import React, { use } from "react";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import { projects } from "@/app/data";
import { Project } from "@/app/schema";

function Projects() {
  const [showProjectCarousel, setShowProjectCarousel] =
    React.useState<boolean>(false);
  const [selectedProject, setSelectedProject] = React.useState<number>(0);
  const projectCarouselRef = React.useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen relative">
      <div className="project-bento opacity-1 min-w-screen">
        <div className="max-w-6xl mx-auto py-32 px-8 relative min-h-screen">
          <h1 className="text-5xl tracking-wider mb-24 font-bold text-center">
            Projects
          </h1>
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
            {projects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <div className="relative min-h-[6rem]">
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black dark:bg-background/[0.5]">
                      <Image
                        src={item.picture.src}
                        alt={item.picture.alt}
                        className="object-cover w-full h-full rounded-xl"
                        width={item.picture.width}
                        height={item.picture.height}
                      />
                    </div>
                    <div className="absolute top-2 left-2 w-full min-h-0 z-1">
                      {renderSkills(item.skills)}
                    </div>
                  </div>
                }
                className={cn(
                  item.className,
                  "dark:bg-background/[0.3] cursor-pointer",
                )}
                icon={renderLinks(item.links)}
                onClick={() => {
                  console.log("clicked", i);
                  setSelectedProject(i);
                  setShowProjectCarousel(true);
                }}
              />
            ))}
          </BentoGrid>
        </div>
      </div>

      <Dialog
        open={showProjectCarousel}
        onOpenChange={(value: boolean) => setShowProjectCarousel(value)}
      >
        <DialogContent className="max-w-max h-screen w-screen p-0">
          <SimpleBar className="py-32  max-w-screen mx-auto w-screen max-h-screen h-screen ">
            <Carousel
              className="max-w-6xl mx-auto w-full px-8"
              ref={projectCarouselRef}
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={project.title} className="">
                    <div className="p-1 max-w-6xl mx-auto  py-12 px-8 border rounded-lg md:border-none">
                      <h2 className="font-bold text-2xl md:text-4xl tracking-wider mb-12 ">
                        {project.title}
                      </h2>
                      <div className="mb-8">{renderSkills(project.skills)}</div>

                      <Image
                        src={project.picture.src}
                        alt={project.picture.alt}
                        className="object-cover w-full h-[20rem] md:h-[30rem] rounded-xl mb-8"
                        width={project.picture.width}
                        height={project.picture.height}
                      />

                      <div className="mb-8">{renderLinks(project.links)}</div>
                      <p className="text-normal font-light tracking-wide">
                        {project.longDescription}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 md:-left-12" />
              <CarouselNext className="right-1 md:-right-12" />
            </Carousel>
          </SimpleBar>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Projects;
