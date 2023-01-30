"use client";
import React, { useEffect } from "react";
import {
  useDeleteRecentTourDataMutation,
  useGetRecentTourDataQuery,
} from "../../../../services/adminInteraction";

import Table from "react-bootstrap/Table";
import { useRouter } from "next/navigation";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Link from "next/link";

const RecentTour = () => {
  const router = useRouter;
  const { data } = useGetRecentTourDataQuery();
  const [deleteRecentTourData, { isSuccess }] =
    useDeleteRecentTourDataMutation();

  const handleDeleteClick = async (id) => {
    await deleteRecentTourData(id);
  };
  useEffect(() => {
    if (isSuccess) {
      alert("Deleted Successfully...");
    }
  });
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th> description</th>
            <th>Image</th>

            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
       
            <tbody >
            {data?.allRecentTour?.map((data) => {
          return (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                  <img
                    src={data.image}
                    alt="/"
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>

                <td>
                  <Link
                    style={{ textDecoration: "none", color: "green" }}
                    href={`/dashboard/recenttour/update/${data._id}`}
                  >
                    <AiFillEdit />
                    Edit
                  </Link>
                </td>
                <td style={{ color: "red" }}>
                  <Link
                    style={{ textDecoration: "none", color: "red" }}
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteClick(`${data._id}`);
                    }}
                  >
                    <AiFillDelete />
                    Delete
                  </Link>
                </td>
              </tr>
                );
              })}
            </tbody>
        
      </Table>
    </div>
  );
};

export default RecentTour;
