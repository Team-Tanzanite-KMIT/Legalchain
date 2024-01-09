import mongoose, { Document, Model } from "mongoose";
const { Schema, model, models } = mongoose;

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
      required: true
    },
    password: {
      type: String,
      required: false
    },
    role: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const User: Model<UserDocument> = models.User
  ? (models.User as Model<UserDocument>)
  : model<UserDocument>("User", userSchema);

export const createSpecificUserModel = (role: string): Model<UserDocument> => {
  if (models[`${role}`]) return models[`${role}`];
  return model<UserDocument>(role, userSchema);
};
