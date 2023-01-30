import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const companyApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    // tagTypes: ["Posts", "User"],
  }),
  endpoints: (builder) => ({
    getHeroCarouselData: builder.query({
      query: () => ({
        url: "/carousel",
        method: "GET",
      }),
    }),
    getOurServicesData: builder.query({
      query: () => ({
        url: "/ourservices",
        method: "GET",
      }),
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),

    getWhyChooseUs: builder.query({
      query: () => ({
        url: "/chooseus",
        method: "GET",
      }),
      // providesTags: ["Posts"],
    }),
    contactUs: builder.mutation({
      query: (contactData) => {
        return {
          url: `/contact`,
          method: "POST",
          body: contactData,
        };
      },
    }),
    postChooseUs: builder.mutation({
      query: (data) => {
        return {
          url: `/chooseus`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetTestimonialQuery,
  useGetOurServicesDataQuery,
  useGetHeroCarouselDataQuery,
  useGetWhyChooseUsQuery,
  useContactUsMutation,
  usePostChooseUsMutation,
} = companyApi;
