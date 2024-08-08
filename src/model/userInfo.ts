import { IUserInfo } from "@/types/types";
import { Model, model, models, Schema } from "mongoose";

const userSchema = new Schema<IUserInfo>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true },
);

const userInfo =
  models.yourMusicUserInfo || model<IUserInfo>("yourMusicUserInfo", userSchema);

export default userInfo;
