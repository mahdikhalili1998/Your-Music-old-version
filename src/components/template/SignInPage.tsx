"use client";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

function SignInPage() {
  const signInHandler = () => {};
  return (
    <div>
      <div className="flex flex-col gap-7 bg-gradient-to-r from-p-500 to-p-200 pb-8">
        <h2 className="py-3 pl-2 font-medium text-white">
          <span className="tracking-[1px]"> SignIn</span> your account :
        </h2>
        <Image
          src="/image/signUp.png"
          alt="logo"
          width={500}
          height={500}
          className=""
        />
        <div className="mr-7 flex flex-col gap-10 rounded-ee-full rounded-se-full bg-white pb-5">
          <div className="ml-2 mt-2 flex flex-col items-start gap-6">
            <div className="flex w-[9rem] items-center border-b-2 border-solid border-p-700">
              <label htmlFor="person " className="-mr-5">
                <IoPersonSharp className="text-lg text-p-700" />
              </label>
              <input
                id="person"
                placeholder="userName "
                className="w-44 bg-inherit px-3 py-1 text-center text-p-950 placeholder:text-center placeholder:text-p-700/65 focus:outline-none"
              />
            </div>
            <div className="flex w-[9rem] items-center border-b-2 border-solid border-p-700">
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
          <button
            onClick={(e) => signInHandler()}
            className="ml-auto flex w-max items-center justify-between gap-8 rounded-md bg-white px-4 py-1 font-medium text-p-700 shadow-md shadow-p-400"
          >
            Sign in <RiArrowRightSLine className="mt-1 text-xl text-p-700" />
          </button>
        </div>
        <div className="ml-5 rounded-bl-full rounded-tl-full bg-white py-8">
          <div className="flex flex-col items-center gap-2 text-sm font-medium text-p-950">
            <p>_ Forget your password ??</p>
            <p>_ help center </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
