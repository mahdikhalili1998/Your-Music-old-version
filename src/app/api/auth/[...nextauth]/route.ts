// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDB from "@/utils/ConnectDB";
import userInfo from "@/model/userInfo";
import { verifyPassword } from "@/utils/nextPass";
import { ICredentionals } from "@/types/signIn";
import { MESSSGE } from "@/enums/enum";

export const authOptions = {
  session: { strategy: "jwt" as const },
  providers: [
    CredentialsProvider({
      async authorize(credentials: ICredentionals) {
        const { userName, password } = credentials;
        try {
          await ConnectDB();
        } catch (error) {
          throw new Error(MESSSGE.SERVER_ERROR);
        }
        if (!userName || !password) throw new Error(MESSSGE.INCORRECT_INFO);
        const user = await userInfo.findOne({ userName });
        if (!user) throw new Error(MESSSGE.CREATE_ACCOUNT);
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error(MESSSGE.INCORRECT_USERNAME_PASSWORD);
        return { email: user.email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
