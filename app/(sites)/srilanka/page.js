"use client";
import React from "react";
import {
  useGetSrilankaTrekDataQuery,
  useGetSrilankaDayExcursionDataQuery,
  useGetSrilankaExpeditionDataQuery,
  useGetSrilankaHikingDataQuery,
  useGetSrilankaPeakClimbingDataQuery,
  useGetSrilankaVehicleTourDataQuery,
} from "../../../services/adminInteraction";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
const Srilanka = () => {
  const trek = useGetSrilankaTrekDataQuery();
  const dayexcursion = useGetSrilankaDayExcursionDataQuery();
  const expedition = useGetSrilankaExpeditionDataQuery();
  const hiking = useGetSrilankaHikingDataQuery();
  const peakclimbing = useGetSrilankaPeakClimbingDataQuery();
  const vehicleTour = useGetSrilankaVehicleTourDataQuery();
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <h5
            style={{
              color:"gray"
            }}
          >
            Trekking In Srilanka
          </h5>
          {trek?.data?.trekFromSrilanka?.map((item) => {
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
              color:"gray"
            }}
          >
            DayExcursion In Srilanka
          </h5>
          {dayexcursion?.data?.dayexcursion?.map((item) => {
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
             color:"gray"
            }}
          >
            Expedition In Srilanka
          </h5>
          {expedition?.data?.expeditionSrilanka?.map((item) => {
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
              color:"gray"
            }}
          >
            Hiking In Srilanka
          </h5>
          {hiking?.data?.hiking?.map((item) => {
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
             color:"gray"
            }}
          >
            PeakClimbing In Srilanka
          </h5>
          {peakclimbing?.data?.peakclimbingSrilanka?.map((item) => {
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
             color:"gray"
            }}
          >
            VehicleTour In Srilanka
          </h5>
          {vehicleTour?.data?.vehicleTour?.map((item) => {
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

export default Srilanka;
