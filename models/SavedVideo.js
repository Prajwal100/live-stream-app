import mongoose, { Schema } from "mongoose";

const savedVideoSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
  },
  videoId: {
    type: Schema.ObjectId,
    ref: "Video",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const savedVideo = mongoose.model("SavedVideo", savedVideoSchema);

export default savedVideo;
