"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadImage } from "../../../../../../services/upload";
import { formDataFactory } from "../../../../../../helpers/factories";
import {
  useGetRecentTourDataByIdQuery,
  useUpdateRecentTourDataMutation
} from "../../../../../../services/adminInteraction";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function RecentTour({ params }) {
  const { id } = params;
  const { data } = useGetRecentTourDataByIdQuery(id);
  const [updateRecentTourData, { isSuccess }] = useUpdateRecentTourDataMutation();
  const [recentTourData, setRecentTourData] = useState(initialState);
  const router = useRouter();
  const { title, description, image } = recentTourData;
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setRecentTourData({ ...recentTourData, image: response.data.data.secure_url });
    alert("success");
    return;
  }

  useEffect(() => {
    setRecentTourData({
      title: data?.recentTour.title,
      description: data?.recentTour.description,
      image: data?.recentTour.image,
    });
  }, [data]);

  if(isSuccess){
    router.push('/dashboard/recenttour')
    console.log("success")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecentTourData({ id, recentTourData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setRecentTourData({ ...recentTourData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>Ipdate RecentTour Data</h3>
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
