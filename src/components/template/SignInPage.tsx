import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

function SignInPage() {
  return (
    <div>
      <div className="relative h-[30rem] bg-gradient-to-r from-p-500 to-p-200">
        <h2 className="py-3 pl-2 font-medium text-white">
          SignIn your account :
        </h2>
        <Image
          src="/image/signUp.png"
          alt="logo"
          width={500}
          height={500}
          className=""
        />
        <div className="absolute top-52 flex flex-col justify-center gap-7 rounded-ee-full rounded-se-full bg-white p-3 pb-7 pr-10">
          <div className="flex h-28 flex-col items-center justify-center gap-4">
            <div className="flex items-center border-b-2 border-solid border-p-700">
              <label htmlFor="person " className="-mr-5">
                <IoPersonSharp className="text-lg text-p-700" />
              </label>
              <input
                id="person"
                placeholder="userName "
                className="w-44 bg-inherit px-3 py-1 text-center text-p-950 placeholder:text-center placeholder:text-p-700/65 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-solid border-p-700">
              <label htmlFor="lock" className="-mr-5">
                <FaLock className="text-lg text-p-700" />
              </label>
              <input
                id="lock"
                placeholder="password"
                className="w-44 bg-inherit px-3 py-1 text-center text-p-950 placeholder:text-center placeholder:text-p-700/65 focus:outline-none"
              />
            </div>
          </div>
          <button className="shadow-p-400 -mr-10 ml-auto flex w-max items-center justify-between gap-8 rounded-md bg-white px-4 py-1 font-medium text-p-700 shadow-md">
            Sign in <RiArrowRightSLine className="mt-1 text-xl text-p-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
