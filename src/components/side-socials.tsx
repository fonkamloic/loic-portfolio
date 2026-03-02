"use client";

import Link from "next/link";
import { Icons } from "./ui/icons";
import { socialLinks } from "@/app/data";

function SideSocials() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-8 z-40 flex-col items-center gap-6">
      {socialLinks.map((link) => {
        const icon =
          link.label === "GitHub" ? (
            Icons.gitHub({
              className:
                "w-5 h-5 text-muted-foreground hover:text-primary transition-colors fill-current",
            })
          ) : link.label === "Twitter" ? (
            Icons.twitter({
              className:
                "w-5 h-5 text-muted-foreground hover:text-primary transition-colors fill-current",
            })
          ) : (
            Icons.linkedIn(
              "w-5 h-5 text-muted-foreground hover:text-primary transition-colors",
            )
          );
        return (
          <Link
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        );
      })}
      <div className="w-px h-24 bg-muted-foreground" />
    </div>
  );
}

export default SideSocials;
