import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import Logo from "./ui/logo";
import { ExternalLink } from "lucide-react";
import { Icons } from "./ui/icons";
import { socialLinks } from "@/app/data";

function Footer() {
  return (
    <div className="border-t-zinc-500 p-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between gap-8">
        <Logo />
        <div className="flex flex-col items-center justify-center md:flex-row gap-2">
          {navItems.map((item) => {
            return (
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "link", size: "default" }),
                  "text-foreground",
                  "hover:text-primary",
                  "text-normal font-light tracking-wider",
                )}
                key={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {socialLinks.map((link) => {
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
    </div>
  );
}

export default Footer;
