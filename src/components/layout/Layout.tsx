"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";

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
        className={`bg-p-200 absolute top-0 h-full w-full space-y-8 opacity-90 transition-[transform] duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <span className="mr-1 flex justify-end" onClick={(e) => setOpen(false)}>
          <IoMdCloseCircle className={`text-p-950 mt-3 text-2xl`} />
        </span>
        <div className="text-center text-black">
          <Link
            className="bg-p-700 text-p-200 rounded-md px-3 py-2 opacity-100"
            href=""
          >
            Profile
          </Link>
          <Link href=""></Link>
          <Link href=""></Link>
          <Link href=""></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
