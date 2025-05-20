import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const commentModel =
  mongoose.models.comment || mongoose.model("comment", commentSchema);

export default commentModel;
