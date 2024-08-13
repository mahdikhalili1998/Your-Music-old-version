import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import userInfo from "@/model/userInfo";
import { IUser_Id } from "@/types/props";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";

import { FC } from "react";

const PersonalInfo: FC<IUser_Id> = async ({ url }) => {
  await ConnectDB();
  const user = await userInfo.findOne({ _id: url });
  console.log(user);
  return <div>PersonalInfo</div>;
};

export default PersonalInfo;
