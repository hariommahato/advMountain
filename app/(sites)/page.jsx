import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
const DynamicHeroCarousel = dynamic(() =>
  import("../../components/HeroCarousel/page")
);
const DynamicPopularDestination = dynamic(() =>
  import("../../components/PopularDestination/page")
);
const DynamicWhyUs = dynamic(() => import("../../components/WhyUs/page"));
const DynamicOurServices = dynamic(() =>
  import("../../components/OurServices/page")
);
const DynamicHeroAbout = dynamic(() =>
  import("../../components/HeroAbout/page")
);
const DynamicRecentTours = dynamic(() =>
  import("../../components/RecentTours/page")
);
const DynamicTestimonial = dynamic(() =>
  import("../../components/TestiMonials/page")
);
const DynamicCustomerChat = dynamic(() =>
  import("../../components/customerChat/page")
);
const inter = Inter({ subsets: ["latin"] });
async function getHeroCarousel() {
  const res = await fetch("http://localhost:3000/api/carousel");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getWhyUs() {
  const res = await fetch("http://localhost:3000/api/chooseus");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getOurServices() {
  const res = await fetch("http://localhost:3000/api/ourservices");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getTestimonial() {
  const res = await fetch("http://localhost:3000/api/testimonial");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getPopularDestination() {
  const res = await fetch("http://localhost:3000/api/populardestination");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getRecentTour() {
  const res = await fetch("http://localhost:3000/api/recenttour");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHeroAbout() {
  const res = await fetch("http://localhost:3000/api/aboutus");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const carouselData = await getHeroCarousel();
  const whyus = await getWhyUs();
  const ourServices = await getOurServices();
  const testimonial = await getTestimonial();
  const populardestination = await getPopularDestination();
  const recenttour = await getRecentTour();
  const aboutus = await getHeroAbout();
  return (
    <>
     
        <DynamicHeroCarousel data={carouselData} />
        <DynamicWhyUs data={whyus} />
        <DynamicOurServices data={ourServices} />
        <DynamicHeroAbout data={aboutus} />
        <DynamicPopularDestination data={populardestination} />
        <DynamicRecentTours data={recenttour} />
        <DynamicTestimonial data={testimonial} />
        <DynamicCustomerChat />
    
    </>
  );
}
