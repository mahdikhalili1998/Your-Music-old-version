import { MESSSGE, STATUS } from "@/enums/enum";
import { IUserInfo } from "@/types/types";
import { addAbortListener } from "events";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
   await Connec
    const {
      userInfo: { email, name, password, userName, phoneNumber },
    }: { userInfo: IUserInfo } = await req.json();

    if (!email || !name || !password || !userName || !phoneNumber) {
      return NextResponse.json(
        { message: MESSSGE.INCORRECT_INFO },
        { status: STATUS.INCORRECT_INFO },
      );
    }
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
