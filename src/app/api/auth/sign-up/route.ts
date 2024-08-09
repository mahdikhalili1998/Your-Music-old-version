import { MESSSGE, STATUS } from "@/enums/enum";
import { IUserInfo } from "@/types/types";
import { addAbortListener } from "events";
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import { hashPassword } from "@/utils/nextPass";
import userInfo from "@/model/userInfo";

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();
    const {
      userInfo: { email, name, password, userName, phoneNumber },
    }: { userInfo: IUserInfo } = await req.json();

    if (!email || !name || !password || !userName || !phoneNumber) {
      return NextResponse.json(
        { message: MESSSGE.INCORRECT_INFO },
        { status: STATUS.INCORRECT_INFO },
      );
    }

    const hashPass = await hashPassword(password);

    const exsitedUser = await userInfo.findOne({ email });
    if (exsitedUser) {
      return NextResponse.json(
        { message: MESSSGE.EXSITED_USER },
        { status: STATUS.EXSITED_USER },
      );
    }

    const newUser = await userInfo.create({
      name,
      userName,
      password: hashPass,
      email,
      phoneNumber,
    });

    return NextResponse.json(
      { message: MESSSGE.WELCOME.replace("{name}", name.toUpperCase()) },
      { status: STATUS.SUCCSESS },
    );
  } catch (error) {
    return NextResponse.json(
      { message: MESSSGE.SERVER_ERROR },
      { status: STATUS.ERROR },
    );
  }
}
