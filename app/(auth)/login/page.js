"use client";
import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const router=useRouter()
  const { email, password } = loginData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signIn("credentials",{...loginData,redirect:false}).then(({ok,error})=>{
        if(ok){
            router.push('/dashboard')
        }else{
            router.push('/login')
        }
      })
       
        
    } catch (error) {
        console.log(error);
        
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <Container style={{margin:"auot",marginTop:"10rem"}}>
        <h3 style={{textAlign:"center"}}>Login</h3>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
