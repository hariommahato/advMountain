import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminInteractionApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  keepUnusedDataFor:600,
  tagTypes: [
    "About",
    "Contact",
    "Carousel",
    "ChooseUs",
    "OurServices",
    "Testimonial",
    "Trekking",
    "Faq",
    "User",
    "Popular",
    "RecentTour",
    "CustomizeTrip",
    "BookTrip",
    "PeakClimbing",
    "Expedition",
    "DayExcursion",
    "VehicleTour",
    "Hiking"
  ],

  endpoints: (builder) => ({
    getAboutUsData: builder.query({
      query: () => ({
        url: "/aboutus",
        method: "GET",
      }),
      providesTags: ["About"],
    }),
    createAboutData: builder.mutation({
      query: (aboutData) => {
        return {
          url: "/aboutus",
          method: "POST",
          body: aboutData,
        };
      },
      invalidatesTags: ["About"],
    }),
    updateAboutData: builder.mutation({
      query: ({ id, aboutData }) => {
        return {
          url: `/aboutus/${id}`,
          method: "PUT",
          body: aboutData,
        };
      },
      invalidatesTags: ["About"],
    }),
    getAboutUsDataById: builder.query({
      query: (id) => {
        return {
          url: `/aboutus/${id}`,
          method: "GET",
        };
      },
      providesTags: ["About"],
    }),
    deleteAboutData: builder.mutation({
      query: (id) => {
        return {
          url: `/aboutus/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["About"],
    }),
    getContactUsData: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    createContactUsData: builder.mutation({
      query: (contactData) => ({
        url: "/contact",
        method: "POST",
        body: contactData,
      }),
      providesTags: ["Contact"],
    }),
    updateContactUsData: builder.mutation({
      query: ({ id, contactData }) => {
        return {
          url: `/contact/${id}`,
          method: "PUT",
          body: contactData,
        };
      },
      invalidatesTags: ["Contact"],
    }),
    getContactUsDataById: builder.query({
      query: (id) => {
        return {
          url: `/contact/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Contact"],
    }),
    deleteContactUsData: builder.mutation({
      query: (id) => {
        return {
          url: `/contact/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contact"],
    }),
    getHeroCarouselData: builder.query({
      query: () => ({
        url: "/carousel",
        method: "GET",
      }),
      providesTags: ["Carousel"],
    }),
    getHeroCarouselDataById: builder.query({
      query: (id) => {
        return {
          url: `/carousel/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Carousel"],
    }),
    updateHeroCarouselData: builder.mutation({
      query: ({ id, carouselData }) => {
        return {
          url: `/carousel/${id}`,
          method: "PUT",
          body: carouselData,
        };
      },
      invalidatesTags: ["Carousel"],
    }),
    createHeroCarouselData: builder.mutation({
      query: (carouselData) => ({
        url: "/carousel",
        method: "POST",
        body: carouselData,
      }),
      providesTags: ["Carousel"],
    }),
    deleteHeroCarouselData: builder.mutation({
      query: (id) => {
        return {
          url: `/carousel/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Carousel"],
    }),
    getChooseUsData: builder.query({
      query: () => ({
        url: "/chooseus",
        method: "GET",
      }),
      providesTags: ["ChooseUs"],
    }),
    getChooseUsDataById: builder.query({
      query: (id) => {
        return {
          url: `/chooseus/${id}`,
          method: "GET",
        };
      },
      providesTags: ["ChooseUs"],
    }),
    updateChooseUsData: builder.mutation({
      query: ({ id, chooseUsData }) => {
        return {
          url: `/chooseus/${id}`,
          method: "PUT",
          body: chooseUsData,
        };
      },
      invalidatesTags: ["ChooseUs"],
    }),
    createChooseUsData: builder.mutation({
      query: (chooseUsData) => ({
        url: "/chooseus",
        method: "POST",
        body: chooseUsData,
      }),
      providesTags: ["ChooseUs"],
    }),
    deleteChooseUsData: builder.mutation({
      query: (id) => {
        return {
          url: `/chooseus/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["ChooseUs"],
    }),
    getPopularDestinationData: builder.query({
      query: () => ({
        url: "/populardestination",
        method: "GET",
      }),
      providesTags: ["Popular"],
    }),
    getPopularDestinationDataById: builder.query({
      query: (id) => {
        return {
          url: `/populardestination/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Popular"],
    }),

    updatePopularDestinationData: builder.mutation({
      query: ({ id, popularDestinationData }) => {
        return {
          url: `/populardestination/${id}`,
          method: "PUT",
          body: popularDestinationData,
        };
      },
      invalidatesTags: ["Popular"],
    }),
    creatPopularDestinationData: builder.mutation({
      query: (popularDestinationData) => ({
        url: "/populardestination",
        method: "POST",
        body: popularDestinationData,
      }),
      providesTags: ["Popular"],
    }),
    deletePopularDestinationData: builder.mutation({
      query: (id) => {
        return {
          url: `/populardestination/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Popular"],
    }),
    getRecentTourData: builder.query({
      query: () => ({
        url: "/recenttour",
        method: "GET",
      }),
      providesTags: ["RecentTour"],
    }),
    getRecentTourDataById: builder.query({
      query: (id) => {
        return {
          url: `/recenttour/${id}`,
          method: "GET",
        };
      },
      providesTags: ["RecentTour"],
    }),
    updateRecentTourData: builder.mutation({
      query: ({ id, recentTourData }) => {
        return {
          url: `/recenttour/${id}`,
          method: "PUT",
          body: recentTourData,
        };
      },
      invalidatesTags: ["RecentTour"],
    }),
    createRecentTourData: builder.mutation({
      query: (recentTourData) => ({
        url: "/recenttour",
        method: "POST",
        body: recentTourData,
      }),
      providesTags: ["RecentTour"],
    }),
    deleteRecentTourData: builder.mutation({
      query: (id) => {
        return {
          url: `/recenttour/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["RecentTour"],
    }),
    getOurServicesData: builder.query({
      query: () => ({
        url: "/ourservices",
        method: "GET",
      }),
      providesTags: ["OurServices"],
    }),
    getOurServicesDataById: builder.query({
      query: (id) => {
        return {
          url: `/ourservices/${id}`,
          method: "GET",
        };
      },
      providesTags: ["OurServices"],
    }),
    updateOurServicesData: builder.mutation({
      query: ({ id, ourServicesData }) => {
        return {
          url: `/ourservices/${id}`,
          method: "PUT",
          body: ourServicesData,
        };
      },
      invalidatesTags: ["OurServices"],
    }),
    createOurServicesData: builder.mutation({
      query: (ourServicesData) => ({
        url: "/ourservices",
        method: "POST",
        body: ourServicesData,
      }),
      providesTags: ["OurServices"],
    }),
    deleteOurServicesData: builder.mutation({
      query: (id) => {
        return {
          url: `/ourservices/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["OurServices"],
    }),
    getFaqData: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
      providesTags: ["Faq"],
    }),
    getFaqDataById: builder.query({
      query: (id) => {
        return {
          url: `/faq/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Faq"],
    }),
    updateFaqData: builder.mutation({
      query: ({ id, faqData }) => {
        return {
          url: `/faq/${id}`,
          method: "PUT",
          body: faqData,
        };
      },
      invalidatesTags: ["Faq"],
    }),
    createFaqData: builder.mutation({
      query: (faqData) => ({
        url: "/faq",
        method: "POST",
        body: faqData,
      }),
      providesTags: ["Faq"],
    }),
    deleteFaqData: builder.mutation({
      query: (id) => {
        return {
          url: `/faq/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Faq"],
    }),
    getTestimonialData: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["Testimonial"],
    }),
    getTestimonialDataById: builder.query({
      query: (id) => {
        return {
          url: `/testimonial/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Testimonial"],
    }),
    updateTestimonialData: builder.mutation({
      query: ({ id, testimonialData }) => {
        return {
          url: `/testimonial/${id}`,
          method: "PUT",
          body: testimonialData,
        };
      },
      invalidatesTags: ["Testimonial"],
    }),
    createTestimonialData: builder.mutation({
      query: (testimonialData) => ({
        url: "/testimonial",
        method: "POST",
        body: testimonialData,
      }),
      providesTags: ["Testimonial"],
    }),
    deleteTestimonialData: builder.mutation({
      query: (id) => {
        return {
          url: `/testimonial/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Testimonial"],
    }),
    getNepalTrekData: builder.query({
      query: () => ({
        url: "/trekking/nepal",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getIndiaTrekData: builder.query({
      query: () => ({
        url: "/trekking/india",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getBhutanTrekData: builder.query({
      query: () => ({
        url: "/trekking/bhutan",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getTibetTrekData: builder.query({
      query: () => ({
        url: "/trekking/tibet",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getPakistanTrekData: builder.query({
      query: () => ({
        url: "/trekking/pakistan",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getSrilankaTrekData: builder.query({
      query: () => ({
        url: "/trekking/srilanka",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getTrekkingData: builder.query({
      query: () => ({
        url: "/trekking",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getAnnapurnTrekData: builder.query({
      query: () => ({
        url: "/trekking/annapurna",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getManasluTrekData: builder.query({
      query: () => ({
        url: "/trekking/manaslu",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getOffBeatenTrekData: builder.query({
      query: () => ({
        url: "/trekking/offbeaten",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getLangtangTrekData: builder.query({
      query: () => ({
        url: "/trekking/langtang",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getEverestTrekData: builder.query({
      query: () => ({
        url: "/trekking/everest",
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    getTrekkingDataById: builder.query({
      query: (id) => ({
        url: `/trekking/${id}`,
        method: "GET",
      }),
      providesTags: ["Trekking"],
    }),
    updateTrekkingData: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        trekZone,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/trekking/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            trekZone: trekZone,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["Trekking"],
    }),
    createTrekkingData: builder.mutation({
      query: (trekkingData) => ({
        url: "/trekking",
        method: "POST",
        body: trekkingData,
      }),
      providesTags: ["Trekking"],
    }),
    deleteTrekkingData: builder.mutation({
      query: (id) => {
        return {
          url: `/trekking/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Trekking"],
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      providesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => {
        return {
          url: `/user/${id}`,
          method: "PUT",
          body: userData,
        };
      },
      invalidatesTags: ["User"],
    }),

    getCustomizeTripData: builder.query({
      query: () => ({
        url: "/customizetrip",
        method: "GET",
      }),
      providesTags: ["CustomizeTrip"],
    }),
    getCustomizeTripDataById: builder.query({
      query: (id) => {
        return {
          url: `/customizetrip/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Customizetrip"],
    }),
    updateCustomizeTripData: builder.mutation({
      query: ({ id, customizeTripData }) => {
        return {
          url: `/customizetrip/${id}`,
          method: "PUT",
          body: customizeTripData,
        };
      },
      invalidatesTags: ["CustomizeTrip"],
    }),
    createCustomizeTripData: builder.mutation({
      query: (customizeTripData) => ({
        url: "/customizetrip",
        method: "POST",
        body: customizeTripData,
      }),
      providesTags: ["CustomizeTrip"],
    }),
    deleteCustomizeTripData: builder.mutation({
      query: (id) => {
        return {
          url: `/customizetrip/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["CustomizeTrip"],
    }),

    getBookTripData: builder.query({
      query: () => ({
        url: "/booktrip",
        method: "GET",
      }),
      providesTags: ["BookTrip"],
    }),
    getBookTripDataById: builder.query({
      query: (id) => {
        return {
          url: `/booktrip/${id}`,
          method: "GET",
        };
      },
      providesTags: ["BookTrip"],
    }),
    updateBookTripData: builder.mutation({
      query: ({ id, bookTripData }) => {
        return {
          url: `/booktrip/${id}`,
          method: "PUT",
          body: bookTripData,
        };
      },
      invalidatesTags: ["BookTrip"],
    }),
    createBookTripData: builder.mutation({
      query: (bookTripData) => ({
        url: "/booktrip",
        method: "POST",
        body: bookTripData,
      }),
      providesTags: ["BookTrip"],
    }),
    deleteBookTripData: builder.mutation({
      query: (id) => {
        return {
          url: `/booktrip/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["BookTrip"],
    }),

    getPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getNepalPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/nepal",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getIndiaPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/india",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getBhutanPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/bhutan",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getTibetPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/tibet",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getPakistanPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/pakistan",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getSrilankaPeakClimbingData: builder.query({
      query: () => ({
        url: "/peakclimbing/srilanka",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getPeakClimbingDataById: builder.query({
      query: (id) => ({
        url: `/peakclimbing/${id}`,
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    updatePeakClimbingData: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/peakclimbing/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["PeakClimbing"],
    }),
    createPeakClimbingData: builder.mutation({
      query: (peakClimbingData) => ({
        url: "/peakclimbing",
        method: "POST",
        body: peakClimbingData,
      }),
      providesTags: ["PeakClimbing"],
    }),
    deletePeakClimbingData: builder.mutation({
      query: (id) => {
        return {
          url: `/peakclimbing/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["PeakClimbing"],
    }),

    getExpeditionData: builder.query({
      query: () => ({
        url: "/expedition",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getNepalExpeditionData: builder.query({
      query: () => ({
        url: "/expedition/nepal",
        method: "GET",
      }),
      providesTags: ["PeakClimbing"],
    }),
    getIndiaExpeditiomData: builder.query({
      query: () => ({
        url: "/expedition/india",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getBhutanExpeditionData: builder.query({
      query: () => ({
        url: "expedition/bhutan",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getTibetExpeditionData: builder.query({
      query: () => ({
        url: "/expedition/tibet",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getPakistanExpeditionData: builder.query({
      query: () => ({
        url: "/expedition/pakistan",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getSrilankaExpeditionData: builder.query({
      query: () => ({
        url: "/expedition/srilanka",
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    getExpeditionDataById: builder.query({
      query: (id) => ({
        url: `/expedition/${id}`,
        method: "GET",
      }),
      providesTags: ["Expedition"],
    }),
    updateExpeditionData: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/expedition/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["Expedition"],
    }),
    createExpeditionData: builder.mutation({
      query: (expeditionData) => ({
        url: "/expedition",
        method: "POST",
        body: expeditionData,
      }),
      providesTags: ["Expedition"],
    }),
    deleteExpeditionData: builder.mutation({
      query: (id) => {
        return {
          url: `/expedition/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Expedition"],
    }),

    getDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getNepalDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion/nepal",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getIndiaDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion/india",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getBhutanDayExcursionData: builder.query({
      query: () => ({
        url: "dayexcursion/bhutan",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getTibetDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion/tibet",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getPakistanDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion/pakistan",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getSrilankaDayExcursionData: builder.query({
      query: () => ({
        url: "/dayexcursion/srilanka",
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    getDayExcursionDataById: builder.query({
      query: (id) => ({
        url: `/dayexcursion/${id}`,
        method: "GET",
      }),
      providesTags: ["DayExcursion"],
    }),
    updateDayExcursionData: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/dayexcursion/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["DayExcursion"],
    }),
    createDayExcursionData: builder.mutation({
      query: (dayExcursionData) => ({
        url: "/dayexcursion",
        method: "POST",
        body: dayExcursionData,
      }),
      providesTags: ["DayExcursion"],
    }),
    deleteDayExcursionData: builder.mutation({
      query: (id) => {
        return {
          url: `/dayexcursion/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["DayExcursion"],
    }),

    getVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getNepalVehicelTourData: builder.query({
      query: () => ({
        url: "/vehicletour/nepal",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getIndiaVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour/india",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getBhutanVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour/bhutan",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getTibetVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour/tibet",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getPakistanVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour/pakistan",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getSrilankaVehicleTourData: builder.query({
      query: () => ({
        url: "/vehicletour/srilanka",
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    getVehicleTourById: builder.query({
      query: (id) => ({
        url: `/vehicletour/${id}`,
        method: "GET",
      }),
      providesTags: ["VehicleTour"],
    }),
    updateVehicleTourData: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/vehicletour/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["VehicleTour"],
    }),
    createVehicleTourData: builder.mutation({
      query: (vehicleTourData) => ({
        url: "/vehicletour",
        method: "POST",
        body: vehicleTourData,
      }),
      providesTags: ["VehicleTour"],
    }),
    deleteVehicleTourData: builder.mutation({
      query: (id) => {
        return {
          url: `/vehicletour/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["VehicleTour"],
    }),













    getHikingData: builder.query({
      query: () => ({
        url: "/hiking",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getNepalHikingData: builder.query({
      query: () => ({
        url: "/hiking/nepal",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getIndiaHikingData: builder.query({
      query: () => ({
        url: "/hiking/india",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getBhutanHikingData: builder.query({
      query: () => ({
        url: "/hiking/bhutan",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getTibetHikingData: builder.query({
      query: () => ({
        url: "/hiking/tibet",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getPakistanHikingData: builder.query({
      query: () => ({
        url: "/hiking/pakistan",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getSrilankaHikingData: builder.query({
      query: () => ({
        url: "/hiking/srilanka",
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    getHikingById: builder.query({
      query: (id) => ({
        url: `/hiking/${id}`,
        method: "GET",
      }),
      providesTags: ["Hiking"],
    }),
    updateHiking: builder.mutation({
      query: ({
        id,
        name,
        totalTime,
        price,
        discount,
        overview,
        comprehensiveGuide,
        map,
        homeImageCarousel,
        highlights,
        tourImages,
        itinerary,
        priceIncluded,
        priceExcluded,
        usefulInfo,
        country,
        firstAidKit,
        ourGuides,
        equipment,
        visaAndEntryProcedure,
        bestTimeToTravel,
        experienceRequired,
      }) => {
        return {
          url: `/hiking/${id}`,
          method: "PUT",
          body: {
            name: name,
            totalTime: totalTime,
            price: price,
            discount: discount,
            overview: overview,
            comprehensiveGuide: comprehensiveGuide,
            map: map,
            homeImageCarousel: homeImageCarousel,
            highlights: highlights,
            tourImages: tourImages,
            itinerary: itinerary,
            priceIncluded: priceIncluded,
            priceExcluded: priceExcluded,
            usefulInfo: usefulInfo,
            country: country,
            firstAidKit: firstAidKit,
            ourGuides: ourGuides,
            equipment: equipment,
            visaAndEntryProcedure: visaAndEntryProcedure,
            bestTimeToTravel: bestTimeToTravel,
            experienceRequired: experienceRequired,
          },
        };
      },
      invalidatesTags: ["Hiking"],
    }),
    createHiking: builder.mutation({
      query: (hikingData) => ({
        url: "/hiking",
        method: "POST",
        body: hikingData,
      }),
      providesTags: ["Hiking"],
    }),
    deleteHiking: builder.mutation({
      query: (id) => {
        return {
          url: `/hiking/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Hiking"],
    }),
  }),
});

export const {
  useGetAboutUsDataByIdQuery,
  useCreateAboutDataMutation,
  useGetAboutUsDataQuery,
  useDeleteAboutDataMutation,
  useUpdateAboutDataMutation,
  useCreateContactUsDataMutation,
  useGetContactUsDataByIdQuery,
  useGetContactUsDataQuery,
  useDeleteContactUsDataMutation,
  useUpdateContactUsDataMutation,
  useGetHeroCarouselDataByIdQuery,
  useGetHeroCarouselDataQuery,
  useCreateHeroCarouselDataMutation,
  useDeleteHeroCarouselDataMutation,
  useUpdateHeroCarouselDataMutation,
  useGetChooseUsDataByIdQuery,
  useGetChooseUsDataQuery,
  useCreateChooseUsDataMutation,
  useUpdateChooseUsDataMutation,
  useDeleteChooseUsDataMutation,
  useGetOurServicesDataByIdQuery,
  useGetOurServicesDataQuery,
  useUpdateOurServicesDataMutation,
  useCreateOurServicesDataMutation,
  useDeleteOurServicesDataMutation,
  useGetTestimonialDataByIdQuery,
  useGetTestimonialDataQuery,
  useUpdateTestimonialDataMutation,
  useCreateTestimonialDataMutation,
  useDeleteTestimonialDataMutation,

  useGetTrekkingDataByIdQuery,
  useGetTrekkingDataQuery,
  useGetAnnapurnTrekDataQuery,
  useGetLangtangTrekDataQuery,
  useGetManasluTrekDataQuery,
  useGetEverestTrekDataQuery,
  useGetOffBeatenTrekDataQuery,
  useCreateTrekkingDataMutation,
  useDeleteTrekkingDataMutation,
  useUpdateTrekkingDataMutation,

  useCreateFaqDataMutation,
  useGetFaqDataByIdQuery,
  useGetFaqDataQuery,
  useUpdateFaqDataMutation,
  useDeleteFaqDataMutation,
  useRegisterUserMutation,
  useGetAllUserQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useCreatPopularDestinationDataMutation,
  useGetPopularDestinationDataByIdQuery,
  useGetPopularDestinationDataQuery,
  useUpdatePopularDestinationDataMutation,
  useDeletePopularDestinationDataMutation,
  useCreateRecentTourDataMutation,
  useGetRecentTourDataByIdQuery,
  useGetRecentTourDataQuery,
  useUpdateRecentTourDataMutation,
  useDeleteRecentTourDataMutation,
  useGetCustomizeTripDataByIdQuery,
  useGetCustomizeTripDataQuery,
  useDeleteCustomizeTripDataMutation,
  useUpdateCustomizeTripDataMutation,
  useCreateCustomizeTripDataMutation,
  useGetBookTripDataByIdQuery,
  useGetBookTripDataQuery,
  useDeleteBookTripDataMutation,
  useCreateBookTripDataMutation,
  useUpdateBookTripDataMutation,
  useGetPeakClimbingDataByIdQuery,
  useGetPeakClimbingDataQuery,
  useUpdatePeakClimbingDataMutation,
  useDeletePeakClimbingDataMutation,
  useCreatePeakClimbingDataMutation,

  useGetBhutanTrekDataQuery,
  useGetIndiaTrekDataQuery,
  useGetNepalTrekDataQuery,
  useGetPakistanTrekDataQuery,
  useGetSrilankaTrekDataQuery,
  useGetTibetTrekDataQuery,

  useCreateExpeditionDataMutation,
  useGetExpeditionDataByIdQuery,
  useGetExpeditionDataQuery,
  useDeleteExpeditionDataMutation,
  useUpdateExpeditionDataMutation,
  useGetBhutanExpeditionDataQuery,
  useGetIndiaExpeditiomDataQuery,
  useGetNepalExpeditionDataQuery,
  useGetPakistanExpeditionDataQuery,
  useGetTibetExpeditionDataQuery,
  useGetSrilankaPeakClimbingDataQuery,
  useGetBhutanPeakClimbingDataQuery,

  useGetIndiaPeakClimbingDataQuery,

  useGetNepalPeakClimbingDataQuery,

  useGetPakistanPeakClimbingDataQuery,
  useGetSrilankaExpeditionDataQuery,

  useGetTibetPeakClimbingDataQuery,

  useGetBhutanDayExcursionDataQuery,
  useGetDayExcursionDataByIdQuery,
  useGetDayExcursionDataQuery,
  useGetIndiaDayExcursionDataQuery,
  useGetNepalDayExcursionDataQuery,
  useGetPakistanDayExcursionDataQuery,
  useGetSrilankaDayExcursionDataQuery,
  useCreateDayExcursionDataMutation,
  useDeleteDayExcursionDataMutation,
  useGetTibetDayExcursionDataQuery,
  useUpdateDayExcursionDataMutation,

  useCreateVehicleTourDataMutation,
  useDeleteVehicleTourDataMutation,
  useGetBhutanVehicleTourDataQuery,
  useGetVehicleTourByIdQuery,
  useGetIndiaVehicleTourDataQuery,
  useGetNepalVehicelTourDataQuery,
  useGetPakistanVehicleTourDataQuery,
  useGetSrilankaVehicleTourDataQuery,
  useGetTibetVehicleTourDataQuery,
  useGetVehicleTourDataQuery,
  useUpdateVehicleTourDataMutation,



  useCreateHikingMutation,
  useDeleteHikingMutation,
  useGetBhutanHikingDataQuery,
  useGetHikingByIdQuery,
  useUpdateHikingMutation,
  useGetHikingDataQuery,
  useGetIndiaHikingDataQuery,
  useGetNepalHikingDataQuery,
  useGetPakistanHikingDataQuery,
  useGetSrilankaHikingDataQuery,
  useGetTibetHikingDataQuery,
  
} = adminInteractionApi;
