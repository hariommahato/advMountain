import mongoose from "mongoose";
const customizeTripSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    noofadult: {
      type: Number,
      required: true,
    },
    noofchildren: {
      type: Number,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.CustomizeTrip ||
  mongoose.model("CustomizeTrip", customizeTripSchema);
