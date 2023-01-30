"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import esewa from '../../images/esewa.png'
import khalti from '../../images/khalti.jpg'
// import styles from "../../Styles/Footer.module.scss";
const Footer = () => {
  return (
    <Container style={{ zIndex: "1" }}>
      <Row style={{ marginTop: "3rem", width: "100%", margin: "auto" }}>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h5>AdventureMountain</h5>
          <div>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              quis ipsam eaque. Odit tenetur, accusantium beatae repellat
              exercitationem deserunt consequuntur id enim repudiandae nisi
              tempore, natus obcaecati harum reprehenderit adipisci.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h5 style={{ textAlign: "center" }}>Contacts</h5>
          <div style={{ textAlign: "center", color: "gray" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <BsFillTelephoneFill
                  style={{ color: "#FF7B54", marginRight: "5px" }}
                />
                9808899681
              </li>
              <li>
                <AiFillMail style={{ color: "#FF7B54", marginRight: "5px" }} />
                adventuremountain@gmail.com
              </li>
              <li>
                <FaWhatsapp style={{ color: "#FF7B54", marginRight: "5px" }} />
                whatsapp
              </li>
              <li>
                <FaViber style={{ color: "#FF7B54", marginRight: "5px" }} />
                Viber
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h5 style={{ textAlign: "center" }}>Destinations</h5>
          <div style={{ textAlign: "center", color: "gray" }}>
            <ul style={{ listStyle: "none" }}>
              <li>Nepal</li>
              <li>India</li>
              <li>Bhutan</li>
              <li>TIbet</li>
              <li>Pakistan</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h5 style={{ textAlign: "center" }}>Essential Links</h5>
          <div style={{ textAlign: "center", color: "gray" }}>
            <ul style={{textDecoration:"none"}}>
              <li style={{listStyle:"none"}}><Link href={"/about"}>About Us</Link></li>
              <li style={{listStyle:"none"}}> <Link href={"/contact"}>Contact Us</Link></li>
              <li style={{listStyle:"none"}}><Link href={"/customizetrip"}>Customize Trip</Link></li>
              <li style={{listStyle:"none"}}><Link href={"/faq"}>Faq</Link></li>

            </ul>

            
           
            
          </div>
        </Col>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            minHeight: "5rem",
            display: "flex",
            alignItems: "center",
            padding: "20px",
            justifyContent: "flex-start",
          }}
        >
          <h6 style={{ color: "gray", paddingRight: "10px" }}>
            We Accept Online Payment
          </h6>
          <Image
            src={esewa}
            height={50}
            width={100}
            style={{ color: "white" }}
            alt="****"
          />
          <Image
            src={khalti}
            height={50}
            width={100}
            style={{ color: "white" }}
            alt="****"
          />
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
