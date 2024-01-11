import mongoose, { Document, Model } from 'mongoose';
const { Schema, model, models } = mongoose;

interface UserDocument extends Document {
  email: string;
  password?: string;
  role: string;
  cases: Array<userCaseAttrs>;
  docs: Array<string>;
}

export interface userCaseAttrs {
  caseID: string;
  role: string;
}

const userCaseSchema = new Schema<userCaseAttrs>({
  caseID: {
    type: String,
  },
  role: {
    type: String,
  },
});

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
    cases: [
      {
        type: userCaseSchema,
        required: false,
      },
    ],
    docs: [
      {
        type: String,
        required: false,
      },
    ],
  },
  { timestamps: true }
);

export const User: Model<UserDocument> = models.User
  ? (models.User as Model<UserDocument>)
  : model<UserDocument>('User', userSchema);
