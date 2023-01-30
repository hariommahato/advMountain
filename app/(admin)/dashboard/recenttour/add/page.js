"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useCreateRecentTourDataMutation } from "../../../../../services/adminInteraction";

import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

const initialState = {
  title: "",
  description: "",
  image: "",
};
const RecentTour = () => {
  const [recentTourData, setRecentTourData] = useState(initialState);
  const [createRecentTourData, { isSuccess }] =
    useCreateRecentTourDataMutation();
  const router = useRouter();
  const { title, description, image } = recentTourData;

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecentTourData(recentTourData);
    router.push("/dashboard/populardestination");
    setPopularDestinationData("");
  };
  useEffect(() => {
    if (isSuccess) {
      return alert("Added Successfully..!!!");
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setRecentTourData({ ...recentTourData, [name]: value });
  };
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
        <Form>
          <h3>Add RecentTour Data</h3>
          <Form.Group className="mb-3">
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={onInputChange}
            />
          </Form.Group>

          <FileBase
            type="file"
            name="image"
            multiple={false}
            onDone={({ base64 }) =>
              setRecentTourData({ ...recentTourData, image: base64 })
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

export default RecentTour;
