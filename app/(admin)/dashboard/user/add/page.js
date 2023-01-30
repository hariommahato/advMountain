"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useRegisterUserMutation } from "../../../../../services/adminInteraction";
import { useRouter } from "next/navigation";
import { Row, Col } from "react-bootstrap";
const initialState = {
  username: "",
  email: "",
  password: "",
};
const User = () => {
  const [userData, setUserData] = useState(initialState);
  const [registerUser, { isSuccess }] = useRegisterUserMutation();
  const router = useRouter();
  const { username, email, password } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/user");
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Row>
      <Col lg={6} md={12} sm={12} style={{ margin: "auto" }}>
        <Form>
          <h3>Register New Admin</h3>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Form.Group>

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

export default User;
