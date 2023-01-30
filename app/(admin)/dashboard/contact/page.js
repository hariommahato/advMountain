"use client";
import React, { useEffect } from "react";
import {
  useDeleteContactUsDataMutation,
  useGetContactUsDataQuery,
} from "../../../../services/adminInteraction";

import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Link from "next/link";

const Contact = () => {
  const router = useRouter;
  const { data } = useGetContactUsDataQuery();
  const [deleteContactUsData, { isSuccess }] = useDeleteContactUsDataMutation();
  const handleDeleteClick = async (id) => {
    await deleteContactUsData(id);
  };

  useEffect(() => {
    if(isSuccess){
      return alert("Deleted Successfully..!!!");
    }
   
  },[isSuccess]);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th> Name</th>
            <th>Username</th>
            <th> PackageName</th>
            <th>PhoneNumber</th>
            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
       
            <tbody >
            {data?.allContact?.map((data) => {
          return (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.email}</td>
                <td>{data.name}</td>
                <td>{data.message}</td>
                <td>{data.packageName}</td>
                <td>{data.phoneNumber}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "green" }}
                    href={`/dashboard/contact/update/${data._id}`}
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

export default Contact;
