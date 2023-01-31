"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useCreateOurServicesDataMutation } from "../../../../../services/adminInteraction";
import { uploadImage } from "../../../../../services/upload";
import { formDataFactory } from "../../../../../helpers/factories";
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
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setOurServicesData({
      ...ourServicesData,
      image: response.data.data.secure_url,
    });
    alert("success");
    return;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createOurServicesData(ourServicesData);
    router.push("/dashboard/ourservices");
    setOurServicesData("");
  };
  useEffect(() => {
    if (isSuccess) {
      return alert("Added Successfully");
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
          <input type="file" onChange={handleOnChange} />
          <Button variant="primary" onClick={handleImageAdd}>
            Add
          </Button>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default OurServices;
