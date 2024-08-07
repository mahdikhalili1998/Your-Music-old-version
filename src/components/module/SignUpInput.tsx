"use client";

import { IUserInfo } from "@/types/types";
import { useState } from "react";

function SignUpInput() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const changeHandler = () => {};
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {(Object.keys(userInfo) as (keyof IUserInfo)[]).map((key) => (
        <input
          key={key}
          className="rounded-xl border-2 border-dotted border-p-700 px-2 py-1 text-center placeholder:text-center placeholder:text-p-950 placeholder:opacity-40 focus:outline-none"
          value={userInfo[key]}
          name="key"
          placeholder={key}
          onChange={(e) => changeHandler()}
        />
      ))}
    </div>
  );
}

export default SignUpInput;
