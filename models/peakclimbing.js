import mongoose, { Schema } from "mongoose";

const peakClimbingSchema = new mongoose.Schema({
  name: String,
  totalTime: Number,
  price: Number,
  discount: Number,
  overview: String,
  comprehensiveGuide: String,
  experienceRequired:String,
  bestTimeToTravel:String,
  visaAndEntryProcedure:String,
  map: String,
  homeImageCarousel: [{ carouselImage: String }],
  highlights: [
    {
      highlightsTitle: String,
    },
  ],
  tourImages: [
    {
      tourImage: String,
    },
  ],
  itinerary: [
    {
      title: String,
      description: String,
    },
  ],
  priceIncluded: [
    {
      priceIncludedItem: String,
    },
  ],
  priceExcluded: [
    {
      priceExcludedItem: String,
    },
  ],

  usefulInfo: [
    {
      usefulInfoTitle: String,
      usefulInfoDescription: String,
    },
  ],
  country: String,
  trekZone: String,
  firstAidKit: [
    {
      firstAidKitItem: String,
    },
  ],
  equipment: [
    {
      equipmentItem: String,
    },
  ],
  ourGuides: [
    {
      guidesTitle: String,
    },
  ],
});

export default mongoose.models?.Climbing ||
  mongoose.model("Climbing", peakClimbingSchema);
