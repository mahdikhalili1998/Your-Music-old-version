"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [nextLevel, setNextLevel] = useState<number>(1);
  const router = useRouter();

  const sendNumber = () => {
    setNextLevel(2);
    router.push("enter-otp");
  };
  return (
    <div className="flex flex-col gap-4">
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="09123456789"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="rounded-lg border-2 border-p-700 px-2 py-1 focus:outline-p-700"
      />
      <button
        onClick={(e) => sendNumber()}
        className="rounded-lg bg-p-700 px-1 py-1 text-white"
      >
        Receive Code
      </button>
    </div>
  );
};

export default PhoneNumberInput;
