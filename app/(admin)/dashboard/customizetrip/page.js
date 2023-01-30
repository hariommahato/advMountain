"use client";
import React, { useEffect } from "react";
import {
  useDeleteCustomizeTripDataMutation,
  useGetCustomizeTripDataQuery,
} from "../../../../services/adminInteraction";

import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Link from "next/link";

const CustomizeTrip = () => {
  const router = useRouter;
  const { data } = useGetCustomizeTripDataQuery();
  const [deleteCustomizeTripData, { isSuccess }] =
    useDeleteCustomizeTripDataMutation();
  const handleDeleteClick = (id) => {
    deleteCustomizeTripData(id);
  };

  useEffect(() => {
    if (isSuccess) {
      return alert("Deleted Successfully..!!!");
    }
  }, [isSuccess]);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>PackageName</th>
            <th> Date</th>
            <th>No of Adult</th>
            <th> No of Children</th>
            <th>FullName</th>
            <th>Contact </th>
            <th> Email</th>
            <th>Country</th>
            <th>Message </th>

            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
      
            <tbody>
            {data?.allCustomizeTrip?.map((data) => {
          return (
              <tr  key={data._id}>
                <td>{data._id}</td>
                <td>{data.packagename}</td>
                <td>{data.date}</td>
                <td>{data.noofadult}</td>
                <td>{data.noofchildren}</td>
                <td>{data.fullname}</td>

                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.country}</td>
                <td>{data.message}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "green" }}
                    href={`/dashboard/customizetrip/update/${data._id}`}
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

export default CustomizeTrip;
