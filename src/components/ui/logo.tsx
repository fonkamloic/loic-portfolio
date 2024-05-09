import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

function Logo() {
  return (
    <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-sm tracking-wider font-normal">Loic Fonkam</span>
    </Link>
  );
}

export default Logo;
