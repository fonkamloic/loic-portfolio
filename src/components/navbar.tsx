"use client";

import React, { useState, useEffect } from "react";
import Logo from "./ui/logo";
import { navItems } from "@/constants";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignLeft } from "lucide-react";
import { personalInformation } from "@/app/data";

const sectionIds = ["about", "experience", "works", "testimonies", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function renderNav() {
    return (
      <>
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: "link", size: "default" }),
                isActive ? "text-primary" : "text-foreground",
                "hover:text-primary",
                "text-normal font-light tracking-wider",
              )}
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
      </>
    );
  }
  return (
    <div className="bg-background/[0.1] w-full sticky top-0 left-0 z-50">
      <div className="max-w-6xl px-4 md:px-8 flex w-full mx-auto h-24  backdrop-blur relative z-999 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-3 md:flex md:opacity-1">
          {renderNav()}
        </nav>
        <Link
          href="https://github.com/flutterplaza"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "cursor-pointer")}
        >
          See my work
          <ExternalLinkIcon className="w-4 h-4 ml-2" />
        </Link>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button
              size="icon"
              className="rounded-full w-12 h-12"
              variant={"outline"}
            >
              <AlignLeft className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="space-y-5 flex-col flex mx-auto w-max mt-8">
              {renderNav()}
              <Link
                href="https://github.com/flutterplaza"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "cursor-pointer")}
              >
                See my work
                <ExternalLinkIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
