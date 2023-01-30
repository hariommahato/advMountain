"use client";
import React, { useEffect } from "react";
import {
  useDeleteAboutDataMutation,
  useGetAboutUsDataQuery,
} from "../../../../services/adminInteraction";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Spinner from "react-bootstrap/Spinner";

import Link from "next/link";

const About = () => {
  const router = useRouter;
  const { data, isLoading } = useGetAboutUsDataQuery();
  const [deleteAboutData, { isSuccess }] = useDeleteAboutDataMutation();

  const handleDeleteClick = async (id) => {
    await deleteAboutData(id);
  };
  useEffect(() => {
    if (isSuccess) {
      return alert("Deletd Successfully ");
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <div>
      {data?.allAboutUs?.map((data) => {
        return (
          <Col key={data._id}>
            <Card>
              <Card.Img
                variant="top"
                src={data.image}
                style={{ height: "10rem", width: "10rem", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Link href={`/dashboard/about/update/${data._id}`}>
                  <Button>Edit</Button>
                </Link>

                <Button
                  variant="primary"
                  style={{ marginLeft: "10rem" }}
                  onClick={() => {
                    handleDeleteClick(`${data._id}`);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  );
};

export default About;
