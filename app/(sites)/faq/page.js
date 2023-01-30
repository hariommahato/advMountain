"use client";
import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { useGetFaqDataQuery } from "../../../services/adminInteraction";
import { Container } from "react-bootstrap";
const Faq = () => {
  const { data } = useGetFaqDataQuery();
  let i = 0;
  return (
    <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
      <h2 style={{ textAlign: "center" }}>Some Important Messages</h2>

      <Container>
        <Accordion>
          {data?.allFaq?.map((item) => {
            return (
              <>
                <Accordion.Item key={data._id} eventKey={i++}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              </>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
