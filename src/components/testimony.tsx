"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { testimonies } from "@/app/data";
import Image from "next/image";
import SectionHeading from "./section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TestimonyCard({
  testimony,
  onMouseEnter,
  onMouseLeave,
}: {
  testimony: (typeof testimonies)[number];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="flex-shrink-0 w-[22rem] md:w-[28rem] p-1 py-[3rem]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-[28rem] rounded-lg bg-background/[0.2] shadow-md border border-zinc-700 flex flex-col">
        <div
          className={cn(
            "absolute w-24 h-24 rounded-full bg-background/[0.8] -top-[3rem] left-[50%] -translate-x-[50%] border border-zinc-700 z-10",
          )}
        >
          <Image
            priority
            src={testimony.picture.src}
            alt={testimony.picture.alt}
            className="object-cover w-full h-full rounded-full"
            width={testimony.picture.width}
            height={testimony.picture.height}
          />
        </div>
        <div className="flex-1 overflow-y-auto p-8 mt-8 scrollbar-thin">
          <p className="text-center text-normal font-light tracking-wide text-zinc-300">
            {testimony.content}
          </p>
        </div>

        <div className="mt-auto">
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
    </div>
  );
}

function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const wasDragRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragOffsetStartRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame
    let raf: number;

    const wrapOffset = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth <= 0) return;
      while (offsetRef.current < -halfWidth) offsetRef.current += halfWidth;
      while (offsetRef.current > 0) offsetRef.current -= halfWidth;
    };

    const step = () => {
      if (!pausedRef.current && !draggingRef.current) {
        offsetRef.current -= speed;
      }
      wrapOffset();
      track.style.transform = `translateX(${offsetRef.current}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Pointer drag handlers for manual scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      wasDragRef.current = false;
      dragStartXRef.current = e.clientX;
      dragOffsetStartRef.current = offsetRef.current;
      container.setPointerCapture(e.pointerId);
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - dragStartXRef.current;
      if (Math.abs(dx) > 3) wasDragRef.current = true;
      offsetRef.current = dragOffsetStartRef.current + dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      container.releasePointerCapture(e.pointerId);
      container.style.cursor = "grab";
    };

    // Prevent clicks on links after a drag
    const onClick = (e: MouseEvent) => {
      if (wasDragRef.current) {
        e.preventDefault();
        e.stopPropagation();
        wasDragRef.current = false;
      }
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("click", onClick, true);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("click", onClick, true);
    };
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { if (!draggingRef.current) pausedRef.current = false; };

  // Duplicate the list so it loops seamlessly
  const items = [...testimonies, ...testimonies];

  return (
    <div ref={containerRef} className="overflow-hidden cursor-grab select-none touch-pan-y">
      <div ref={trackRef} className="flex gap-6 will-change-transform">
        {items.map((testimony, i) => (
          <TestimonyCard
            key={`${testimony.name}-${i}`}
            testimony={testimony}
            onMouseEnter={pause}
            onMouseLeave={resume}
          />
        ))}
      </div>
    </div>
  );
}

function Testimonies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;
    gsap.set(el, { opacity: 0, y: 30 });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      gsap.set(el, { opacity: 1, y: 0 });
    };
  }, []);

  return (
    <section id="testimonies" ref={sectionRef}>
      <div className="max-w-8xl mx-auto py-32 px-8">
        <SectionHeading number={3} title="Testimonies" />
        <InfiniteMarquee />
      </div>
    </section>
  );
}

export default Testimonies;
