"use client";
import { useRouter } from "next/navigation";

import { Button, Col, Container, Row } from "react-bootstrap";

const HeroAbout = ({ data }) => {
  const router = useRouter();
  return (
    <Container style={{ marginTop: "3rem " }}>
      <h1 style={{ textAlign: "center", color: "gray" }}>About Us</h1>
      {data?.allAboutUs?.map((item) => {
        return (
          <Row key={item._id}>
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
              <h4 style={{ color: "gray" }}>{item.title}</h4>
              <p style={{ color: "GrayText" }}>
                {`${item.description}`.slice(0, 150) + "...."}{" "}
              </p>
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
