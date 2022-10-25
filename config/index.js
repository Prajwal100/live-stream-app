import * as dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    NAME: process.env.APP_NAME || "video-streaming-app",
    ENV: process.env.NODE_ENV || "dev",
    PORT: process.env.PORT || 5000,
    API_URL: process.env.API_URL || "http://localhost:5000",
    MONGO_URI:
      process.env.MONGO_URI || "mongodb://localhost:27017/videostreamingapp",
  },
  jwt: {
    SECRET: process.env.JWT_SECRET || "VIDEO_STREAMING_APP",
    EXPIRE: process.env.JWT_EXPIRE || "30d",
  },
};

export default config;
