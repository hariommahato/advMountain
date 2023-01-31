"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const RecentTours = ({ data }) => {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <h1
        style={{
          textAlign: "center",

          color: "gray",
        }}
      >
        Recent Tours
      </h1>
      <Row>
        {data?.allRecentTour?.map((item) => {
          return (
            <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
              <Card
                className="bg-light text-white"
                style={{ margin: ".5rem 0" }}
              >
                <Card.Img
                  src={item.image}
                  alt="Card image"
                  style={{ filter: "brightness(70%)" }}
                />
                <Card.ImgOverlay>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RecentTours;
