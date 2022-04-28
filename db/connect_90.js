import mongoose from "mongoose";

const connectDB_90 = (url) => {
  return mongoose.connect(url);
}

export default connectDB_90;