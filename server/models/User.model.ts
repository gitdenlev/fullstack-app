import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);
