"use client";

import { IUserInfo } from "@/types/types";
import { useState } from "react";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function SignUpInput() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const { name, userName, email, password, phoneNumber } = userInfo;

  const regexInfo = {
    name: /^[A-Za-z\u0600-\u06FF]{4,}$/,
    userName: /^[A-Za-z\u0600-\u06FF][A-Za-z\u0600-\u06FF0-9_]{3,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^1234$/,
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  const sendHandler = () => {
    if (
      !regexInfo.name.test(name) ||
      !regexInfo.email.test(email) ||
      !regexInfo.userName.test(userName) ||
      !regexInfo.password.test(password)
    ) {
      toast.error("Enter  correct info", {
        position: "top-center",
        transition: Flip,
      });
      return;
    }
  };

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg p-5 shadow-lg shadow-p-200">
      {(Object.keys(userInfo) as (keyof IUserInfo)[]).map((key) => (
        <input
          key={key}
          className={`rounded-xl border-2 border-dotted px-2 py-1 text-center text-p-950 placeholder:text-center placeholder:text-p-950 placeholder:opacity-40 focus:outline-none ${(key === "email" && regexInfo.email.test(userInfo[key as keyof IUserInfo])) || (key === "name" && regexInfo.name.test(userInfo[key as keyof IUserInfo])) || (key === "userName" && regexInfo.userName.test(userInfo[key as keyof IUserInfo])) || (key === "password" && regexInfo.password.test(userInfo[key as keyof IUserInfo])) ? "border-green-500" : "border-p-700"} `}
          value={userInfo[key as keyof IUserInfo]}
          name={key}
          placeholder={key}
          onChange={(e) => changeHandler(e)}
        />
      ))}
      <button
        onClick={(e) => sendHandler()}
        className="disabled:cursor-not-allowed disabled:opacity-35"
        disabled={!name || !userName || !email || !password}
      >
        send
      </button>
      <ToastContainer />
    </div>
  );
}

export default SignUpInput;
