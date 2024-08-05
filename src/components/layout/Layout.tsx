"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";

function Layout({ children }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setOpen(true);
  };
  return (
    <div className="relative transition-[transform] duration-700">
      <Header
        open={open}
        clickHandler={clickHandler}
        header={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className={`my-[3rem]`}>{children}</div>
      <div
        className={`absolute top-0 h-full w-full space-y-8 bg-p-200 opacity-90 transition-[transform] duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <span className="mr-1 flex justify-end" onClick={(e) => setOpen(false)}>
          <IoMdCloseCircle className={`mt-3 text-2xl text-p-950`} />
        </span>
        <div className="flex justify-center">
          <div className="flex flex-col items-start divide-y-2 divide-p-950 font-Roboto text-black">
            <Link
              className="custom-divider flex items-center gap-2 px-3 py-2 text-p-950"
              href="profile"
              onClick={(e) => setOpen(false)}
            >
              <MdAccountCircle className="text-3xl" /> Profile
            </Link>
            <Link
              className="custom-divider flex items-center gap-2 px-3 py-2 text-p-950"
              href=""
              onClick={(e) => setOpen(false)}
            >
              <IoMdDownload className="text-3xl" />
              Download
            </Link>
            <Link
              className="custom-divider flex items-center gap-2 px-3 py-2 text-p-950"
              href=""
              onClick={(e) => setOpen(false)}
            >
              <IoMdSettings className="text-3xl" />
              Setting
            </Link>
            <Link
              className="custom-divider flex items-center gap-2 px-3 py-2 text-p-950"
              href=""
              onClick={(e) => setOpen(false)}
            >
              <FaCircleInfo className="text-2xl" /> About us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
