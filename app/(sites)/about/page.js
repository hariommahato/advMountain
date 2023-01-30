"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetAboutUsDataQuery } from "../../../services/adminInteraction";
const About = () => {
  const { data } = useGetAboutUsDataQuery();

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
          height: "30rem",
          width: "95%",
          margin: "auto",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem" }}>About Us</h1>
        </div>
      </div>

      {data?.allAboutUs?.map((data) => {
        return (
          <Row
            style={{
              width: "95%",
              margin: "auto",
              marginTop: "3rem ",
              marginBottom: "3rem",
            }}
            key={data._id}
          >
            <Col
              xs={12}
              md={6}
              lg={6}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                minHeight: "30rem",
              }}
            ></Col>
            <Col
              xs={12}
              md={6}
              lg={5}
              style={{ margin: "auto", textAlign: "justify" }}
            >
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default About;
