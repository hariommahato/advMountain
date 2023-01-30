"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Toast } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { useCreateContactUsDataMutation } from "../../../services/adminInteraction";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  packageName: "",
  message: "",
};

const Contact = () => {
  const [contactData, setContactData] = useState(initialState);
  const router = useRouter();
  const { name, phoneNumber, email, packageName, message } = contactData;
  const [createContactUsData, { isSuccess }] = useCreateContactUsDataMutation();
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createContactUsData(contactData);

    setContactData("");
  };
  useEffect(() => {
    if (isSuccess) {
      alert("Message Sent Succesfully ...!!!!!");
      history.back()
    }
  }, [isSuccess]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
          height: "30rem",
          width: "100%",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem" }}>Contact Us</h1>
        </div>
      </div>
      <Container>
        <Row style={{ marginTop: "3rem " }}>
          <h4>Contact Us </h4>
          <Col xs={12} md={6} sm={12} lg={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    justifyContent: "center",
                  }}
                >
                  <h5>Get In Touch</h5>
                  <span>
                    <IoLocationOutline
                      style={{
                        fontSize: "20px",
                        color: "#FF7B54",
                        marginRight: "10px",
                      }}
                    />
                    Balkumari Marg,samakushi,kathmandu{" "}
                  </span>
                  <span>
                    <BsTelephone
                      style={{
                        fontSize: "20px",
                        color: "#FF7B54",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <AiOutlineMobile
                      style={{
                        fontSize: "20px",
                        color: "#FF7B54",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <FaViber
                      style={{
                        fontSize: "20px",
                        color: "#FF7B54",
                        marginRight: "10px",
                      }}
                    />
                    867888888{" "}
                  </span>
                  <span>
                    <AiOutlineMail
                      style={{
                        fontSize: "20px",
                        color: "#FF7B54",
                        marginRight: "10px",
                      }}
                    />
                    info@adventureMountain.com
                  </span>
                  <div>
                    <span>
                      <BsGlobe
                        style={{
                          fontSize: "20px",
                          color: "#FF7B54",
                          marginRight: "10px",
                        }}
                      />
                      info@adventureMountain.com
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={{ padding: "1rem" }}
                    name="name"
                    value={name}
                    onChange={onInputChange}
                  />
                  <input
                    type="number"
                    placeholder="Your Number"
                    style={{ padding: "1rem" }}
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onInputChange}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={{ padding: "1rem" }}
                    name="email"
                    value={email}
                    onChange={onInputChange}
                  />{" "}
                  <input
                    type="text"
                    placeholder="Of Which Package do you want to know about?"
                    style={{ padding: "1rem" }}
                    value={packageName}
                    name="packageName"
                    onChange={onInputChange}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={2}
                    name="message"
                    value={message}
                    onChange={onInputChange}
                  />
                  <Button
                    style={{ backgroundColor: "#001253", padding: ".5rem" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: "3rem" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.88376439247!2d85.33046258032283!3d27.718183472093013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1979f9421f8f%3A0xd6e0c21ed996dfac!2sUnitech%20IT%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1673599693744!5m2!1sen!2snp"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "30rem" }}
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default Contact;
