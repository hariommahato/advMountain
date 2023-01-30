"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useGetAboutUsDataQuery } from "../../services/adminInteraction";
const HeroAbout = () => {
  const {data}=useGetAboutUsDataQuery()
  const router = useRouter();
  return (
    <Container style={{ marginTop: "3rem ", }}>
      <h1 style={{textAlign:"center"}}>About Us</h1>
      {data?.allAboutUs?.map((item) => {
        return (
          <Row  key={item._id}>
            <Col xs={12} md={6} lg={6} style={{ height: "20rem" }}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "100%",
                  backgroundSize: "cover",
                  borderRadius: "25px",
                }}
              ></div>
            </Col>
            <Col>
              <h4>{item.title}</h4>
              <p>{`${item.description}`.slice(0, 150) + "...."}</p>
              <Button
                variant="danger"
                size="sm"
                color="danger"
                onClick={() => {
                  router.push("/about");
                }}
              >
                Read More
              </Button>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default HeroAbout;
