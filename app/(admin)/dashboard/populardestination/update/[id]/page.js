"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadImage } from "../../../../../../services/upload";
import { formDataFactory } from "../../../../../../helpers/factories";
import {
  useGetPopularDestinationDataByIdQuery,
  useUpdatePopularDestinationDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  image: "",
  name: "",
};
export default function ChooseUs({ params }) {
  const { id } = params;
  const { data } = useGetPopularDestinationDataByIdQuery(id);
  const [updatePopularDestinationData, { isSuccess }] =
    useUpdatePopularDestinationDataMutation();
  const [popularDestinationData, setPopularDestinationData] =
    useState(initialState);
  const router = useRouter();
  const { image, name } = popularDestinationData;
  const [selectedImage, setSelectedImage] = useState("");
  function handleOnChange(e) {
    setSelectedImage(e.target.files[0]);
  }
  async function handleImageAdd() {
    const formData = formDataFactory(selectedImage, "reactupload");
    const response = await uploadImage(formData);
    setPopularDestinationData({
      ...popularDestinationData,
      image: response.data.data.secure_url,
    });
    alert("success");
    return;
  }

  useEffect(() => {
    setPopularDestinationData({
      name: data?.popularDestination.name,
      image: data?.popularDestination.image,
    });
  }, [data]);

  if (isSuccess) {
    router.push("/dashboard/populardestination");
    console.log("success");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePopularDestinationData({ id, popularDestinationData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPopularDestinationData({ ...popularDestinationData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>update popularDestination Data</h3>
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
