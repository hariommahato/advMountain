"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useCreateTestimonialDataMutation } from "../../../../../services/adminInteraction";
import { uploadImage } from "../../../../../services/upload";
import { formDataFactory } from "../../../../../helpers/factories";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

const initialState = {
  name: "",
  image: "",
  comment: "",
};
const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState(initialState);
  const [createTestimonialData, { isSuccess }] =
    useCreateTestimonialDataMutation();
  const router = useRouter();
  const { name, image, comment } = testimonialData;
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setTestimonialData({
      ...testimonialData,
      image: response.data.data.secure_url,
    });
    alert("success");
    return;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createTestimonialData(testimonialData);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/testimonial");
      setTestimonialData("");
    }
  }, [isSuccess]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
  };
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} style={{ margin: "auto" }}>
        <Form>
          <h3>Add Testimonial Data</h3>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>comment</Form.Label>
            <Form.Control
              type="text"
              name="comment"
              placeholder="Enter your message"
              value={comment}
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

export default Testimonial;
