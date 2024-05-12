import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { personalInformation } from "@/app/data";

function Logo() {
  return (
    <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
      <Avatar>
        <AvatarImage src={personalInformation.logoPicture} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-sm tracking-wider font-normal">
        {personalInformation.name}
      </span>
    </Link>
  );
}

export default Logo;
