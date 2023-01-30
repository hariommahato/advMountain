"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useCreateChooseUsDataMutation } from "../../../../../services/adminInteraction";

import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

const initialState = {
  title: "",
  image: "",

};
const ChooseUs = () => {
  const [chooseUsData, setChooseUsData] = useState(initialState);
  const [createChooseUsData, { isSuccess }] =
    useCreateChooseUsDataMutation();
  const router = useRouter();
  const { title, image, } = chooseUsData;

  const handleSubmit = (e) => {
    e.preventDefault();
    createChooseUsData(chooseUsData);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/chooseus");
      setChooseUsData("");
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setChooseUsData({ ...chooseUsData, [name]: value });
  };
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} style={{margin:"auto"}}>
      <Form>
      <h3>Add ChooseUs Data</h3>
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
     
      <FileBase
        type="file"
        name="image"
        multiple={false}
        onDone={({ base64 }) =>
          setChooseUsData({ ...chooseUsData, image: base64 })
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

export default ChooseUs;
