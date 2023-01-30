"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useGetPopularDestinationDataQuery } from "../../services/adminInteraction";
const PopularDestination = () => {
const {data}=useGetPopularDestinationDataQuery()
  return (
    <Container
      style={{
        marginTop: "3rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          color: "#E14D2A",
        }}
      >
        Popular Destination
      </h1>
      {console.log(data)}
      <Row>
        {data?.allPopularDestination?.map((item) => {
          return (
            <Col xs={12} lg={4} sm={6} md={6} key={item._id}>
              <Card style={{ width: "100%", margin: "1rem 0rem" }}>
                <Card.Img variant="top" src={item.image} />
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                  }}
                >
                  <h6>{item.name}</h6>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PopularDestination;
