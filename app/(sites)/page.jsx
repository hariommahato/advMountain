import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
const DynamicHeroCarousel=dynamic(()=>import('../../components/HeroCarousel/page'))
const DynamicPopularDestination=dynamic(()=>import('../../components/PopularDestination/page'))
const DynamicWhyUs=dynamic(()=>import('../../components/WhyUs/page'))
const DynamicOurServices=dynamic(()=>import('../../components/OurServices/page'))
const DynamicHeroAbout=dynamic(()=>import('../../components/HeroAbout/page'))
const DynamicRecentTours=dynamic(()=>import('../../components/RecentTours/page'))
const DynamicTestimonial=dynamic(()=>import('../../components/TestiMonials/page'))
const DynamicCustomerChat=dynamic(()=>import('../../components/customerChat/page'))

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  return (
    <>
      <DynamicHeroCarousel />
      <DynamicWhyUs />
      <DynamicOurServices />
      <DynamicHeroAbout />
      <DynamicPopularDestination />
      <DynamicRecentTours />
      <DynamicTestimonial />
      <DynamicCustomerChat />
    </>
  );
}
