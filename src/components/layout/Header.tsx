"use client";
import { IoMdMusicalNote } from "react-icons/io";
import { BsHeadphones } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { FC, useState } from "react";
import { Iheader } from "@/types/header";
import Link from "next/link";

const Header: FC<Iheader> = ({ open, clickHandler }) => {
  return (
    <div>
      <div className="flex justify-between bg-gradient-to-r from-p-500 to-p-200 py-3 font-shantell">
        <h2 className="relative ml-2 mt-5 flex items-center p-2 text-3xl text-p-200">
          <Link href="/" className="flex items-center">
            <span className="animate-moveDown mr-1 text-[2.5rem]"> Y </span> our
            <span className="animate-TurnOff_on ml-2">Music</span>
          </Link>
          <span className="animate-moveDown mt-2">
            <IoMdMusicalNote className="text-purple-900" />
          </span>{" "}
          <span className="animate-moveDown absolute -top-2 left-0">
            <BsHeadphones className="text-[2.4rem] text-purple-900" />
          </span>
        </h2>
        <span onClick={(e) => clickHandler()} className="animate-menuDown mr-1">
          <TiThMenu className={`text-xl ${open ? "hidden" : "block"}`} />
        </span>
      </div>
      <p className="half-circle -mt-1 h-6 w-full rotate-180 bg-gradient-to-r from-p-200 to-p-500"></p>
    </div>
  );
};

export default Header;
