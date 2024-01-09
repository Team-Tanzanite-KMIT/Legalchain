import mongoose, { Document, Model } from "mongoose";
const { Schema, model } = mongoose;
interface UserDocument extends Document {
  email: string;
  password?: string;
  role: string;
}
const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = model<UserDocument>("User", userSchema);
const createSpecificUserModel = (role: string): Model<UserDocument> => {
  return model<UserDocument>(role, userSchema);
};
export default {User, createSpecificUserModel};
