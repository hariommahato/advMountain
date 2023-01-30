"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FileBase from "react-file-base64";
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
  {
    console.log(data);
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
        <FileBase
          type="file"
          name="image"
          multiple={false}
          onDone={({ base64 }) =>
            setRecentTourData({ ...recentTourData, image: base64 })
          }
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
