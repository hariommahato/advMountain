"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useCreateOurServicesDataMutation } from "../../../../../services/adminInteraction";

import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";
const initialState = {
  title: "",
  image: "",
  description: "",
};
const OurServices = () => {
  const [ourServicesData, setOurServicesData] = useState(initialState);
  const [createOurServicesData, { isSuccess }] =
    useCreateOurServicesDataMutation();
  const router = useRouter();
  const { title, image, description } = ourServicesData;

  const handleSubmit = (e) => {
    e.preventDefault();
    createOurServicesData(ourServicesData);
    router.push("/dashboard/ourservices");
    setOurServicesData("");
  };
  useEffect(() => {
    if (isSuccess) {
      return(
        alert("Added Successfully")
      )
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setOurServicesData({ ...ourServicesData, [name]: value });
  };
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
        <Form>
          <h3>Add OurServices Data</h3>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="title"
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
              setOurServicesData({ ...ourServicesData, image: base64 })
            }
          />

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default OurServices;
