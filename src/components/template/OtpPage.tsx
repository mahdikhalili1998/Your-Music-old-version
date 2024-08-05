"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function OtpPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [nextLevel, setNextLevel] = useState<boolean>(false);
  const router = useRouter();

  const sendNumber = () => {
    setNextLevel(true);
  };

  const otpHandler = () => {
    console.log("hiii");
  };

  const editHandler = () => {
    setNextLevel(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center font-medium text-p-950">
        {nextLevel ? "Enter your code :" : "Enter your phone number :"}
      </h2>
      <div className="mx-auto flex w-max flex-col items-center gap-4 rounded-lg p-3 py-5 shadow-xl shadow-p-200">
        {nextLevel ? (
          <Image
            className=""
            src="/image/code.png"
            alt="logo"
            width={200}
            height={200}
            priority
          />
        ) : (
          <Image
            className=""
            src="/image/phone.png"
            alt="logo"
            width={200}
            height={200}
            priority
          />
        )}

        <div className="flex flex-col gap-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={nextLevel ? " x x x x" : "0912 345 6789"}
            value={nextLevel ? otp : phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-lg border-2 border-p-700 px-2 py-1 placeholder:text-center focus:outline-p-700"
          />
          {nextLevel ? (
            <div className="flex items-center justify-center gap-4">
              {" "}
              <button
                onClick={(e) => otpHandler()}
                className="rounded-lg bg-p-700 px-2 py-1 text-white"
              >
                Send
              </button>
              <button
                onClick={(e) => editHandler()}
                className="rounded-lg bg-p-700 px-2 py-1 text-white"
              >
                Edit number
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => sendNumber()}
              className="rounded-lg bg-p-700 px-1 py-1 text-white"
            >
              Receive Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
