"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FileBase from "react-file-base64";
import {
  useGetChooseUsDataByIdQuery,
  useUpdateChooseUsDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function ChooseUs({ params }) {
  const { id } = params;
  const { data } = useGetChooseUsDataByIdQuery(id);
  const [updateChooseUsData, { isSuccess }] = useUpdateChooseUsDataMutation();
  const [chooseUsData, setChooseUsData] = useState(initialState);
  const router = useRouter();
  const { title, description, image } = chooseUsData;
  {
    console.log(data);
  }

  useEffect(() => {
    setChooseUsData({
      title: data?.chooseUs.title,
      description: data?.chooseUs.description,
      image: data?.chooseUs.image,
    });
  }, [data]);

  if(isSuccess){
    router.push('/dashboard/chooseus')
    console.log("success")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateChooseUsData({ id, chooseUsData });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setChooseUsData({ ...chooseUsData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>update ChooseUs Data</h3>
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
            setChooseUsData({ ...chooseUsData, image: base64 })
          }
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
