"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoMdCloseCircle } from "react-icons/io";

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
        className={`absolute top-0 h-full w-full space-y-8 bg-purple-300 opacity-80 transition-[transform] duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <span className="mr-1 flex justify-end" onClick={(e) => setOpen(false)}>
          <IoMdCloseCircle className={`mt-3 text-2xl text-purple-950`} />
        </span>
        <ul className="text-center text-black">
          <li>sdfdsf</li>
          <li>sfsdf</li>
          <li>sdfsdf</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
