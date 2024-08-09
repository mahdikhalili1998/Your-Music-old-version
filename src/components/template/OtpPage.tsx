"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import BtLight from "../module/BtLight";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import Loader from "../module/Loader";

function OtpPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otpCode, setOtpCode] = useState<string>("");
  const [userCode, setUserCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [nextLevel, setNextLevel] = useState<boolean>(false);
  const router = useRouter();

  const sendNumber = async () => {
    const num = `{"to":"${phoneNumber}"}`;
    const phoneRegex = /^09\d{9}$/;
    const headers = {
      "Content-Type": "application/json",
    };

    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Enter the correct phone number", {
        position: "top-center",
        transition: Flip,
      });
      return;
    }
    if (phoneRegex.test(phoneNumber)) {
      setNextLevel(true);
    }

    setLoading(true);

    await axios
      .post("api/proxy", num, { headers })
      .then((res) => {
        if (res) {
          setNextLevel(true);
          setOtpCode(res?.data.code);
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Server Error , try again", {
            position: "top-center",
            transition: Flip,
          });
          return;
        }
      });

    setLoading(false);
  };

  const otpHandler = () => {
    if (otpCode === userCode) {
      localStorage.setItem("phoneNumber", phoneNumber);
      router.push("/sign-up");
    }
  };

  const editHandler = () => {
    setNextLevel(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center font-medium text-p-950">
        {nextLevel ? "Enter your code :" : "Enter your phone number :"}
      </h2>
      <div className="mx-auto flex w-max flex-col items-center gap-6 rounded-lg p-3 py-5 shadow-xl shadow-p-200">
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
            value={nextLevel ? userCode : phoneNumber}
            onChange={(e) => {
              nextLevel
                ? setUserCode(e.target.value)
                : setPhoneNumber(e.target.value);
            }}
            className="rounded-lg border-2 border-p-700 px-2 py-1 text-center placeholder:text-center focus:outline-p-700"
          />
          {nextLevel ? (
            loading ? (
              <div className="mx-auto w-max">
                <Loader />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4">
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
            )
          ) : loading ? (
            <div className="mx-auto w-max">
              <Loader />
            </div>
          ) : (
            <button
              onClick={(e) => sendNumber()}
              className="rounded-lg bg-p-700 px-1 py-1 text-white disabled:cursor-not-allowed disabled:opacity-35"
              disabled={!phoneNumber}
            >
              Receive Code
            </button>
          )}
        </div>
        <BtLight nextLevel={nextLevel} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default OtpPage;
