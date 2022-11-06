import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mimetype: String,
  presenter: {
    type: Schema.objectId,
    ref: "USer",
  },
  views: {
    type: Number,
    default: 0,
  },
  viewedBy: [
    {
      type: Schema.objectId,
      ref: "User",
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: Schema.objectId,
      ref: "User",
    },
  ],
  dislikes: {
    type: Number,
    default: 0,
  },
  dislikedBy: [
    {
      type: Schema.objectId,
      ref: "User",
    },
  ],
  totalReports: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Schema.objectId,
    ref: "Comment",
  },
  keywords: [String],
  visibility: {
    type: String,
    enum: ["public", "private", "custom", "subscriber"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
