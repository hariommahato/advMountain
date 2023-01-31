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
import { uploadImage } from "../../../../../../services/upload";
import { formDataFactory } from "../../../../../../helpers/factories";
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
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setTestimonialData({ ...testimonialData, image: response.data.data.secure_url });
    alert("success");
    return;
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
        <input type="file" onChange={handleOnChange} />
        <Button variant="primary" onClick={handleImageAdd}>
          Add
        </Button>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
