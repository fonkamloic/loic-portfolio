"use client";
import React, { use } from "react";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black dark:bg-background/[0.5]"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

function Projects() {
  const [showProjectCarousel, setShowProjectCarousel] =
    React.useState<boolean>(false);
  const [selectedProject, setSelectedProject] = React.useState<number>(0);
  const projectCarouselRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen relative">
      <div className="project-bento opacity-1 min-w-screen">
        <div className="max-w-6xl mx-auto py-32 px-8 relative min-h-screen">
          <h1 className="text-5xl tracking-wider mb-24 font-bold text-center">
            Projects
          </h1>
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn(
                  item.className,
                  "dark:bg-background/[0.3] cursor-pointer",
                )}
                icon={item.icon}
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
        <DialogContent className="max-w-max h-screen w-screen">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>

          <div className="py-32  max-w-screen mx-auto max-h-[80vh] w-screen px-8 ">
            <Carousel
              className="max-w-6xl mx-auto w-full"
              ref={projectCarouselRef}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Projects;
