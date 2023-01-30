"use client";
import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useCreateTestimonialDataMutation } from "../../../services/adminInteraction";
import FileBase from "react-file-base64";
import { useRouter } from "next/navigation";
const initialState = {
  name: "",
  comment: "",
  image: "",
};
const Review = () => {
  const [testimonialData, setTestimonialData] = useState(initialState);
  const router = useRouter();
  const { image, name, comment } = testimonialData;
  const [createTestimonialData, { isSuccess }] =
    useCreateTestimonialDataMutation();
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTestimonialData(testimonialData);
    router.push("/")
  };
  useEffect(()=>{
    if(isSuccess){
      return(
        alert("Review Sent Successfully ...!!!!!")
      )
    }

  },[isSuccess])
  return (
    <>
      <Container style={{marginTop:"5rem", marginBottom:"5rem"}}>
        <h4>Hey There 👋</h4>
        <h6>Share your tour Experience</h6>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                as="textarea"
                placeholder="Comment "
                style={{ height: "100px" }}
                name="comment"
                value={comment}
                onChange={onInputChange}
              />
            </Form.Group>
            <div style={{ width: "100%", overflow: "hidden" }}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTestimonialData({ ...testimonialData, image: base64 })
                }
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "1rem" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Review;
