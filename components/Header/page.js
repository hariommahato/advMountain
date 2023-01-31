"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
function Header({
  everestTrek,
  annapurnaTrek,
  manasluTrek,
  langtangTrek,
  offbeatenTrek,
  peakClimbing,
  expedition,
  dayexcursion,
  vehicletour,
  hiking,
}) {
  return (
    <Navbar bg="light" expand="lg" style={{ height: "6rem",marginTop:"3rem" }} fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <NavDropdown title="Trekking" id="navbarScrollingDropdown">
              <NavDropdown title="Everest " id="navbarScrollingDropdown">
                {everestTrek?.everestTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/trekking/${data._id}`}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Annapurna " id="navbarScrollingDropdown">
                {annapurnaTrek?.annapurnaTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/trekking/${data._id}`}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Manaslu " id="navbarScrollingDropdown">
                {manasluTrek?.manasluTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/trekking/${data._id}`}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Langtang " id="navbarScrollingDropdown">
                {langtangTrek?.langtangTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/trekking/${data.id}`}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Off Beaten Trek "
                id="navbarScrollingDropdown"
              >
                {offbeatenTrek?.offbeatenTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/trekking/${data._id}`}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Peak Climbing " id="navbarScrollingDropdown">
              {peakClimbing?.allPeakClimbing?.map((data) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    href={`/peakclimbing/${data._id}`}
                    style={{ width: "100%" }}
                    key={data._id}
                  >
                    {data.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="Expedition " id="navbarScrollingDropdown">
              {expedition?.allExpedition?.map((data) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    key={data._id}
                    href={`/expedition/${data._id}`}
                    style={{ width: "100%" }}
                  >
                    {data.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="Day Excursion " id="navbarScrollingDropdown">
              {dayexcursion?.allDayExcursion?.map((data) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    key={data._id}
                    href={`/dayexcursion/${data._id}`}
                    style={{ width: "100%" }}
                  >
                    {data.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="Vehicle Tour" id="navbarScrollingDropdown">
              {vehicletour?.allVehicleTour?.map((data) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    key={data._id}
                    href={`/vehicletour/${data._id}`}
                    style={{ width: "100%" }}
                  >
                    {data.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="Hiking " id="navbarScrollingDropdown">
              {hiking?.hiking?.map((data) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    key={data._id}
                    href={`/hiking/${data._id}`}
                    style={{ width: "100%" }}
                  >
                    {data.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>

          <Nav.Link
            as={Link}
            href="/faq"
            style={{ paddingRight: "30px", color: "#D32626", cursor: "pointer" }}
          >
            FAQ
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/review"
            style={{ color: "#D32626", cursor: "pointer" }}
          >
            POST A REVIEW
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
