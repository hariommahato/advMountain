"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Container, Card } from "react-bootstrap";

function TestiMonials({ data }) {
  return (
    <Container style={{ marginTop: "3rem", marginBottom: "2rem" }}>
      <h1 style={{ textAlign: "center", color: "gray" }}>Our Testimonial </h1>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: "1",
          },
          600: {
            slidesPerView: "2",
          },
          900: {
            slidesPerView: "4",
          },
        }}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.allTestimonial?.map((data) => {
          return (
            <SwiperSlide key={data._id}>
              <Card
                style={{
                  width: "auto",
                  minHeight: "20rem",
                  maxHeight: "25rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={data.image}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "13rem",
                    maxHeight: "13rem",
                  }}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{`${data.comment}`.slice(0, 10)}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default TestiMonials;
