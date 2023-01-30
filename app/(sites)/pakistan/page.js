"use client";
import React from "react";
import {
  useGetPakistanTrekDataQuery,
  useGetPakistanDayExcursionDataQuery,
  useGetPakistanExpeditionDataQuery,
  useGetPakistanHikingDataQuery,
  useGetPakistanPeakClimbingDataQuery,
  useGetPakistanVehicleTourDataQuery,
} from "../../../services/adminInteraction";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
const Pakistan = () => {
  const  trek = useGetPakistanTrekDataQuery();
  const dayexcursion = useGetPakistanDayExcursionDataQuery();
  const expedition = useGetPakistanExpeditionDataQuery();
  const hiking = useGetPakistanHikingDataQuery();
  const peakclimbing = useGetPakistanPeakClimbingDataQuery();
  const vehicleTour = useGetPakistanVehicleTourDataQuery();
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
            Trekking In Pakistan
          </h5>
          {trek?.data?.trekFromPakistan?.map((item) => {
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
            DayExcursion In Pakistan
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
            Expedition In Pakistan
          </h5>
          {expedition?.data?.expeditionPakistan?.map((item) => {
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
            Hiking In Pakistan
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
            PeakClimbing In Pakistan
          </h5>
          {peakclimbing?.data?.peakclimbingPakistan?.map((item) => {
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
            VehicleTour In Pakistan
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

export default Pakistan;
