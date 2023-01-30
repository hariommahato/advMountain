"use client";
import React from "react";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../../../services/adminInteraction";

import Table from "react-bootstrap/Table";
import { useRouter } from "next/navigation";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Link from "next/link";

const User = () => {
  const router = useRouter;
  const { data } = useGetAllUserQuery();
  const [deleteUser, { isSuccess }] = useDeleteUserMutation();
  const handleDeleteClick = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>Email</th>
            <th>Password</th>

            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
        {data?.allUser?.map((data) => {
          return (
            <tbody key={data._id}>
              <tr>
                <td>{data._id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>

                <td>
                  <Link
                    style={{ textDecoration: "none", color: "green" }}
                    href={`/dashboard/user/update/${data._id}`}
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
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default User;
