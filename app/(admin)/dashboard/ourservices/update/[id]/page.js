"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FileBase from "react-file-base64";
import {
  useGetOurServicesDataByIdQuery,
  useUpdateOurServicesDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function OurServices({ params }) {
  const { id } = params;
  const { data } = useGetOurServicesDataByIdQuery(id);
  const [updateOurServicesData, { isSuccess }] =
    useUpdateOurServicesDataMutation();
  const [ourServicesData, setOurServicesData] = useState(initialState);
  const router = useRouter();
  const { title, description, image } = ourServicesData;

  useEffect(() => {
    setOurServicesData({
      title: data?.ourServices.title,
      description: data?.ourServices.description,
      image: data?.ourServices.image,
    });
  }, [data]);
  if (isSuccess) {
    router.push("/dashboard/ourservices");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOurServicesData({ id, ourServicesData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setOurServicesData({ ...ourServicesData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>update ourServices Data</h3>
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
        <FileBase
          type="file"
          name="image"
          multiple={false}
          onDone={({ base64 }) =>
            setOurServicesData({ ...ourServicesData, image: base64 })
          }
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
