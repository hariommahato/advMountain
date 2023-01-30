import mongoose from "mongoose";

const highlightsSchema = new mongoose.Schema({
  highlightsTitle: [{ title: String }],
  
});

export default mongoose.models?.Highlight || mongoose.model("Highlight", highlightsSchema);

