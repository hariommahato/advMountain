"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FileBase from "react-file-base64";
import {
  useGetTestimonialDataByIdQuery,
  useUpdateTestimonialDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  name: "",
  comment: "",
  image: "",
};
export default function Testimonial({ params }) {
  const { id } = params;
  const { data } = useGetTestimonialDataByIdQuery(id);
  const [updateTestimonialData, { isSuccess }] =
    useUpdateTestimonialDataMutation();
  const [testimonialData, setTestimonialData] = useState(initialState);
  const router = useRouter();
  const { name, comment, image } = testimonialData;
  {
    console.log(data);
  }

  useEffect(() => {
    setTestimonialData({
      name: data?.testimonial.name,
      comment: data?.testimonial.comment,
      image: data?.testimonial.image,
    });
  }, [data]);
  if (isSuccess) {
    router.push("/dashboard/testimonial");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTestimonialData({ id, testimonialData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>update Testimonial Data</h3>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="comment"
            placeholder="your comment"
            value={comment}
            onChange={onInputChange}
          />
        </Form.Group>
        <FileBase
          type="file"
          name="image"
          multiple={false}
          onDone={({ base64 }) =>
            setTestimonialData({ ...testimonialData, image: base64 })
          }
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
