"use client";
import React, { useEffect } from "react";
import {
  useDeleteHeroCarouselDataMutation,
  useGetHeroCarouselDataQuery,
} from "../../../../services/adminInteraction";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Carousel = () => {
  const router = useRouter;
  const { data, isLoading } = useGetHeroCarouselDataQuery();
  const [deleteHeroCarouselData,{isSuccess}] = useDeleteHeroCarouselDataMutation();
  const handleDeleteClick = async (id) => {
    await deleteHeroCarouselData(id);
  };
  useEffect(()=>{
    if(isSuccess){
      return(
        alert("Deleted Successfully")
      )
    }
  
  },[isSuccess])
  

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div>
          {data?.allCarousel?.map((data) => {
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
                    <Link href={`/dashboard/carousel/update/${data._id}`}>
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

export default Carousel;
