"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { useGetHeroCarouselDataQuery } from "../../services/adminInteraction";
function HeroCarousel() {
  const { data } = useGetHeroCarouselDataQuery();

  return (
    <>
      <Carousel variant="dark">
        {data?.allCarousel?.map((data) => {
          return (
            <Carousel.Item key={data._id}>
              <img
                className="d-block w-100"
                src={data.image}
                alt="First slide"
                style={{ filter: "brightness(50%)" }}
              />
              <Carousel.Caption style={{ color: "#FFF7E9", fontWeight: "900" }}>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default HeroCarousel;
