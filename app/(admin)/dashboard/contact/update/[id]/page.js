"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  useGetContactUsDataByIdQuery,
  useUpdateContactUsDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  packageName: "",
  message: "",
};
export default function Contact({ params }) {
  const { id } = params;
  const { data } = useGetContactUsDataByIdQuery(id);
  const [updateContactUsData,{isSuccess}] = useUpdateContactUsDataMutation();
  const [contactData, setContactData] = useState(initialState);
  const { name, phoneNumber, email, packageName, message } = contactData;
  const router=useRouter()

  useEffect(() => {
    setContactData({
      name: data?.contacts.name,
      phoneNumber: data?.contacts.phoneNumber,
      packageName: data?.contacts.packageName,
      email: data?.contacts.email,
      message: data?.contacts.message,
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContactUsData({ id, contactData });
    
  };
if(isSuccess){
  router.push("/dashboard/contact")
}
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  console.log(contactData)
  return (
    <>
      <Form>
        <h3>Update Contact Data</h3>
        <Form.Group className="mb-3">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            value={phoneNumber}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            type="text"
            name="packageName"
            placeholder="package name"
            value={packageName}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            name="message"
            placeholder="message "
            value={message}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          update
        </Button>
      </Form>
    </>
  );
}
