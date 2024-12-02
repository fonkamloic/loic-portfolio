import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { testimonies } from "@/app/data";
import Image from "next/image";

function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-8xl mx-auto">
      <CarouselContent className="-ml-1">
        {testimonies.map((testimony) => (
          <CarouselItem
            key={testimony.name}
            className="pl-1 md:basis-2/3 lg:basis-3/5 "
          >
            <div className="p-1 py-[3rem]">
              <div className="relative min-h-[14rem] rounded-lg bg-background/[0.2] shadow-md border border-zinc-700">
                <div
                  className={cn(
                    "absolute w-24 h-24 rounded-full bg-background/[0.8] -top-[3rem] left-[50%] -translate-x-[50%] border border-zinc-700",
                  )}
                >
                  <Image
                    priority
                    src={testimony.picture.src}
                    alt={testimony.picture.alt}
                    className="object-cover w-full h-full rounded-full mb-8"
                    width={testimony.picture.width}
                    height={testimony.picture.height}
                  />
                </div>
                <p className="text-center text-normal font-light tracking-wide text-zinc-300 p-8 mt-8">
                  {testimony.content}
                </p>

                <Separator className="bg-zinc-700" />
                <div className="space-y-2 p-5">
                  <div className="flex items-center gap-4 flex-wrap justify-center divide-y divide-gray-700">
                    <p className="text-center font-semibold text-normal tracking-wide">
                      {testimony.name}
                    </p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      {testimony.links.map((link) => {
                        if (link.label.toLowerCase().startsWith("linkedin")) {
                          return (
                            <Link
                              key={link.url}
                              href={link.url}
                              target="_blank"
                            >
                              {Icons.linkedIn("w-4 h-4")}
                            </Link>
                          );
                        }
                        if (link.label.toLowerCase().startsWith("github")) {
                          return (
                            <Link
                              key={link.url}
                              href={link.url}
                              target="_blank"
                            >
                              {Icons.gitHub({ className: "w-4 h-4" })}
                            </Link>
                          );
                        }
                        if (link.label.toLowerCase().startsWith("twitter")) {
                          return (
                            <Link
                              key={link.url}
                              href={link.url}
                              target="_blank"
                            >
                              {Icons.twitter({ className: "w-4 h-4" })}
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
                              "border-gray-700 bg-background/0.4",
                            )}
                          >
                            {link.label}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-center text-sm font-light tracking-wide text-zinc-400">
                    {testimony.position}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function Testimonies() {
  return (
    <section id="testimonies">
      <div className="max-w-8xl mx-auto py-32 px-8">
        <h1 className="text-5xl tracking-wider mb-12 font-bold text-center">
          Testimonies
        </h1>
        <div className="px-8">
          <CarouselSpacing />
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
