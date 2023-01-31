"use client";
import { useEffect, useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadImage } from "../../../../../../services/upload";
import { formDataFactory } from "../../../../../../helpers/factories";
import {
  useGetAboutUsDataByIdQuery,
  useUpdateAboutDataMutation,
} from "../../../../../../services/adminInteraction";
import { useRouter } from "next/navigation";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function About({ params }) {
  const { id } = params;
  const { data } = useGetAboutUsDataByIdQuery(id);
  const [updateAboutData, { isSuccess }] = useUpdateAboutDataMutation();
  const [aboutData, setAboutData] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState("");
  const { title, description, image } = aboutData;
  const router = useRouter();
  useEffect(() => {
    setAboutData({
      title: data?.aboutUs.title,
      description: data?.aboutUs.description,
      image: data?.aboutUs.image,
    });
  }, [data]);
  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/about");
    }
  }, [isSuccess]);
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setAboutData({ ...aboutData, image: response.data.data.secure_url });
    alert("success");
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAboutData({ id, aboutData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData({ ...aboutData, [name]: value });
  };
  console.log(aboutData);
  return (
    <>
      <Form>
        <h3>Add About Data</h3>
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
