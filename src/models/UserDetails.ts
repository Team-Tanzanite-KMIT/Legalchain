import mongoose, { Document, Model } from 'mongoose';
const { Schema, model, models } = mongoose;

interface UserDocument extends Document {
  email: string;
  password?: string;
  role: string;
}

<<<<<<< HEAD:src/models/UserDetails.ts
=======
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

>>>>>>> origin/roles:src/models/User.ts
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
<<<<<<< HEAD:src/models/UserDetails.ts
    role: {
      type: String,
      required: true,
    },
=======
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
>>>>>>> origin/roles:src/models/User.ts
  },
  { timestamps: true }
);

<<<<<<< HEAD:src/models/UserDetails.ts
// Check if the "User" model already exists in the "models" object
export const User: Model<UserDocument> = models.User 
  ? (models.User as Model<UserDocument>) 
  : model<UserDocument>("User", userSchema);
  
export const createSpecificUserModel = (role: string): Model<UserDocument> => {
  return model<UserDocument>(role, userSchema);
};

=======
export const User: Model<UserDocument> = models.User
  ? (models.User as Model<UserDocument>)
  : model<UserDocument>('User', userSchema);
>>>>>>> origin/roles:src/models/User.ts
