"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useCreateFaqDataMutation } from "../../../../../services/adminInteraction";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
const initialState = {
  question: "",
  answer: "",
};
const Faq = () => {
  const [faqData, setFaqData] = useState(initialState);
  const [createFaqData, { isSuccess }] = useCreateFaqDataMutation();
  const router = useRouter();
  const { question, answer } = faqData;

  const handleSubmit = (e) => {
    e.preventDefault();
    createFaqData(faqData);
    router.push("/dashboard/faq");
    setFaqData("");
  };

  useEffect(() => {
    if (isSuccess) {
      return alert("Added Successfully");
    }
  }, [isSuccess]);
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFaqData({ ...faqData, [name]: value });
  };
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
          <Form>
            <h3>Add Faq Data</h3>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                name="question"
                placeholder="question"
                value={question}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                as={"textarea"}
                type="text"
                name="answer"
                placeholder="Enter Answer"
                value={answer}
                onChange={onInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Faq;
