"use client";
import React from "react";
import {
  
  useDeleteTestimonialDataMutation,
 
  useGetTestimonialDataQuery,
} from "../../../../services/adminInteraction";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Testimonial = () => {
  const router = useRouter;
  const { data, isLoading } = useGetTestimonialDataQuery();
  const [deleteTestimonialData] = useDeleteTestimonialDataMutation();
  {
    console.log(data);
  }
  const handleDeleteClick = async (id) => {
    await deleteTestimonialData(id);
  };

  return (
    <>
      {isLoading ? (
        <p style={{color:"red",fontSize:"2rem"}}>Loading... please wait</p>
      ) : (
        <div>
          {data?.allTestimonial?.map((data) => {
            return (
              <Col key={data._id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={data.image}
                    style={{ height: "10rem", width: "10rem", margin: "auto" }}
                  />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.comment}</Card.Text>
                    <Link href={`/dashboard/testimonial/update/${data._id}`}>
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

export default Testimonial;
