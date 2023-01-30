"use client";
import React, { useEffect } from "react";
import {
  useDeleteOurServicesDataMutation,
  useGetOurServicesDataQuery,
} from "../../../../services/adminInteraction";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

import { useRouter } from "next/navigation";
import Link from "next/link";

const OurServices = () => {
  const router = useRouter;
  const { data, isLoading } = useGetOurServicesDataQuery();
  const [deleteOurServicesData, { isSuccess }] =
    useDeleteOurServicesDataMutation();
  const handleDeleteClick = async (id) => {
    await deleteOurServicesData(id);
  };

  useEffect(
    (isSuccess) => {
      if (isSuccess) {
        return alert("Deleted Successfully..!!!");
      }
    },
    [isSuccess]
  );

  return (
    <>
      {isLoading ? (
        <p style={{ color: "red", fontSize: "2rem" }}>Loading... please wait</p>
      ) : (
        <div>
          {data?.allOurServices?.map((data) => {
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
                    <Link href={`/dashboard/ourservices/update/${data._id}`}>
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
      )}
    </>
  );
};

export default OurServices;
