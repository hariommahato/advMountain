"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Container, Card, Button } from "react-bootstrap";


const OurServices = ({data}) => {
  

  return (
    <Container style={{ marginTop: "3rem" }}>
      <h1 style={{ textAlign: "center",color:"gray" }}>Our Services</h1>
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
        {data?.allOurServices?.map((data) => {
          return (
            <SwiperSlide key={data._id}>
              <Card style={{ width: "auto" }}>
                <Card.Img variant="top" src={data.image} style={{maxHeight:"10rem"}} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{`${data.description}`.slice(0, 5)}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default OurServices;
