import mongoose, { Document, Model } from "mongoose";
const { Schema, model, models } = mongoose;

interface UserDocument extends Document {
  email: string;
  password?: string;
  role: string;
  cases: Array<any>;
  docs: Array<string>;
}

const userCaseSchema = new Schema({
  caseID: {
    type: String,
  },
  role: {
    type: String
  }
})

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
    cases: [{
      type: userCaseSchema,
      required: false
    }],
    docs: [{
      type: String,
      required: false
    }]
  },
  { timestamps: true }
);

// Check if the "User" model already exists in the "models" object
export const User: Model<UserDocument> = models.User
  ? (models.User as Model<UserDocument>)
  : model<UserDocument>("User", userSchema);

export const createSpecificUserModel = (role: string): Model<UserDocument> => {
  return model<UserDocument>(role, userSchema);
};

