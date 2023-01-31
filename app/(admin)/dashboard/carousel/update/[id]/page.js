"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadImage } from "../../../../../../services/upload";
import { formDataFactory } from "../../../../../../helpers/factories";
import {
  useGetHeroCarouselDataByIdQuery,
  useUpdateHeroCarouselDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function Carousel({ params }) {
  const { id } = params;
  const { data } = useGetHeroCarouselDataByIdQuery(id);
  const [updateHeroCarouselData, { isSuccess }] =
    useUpdateHeroCarouselDataMutation();
  const [carouselData, setCarouselData] = useState(initialState);
  const router = useRouter();
  const { title, description, image } = carouselData;
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setCarouselData({ ...carouselData, image: response.data.data.secure_url });
    alert("success");
    return;
  }
  useEffect(() => {
    setCarouselData({
      title: data?.carousel.title,
      description: data?.carousel.description,
      image: data?.carousel.image,
    });
  }, [data]);

  {
    isSuccess ? router.push("/dashboard/carousel") : "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHeroCarouselData({ id, carouselData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCarouselData({ ...carouselData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>update Carousel Data</h3>
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
            placeholder="description"
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
    </>
  );
}
