import mongoose, { Schema } from "mongoose";

const dayexcursionSchema = new mongoose.Schema({
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

export default mongoose.models?.DayExcursion ||
  mongoose.model("DayExcursion", dayexcursionSchema);
