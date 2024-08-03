import React from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { BsHeadphones } from "react-icons/bs";

function Header() {
  return (
    <div className="font-shantell py-3 bg-gradient-to-r from-purple-500 to-purple-200">
      <h2 className="relative ml-2 mt-5 flex items-center p-2 text-3xl text-purple-100">
        <span className="mr-1 text-[2.5rem]"> Y </span> our Music{" "}
        <span className="animate-moveDown mt-2">
          <IoMdMusicalNote className="text-purple-900" />
        </span>{" "}
        <span className="animate-moveDown absolute -top-2 left-0">
          <BsHeadphones className="text-[2.4rem] text-purple-900" />
        </span>
      </h2>
    </div>
  );
}

export default Header;
