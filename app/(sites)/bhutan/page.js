"use client";
import React from "react";
import {
  useGetBhutanTrekDataQuery,
  useGetBhutanDayExcursionDataQuery,
  useGetBhutanExpeditionDataQuery,
  useGetBhutanHikingDataQuery,
  useGetBhutanPeakClimbingDataQuery,
  useGetBhutanVehicleTourDataQuery,
} from "../../../services/adminInteraction";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
const Bhutan = () => {
  const trek = useGetBhutanTrekDataQuery();
  const dayexcursion = useGetBhutanDayExcursionDataQuery();
  const expedition = useGetBhutanExpeditionDataQuery();
  const hiking = useGetBhutanHikingDataQuery();
  const peakclimbing = useGetBhutanPeakClimbingDataQuery();
  const vehicleTour = useGetBhutanVehicleTourDataQuery();
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
            Trekking In Bhutan
          </h5>
          {trek?.data?.trekFromBhutan?.map((item) => {
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
            DayExcursion In Bhutan
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
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            Expedition In Bhutan
          </h5>
          {expedition?.data?.expeditionBhutan?.map((item) => {
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
            Hiking In Bhutan
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
              textDecoration: "underline",
              color: "#E14D2A",
            }}
          >
            PeakClimbing In Bhutan
          </h5>
          {peakclimbing?.data?.peakclimbingBhutan?.map((item) => {
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
            VehicleTour In Bhutan
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

export default Bhutan;
