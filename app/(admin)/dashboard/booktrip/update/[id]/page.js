"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  useGetBookTripDataByIdQuery,
  useUpdateBookTripDataMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  packageName: "",
  date: "",
  noofadult: "",
  noofchildren: "",
  fullname: "",
  contact: "",
  email: "",
  country: "",
  message: "",
};
export default function BookTrip({ params }) {
  const { id } = params;
  const { data } = useGetBookTripDataByIdQuery(id);
  const [updateBookTripData, { isSuccess }] =
    useUpdateBookTripDataMutation();
  const [bookTripData, setBookTripData] = useState(initialState);
  const {
    packageName,
    date,
    noofadult,
    noofchildren,
    fullname,
    contact,
    email,
    country,
    message,
  } = bookTripData;
  const router = useRouter();

  useEffect(() => {
    setBookTripData({
      packageName: data?.trip.packageName,
      date: data?.trip.date,
      noofadult: data?.trip.noofadult,
      noofchildren: data?.trip.noofchildren,
      fullname: data?.trip.fullname,
      contact: data?.trip.contact,
      email: data?.trip.email,
      country: data?.trip.country,
      message: data?.trip.message,
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBookTripData({ id, bookTripData });
  };
  if (isSuccess) {
    router.push("/dashboard/booktrip");
  }
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBookTripData({ ...bookTripData, [name]: value });
  };

  return (
    <Container>
      <Form>
        <h3>Update CustomizeTrip Data</h3>
        <Form.Group className="mb-3">
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            type="text"
            name="packageName"
            value={packageName}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={date}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>No of Adult</Form.Label>
          <Form.Control
            type="text"
            name="noofadult"
            value={noofadult}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>No of Children</Form.Label>
          <Form.Control
            type="text"
            name="noofchildren"
            value={noofchildren}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>FullName</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={fullname}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            name="contact"
            value={contact}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={country}
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
    </Container>
  );
}
