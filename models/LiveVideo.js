import mongoose, { Schema } from "mongoose";

const liveVideoSchema = new Schema({
  organizer: {
    type: Schema.objectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  roomId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  visibility: {
    type: String,
    enum: ["public", "private", "custom", "subscriber"],
    default: "public",
  },
  accessibility: [{ type: String }],
  participants: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LiveVideo = mongoose.model("LiveVideo", liveVideoSchema);
