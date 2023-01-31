"use client";
import Carousel from "react-bootstrap/Carousel";
import { Table } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {
  useGetHikingByIdQuery,
  useGetHikingDataQuery,
} from "../../../../services/adminInteraction";
import TripBookForm from "../../../../components/TripBookForm/page";
import styles from "../../../../Styles/Expedition.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination ,Autoplay} from "swiper";
import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Page({ params }) {
  const { id } = params;
  const { data, isFetching } = useGetHikingByIdQuery(id);
  const { data: hiking } = useGetHikingDataQuery();

  return (
    <div className={styles.mainDiv}>
      <div className={styles.left}>
        <h1>{data?.hiking?.name}</h1>

        <Carousel variant="dark">
          {data?.hiking?.homeImageCarousel?.map((data) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.carouselImage}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div>
          <div style={{ textAlign: "justify" }}>
            <h3>Trip OverView</h3>
            <p>{data?.hiking?.overview}</p>
          </div>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={"2"}>Highlights</th>
                </tr>
              </thead>
              <tbody>
                {data?.hiking?.highlights?.map((data) => {
                  return (
                    <tr>
                      <td>{data.highlightsTitle}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div style={{ textAlign: "justify" }}>
            <h5>Comprehensive Guide</h5>
            <p>{data?.hiking?.comprehensiveGuide}</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h1 className="text-center">You will See </h1>
            <Carousel
              variant="dark"
              style={{ minHeight: "15rem" }}
              indicators={false}
            >
              {data?.hiking?.tourImages?.map((data) => {
                return (
                  <Carousel.Item>
                    <div
                      style={{
                        width: "50%",
                        margin: "auto",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <img
                          className=""
                          src={data.tourImage}
                          alt="First slide"
                          style={{
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <h5>Itinerary</h5>

          <Accordion defaultActiveKey="0" flush>
            {data?.hiking?.itinerary?.map((item) => {
              return (
                <>
                  <Accordion.Item eventKey={Math.random() * 24234}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                </>
              );
            })}
          </Accordion>
        </div>
        <div>
          <h5>Tour Maps</h5>
          <div style={{ width: "100%", height: "400px", overflow: "scroll" }}>
            <img src={data?.hiking?.map} width={"100%"} />
          </div>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={"2"}>Cost Details /Price Includes</th>
              </tr>
            </thead>
            <tbody>
              {data?.hiking?.priceIncluded?.map((item) => {
                return (
                  <tr>
                    <td>{item.priceIncludedItem}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={"2"}>Cost Details /Price Includes</th>
              </tr>
            </thead>
            <tbody>
              {data?.hiking?.priceExcluded?.map((item) => {
                return (
                  <tr>
                    <td>{item.priceExcludedItem}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div>
          <h5>Useful Info</h5>
          {data?.hiking?.usefulInfo?.map((item) => {
            return (
              <div>
                <h5>{item.usefulInfoTitle}</h5>
                <p>{item.usefulInfoDescription}</p>
              </div>
            );
          })}
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={"2"}>First Aid Kit</th>
              </tr>
            </thead>
            <tbody>
              {data?.hiking?.firstAidKit?.map((item) => {
                return (
                  <tr>
                    <td> {item.firstAidKitItem}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={"2"}>Equipment And Packing List</th>
              </tr>
            </thead>
            <tbody>
              {data?.hiking?.equipment?.map((item) => {
                return (
                  <tr>
                    <td> {item.equipmentItem}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div>
          <h5>Expreience Required</h5>
          <p>{data?.hiking?.experienceRequired}</p>
        </div>
        <div>
          <h5>Best Time To Travel</h5>
          <p>{data?.hiking?.bestTimeToTravel}</p>
        </div>
        <div>
          <h5>Visa And Entry Procedures</h5>
          <p>{data?.hiking?.visaAndEntryProcedure}</p>
        </div>
        <div>
          <h5>Our Guides/Leaders </h5>

          <Table striped bordered hover>
            <tbody>
              {data?.hiking?.ourGuides?.map((item) => {
                return (
                  <tr>
                    <td> {item.guidesTitle}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <h1 style={{ textAlign: "center" }}>Similar Hiking </h1>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: "1",
              },
              600: {
                slidesPerView: "2",
              },
              900: {
                slidesPerView: "3",
              },
            }}
            autoplay={{delay:5000,
              disableOnInteraction: false}}
            loop={true}
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination,Autoplay]}
            className="mySwiper"
          >
            {hiking?.hiking?.map((data) => {
              return (
                <SwiperSlide key={data._id}>
                  <Link href={`/hiking/${data._id}`}>
                    <Card style={{ width: "18rem" }} className={styles.card}>
                      <Card.Img
                        variant="top"
                        src={data?.tourImages[0]?.tourImage}
                      />
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div>
        <TripBookForm
          price={data?.hiking?.price}
          discount={data?.hiking?.discount}
        />
      </div>
    </div>
  );
}
