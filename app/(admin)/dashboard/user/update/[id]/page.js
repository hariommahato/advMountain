"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../../../../../services/adminInteraction";
const initialState = {
  username: "",
  email: "",
  password: "",
};
export default function User({ params }) {
  const { id } = params;
  const { data } = useGetUserByIdQuery(id);
  const [updateUser, { isSuccess }] = useUpdateUserMutation();
  const [userData, setUserData] = useState(initialState);
  const { username, email, password } = userData;
  const router = useRouter();

  useEffect(() => {
    setUserData({
      username: data?.user.username,
      email: data?.user.email,
      password: data?.user.password,
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ id, userData });
  };
useEffect(()=>{
    if(isSuccess){
        router.push('/dashboard/user')
    }
},[isSuccess])
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Form>
        <h3>Update User Data</h3>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
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
