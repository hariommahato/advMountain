"use client";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import esewa from "../../images/esewa.png";
import khalti from "../../images/khalti.png";

const Footer = () => {
  return (
    <div style={{ zIndex: "1", backgroundColor: "#75CFB8",}}>
      <Row style={{ marginTop: "3rem", width: "100%", padding: "4rem" }}>
        <Col xs={12} sm={12} md={6} lg={4}>
          <ul style={{ listStyle: "none" }}>
            <h5>Contacts</h5>

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
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <ul style={{ listStyle: "none" }}>
            <h5>Destinations</h5>
            <li>Nepal</li>
            <li>India</li>
            <li>Bhutan</li>
            <li>TIbet</li>
            <li>Pakistan</li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <ul style={{ textDecoration: "none" }}>
            <h5>Essential Links</h5>
            <li style={{ listStyle: "none" }}>
              <Link
                href={"/about"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                About Us
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <Link
                href={"/contact"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href={"/customizetrip"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Customize Trip
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href={"/faq"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Faq
              </Link>
            </li>
          </ul>
        </Col>
        <div
          style={{
            minHeight: "5rem",
            display: "flex",
            alignItems: "center",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          <h6 style={{ color: "b", paddingRight: "10px" }}>
            We Accept Online Payment
          </h6>
          <Image src={esewa} height={50} alt="****" />
          <Image src={khalti} height={50} alt="****" />
        </div>
      </Row>
    </div>
  );
};

export default Footer;
