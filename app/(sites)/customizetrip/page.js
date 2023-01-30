"use client";
import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

const CustomizeTrip = () => {
  return (
    <Card>
      <h3>Customize Your Trip</h3>
      <div style={{ margin: "1rem" }}>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Form.Label>Choose package</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{ padding: "1rem" }}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label>Your Date for travel</label>
            <input
              type="date"
              placeholder="your date for travel"
              style={{ width: "100%", padding: ".9rem" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="number"
              placeholder="No of adults"
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="number"
              placeholder="No of Children"
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <h4>Personal Information</h4>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="text"
              placeholder="Full Name"
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="number"
              placeholder="Contact"
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="email"
              placeholder="something@gmail.com"
             
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <input
              type="text"
              placeholder="Your Country"
              style={{ width: "100%", padding: "1rem" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Control as="textarea" rows={3} placeholder="Any Queries ? Please Type Here" />
          </Col>
        </Row>

        <Button style={{ marginTop: "1rem" }}>Submit</Button>
      </div>
    </Card>
  );
};

export default CustomizeTrip;
