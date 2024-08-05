import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneNumberInput from "../module/PhoneNumberInput";

function OtpPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-center font-medium text-p-950">
        Enter your phone number :
      </h2>
      <div className="mx-auto flex w-max flex-col items-center gap-4 rounded-lg p-3 py-5 shadow-xl shadow-p-200">
        {" "}
        <Image
          className=""
          src="/image/phone.png"
          alt="logo"
          width={200}
          height={200}
          priority
        />
        <PhoneNumberInput />
      </div>
    </div>
  );
}

export default OtpPage;
