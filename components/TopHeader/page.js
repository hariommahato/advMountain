"use client";
import Link from "next/link";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../Styles/TopNavbar.module.scss";
import countryData from "../../FakeData/Country.json";
function TopHeader() {
  return (
    
    <Navbar expand="lg" className={styles.topNavBar} fixed="top">
      <Container fluid className="m-auto">
        <Navbar.Brand className={styles.links} as={Link} href="/">
          Adventure Mountain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{
              maxHeight: "100px",
            }}
            navbarScroll
          >
            {countryData.map((data) => {
              return (
                <Nav.Link
                  className={styles.links}
                  as={Link}
                  href={`${data.path}`}
                  key={data.name}
                >
                  {data.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopHeader;
