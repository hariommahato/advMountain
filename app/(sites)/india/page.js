"use client";
import React from "react";
import {
  useGetIndiaTrekDataQuery,
  useGetIndiaDayExcursionDataQuery,
  useGetIndiaExpeditiomDataQuery,
  useGetIndiaHikingDataQuery,
  useGetIndiaPeakClimbingDataQuery,
  useGetIndiaVehicleTourDataQuery,
} from "../../../services/adminInteraction";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
const India = () => {
  const indiaTrek = useGetIndiaTrekDataQuery();
  const indiaDayExcursion = useGetIndiaDayExcursionDataQuery();
  const indiaExpedition = useGetIndiaExpeditiomDataQuery();
  const indiaHiking = useGetIndiaHikingDataQuery();
  const indiaPeakClimbing = useGetIndiaPeakClimbingDataQuery();
  const indiaVehicleTour = useGetIndiaVehicleTourDataQuery();
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            Trekking In India
          </h5>
          {indiaTrek?.data?.trekFromIndia?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/trekking/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            DayExcursion In India
          </h5>
          {indiaDayExcursion?.data?.dayexcursion?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/dayexcursion/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            Expedition In India
          </h5>
          {indiaExpedition?.data?.expeditionIndia?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/expedition/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            Hiking In India
          </h5>
          {indiaHiking?.data?.hiking?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/hiking/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            PeakClimbing In India
          </h5>
          {indiaPeakClimbing?.data?.peakclimbingIndia?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/peakclimbing/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
        <Row>
          <h5
            style={{
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            VehicleTour In India
          </h5>
          {indiaVehicleTour?.data?.vehicleTour?.map((item) => {
            return (
              <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
                <Link href={`/vehicletour/${item._id}`}>
                  <Card
                    className="bg-light text-white"
                    style={{ margin: ".5rem 0" }}
                  >
                    <Card.Img
                      src={item?.tourImages[0]?.tourImage}
                      alt="Card image"
                      style={{ filter: "brightness(80%)" }}
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default India;
