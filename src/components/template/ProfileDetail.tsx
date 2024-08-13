import { IProfileDetail, IUserId } from "@/types/props";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const ProfileDetail: FC<IProfileDetail> = ({ userData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-p-500 to-p-200 py-3">
      <Image
        src="/image/info.png"
        width={200}
        height={200}
        alt="information"
        priority
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="rounded-lg bg-white bg-gradient-to-r from-white to-p-300 px-2 py-1 font-medium text-p-950 shadow-md shadow-p-300"
          href={`/profile/user-information/${userData._id}`}
        >
          Personal Info
        </Link>
        <Link
          className="rounded-lg bg-white bg-gradient-to-r from-white to-p-300 px-2 py-1 font-medium text-p-950 shadow-md shadow-p-300"
          href="/profile/user-information/login-info"
        >
          {" "}
          Login Info
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetail;
