"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useCreateAboutDataMutation } from "../../../../../services/adminInteraction";
import { useRouter } from "next/navigation";
import { Row, Col } from "react-bootstrap";
const initialState = {
  title: "",
  image: "",
  description: "",
};
const About = () => {
  const [aboutData, SetAboutData] = useState(initialState);
  const [createAboutData, { isSuccess }] = useCreateAboutDataMutation();
  const router = useRouter();
  const { title, image, description } = aboutData;

  const handleSubmit = (e) => {
    e.preventDefault();
    createAboutData(aboutData);
    router.push("/dashboard/about");
    SetAboutData("");
  };

  useEffect(() => {
    if (isSuccess) {
      return alert("Added Successfully");
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    SetAboutData({ ...aboutData, [name]: value });
  };
  return (
    <Row>
      <Col lg={6} md={12} sm={12} style={{ margin: "auto" }}>
        <Form>
          <h3>Add About Data</h3>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Example:About Us"
              value={title}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={onInputChange}
            />
          </Form.Group>
          <FileBase
            type="file"
            name="image"
            multiple={false}
            onDone={({ base64 }) =>
              SetAboutData({ ...aboutData, image: base64 })
            }
          />
          <div style={{ marginTop: "1rem" }}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default About;
