"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FileBase from "react-file-base64";
import { useGetAboutUsDataByIdQuery ,useUpdateAboutDataMutation} from "../../../../../../services/adminInteraction";
const initialState = {
  title: "",
  description: "",
  image: "",
};
export default function About({ params }) {
  const { id } = params;
  const { data } = useGetAboutUsDataByIdQuery(id);
  const [updateAboutData]=useUpdateAboutDataMutation();
  const [aboutData, setAboutData] = useState(initialState);
  const { title, description, image } = aboutData;
  {
    console.log(data?.aboutUs.title);
  }

  useEffect(() => {
    setAboutData({
      title: data?.aboutUs.title,
      description: data?.aboutUs.description,
      image: data?.aboutUs.image,
    });
  }, [data]);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAboutData({id,aboutData})
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData({ ...aboutData, [name]: value });
  };
  console.log(aboutData)
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
        <FileBase
          type="file"
          name="image"
          multiple={false}
          onDone={({ base64 }) => setAboutData({ ...aboutData, image: base64 })}
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}
