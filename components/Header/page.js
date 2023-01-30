"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import {
  useGetEverestTrekDataQuery,
  useGetManasluTrekDataQuery,
  useGetOffBeatenTrekDataQuery,
  useGetAnnapurnTrekDataQuery,
  useGetLangtangTrekDataQuery,
  useGetPeakClimbingDataQuery,
  useGetExpeditionDataQuery,
  useGetDayExcursionDataQuery,
  useGetVehicleTourDataQuery,
  useGetHikingDataQuery,
} from "../../services/adminInteraction";
import Link from "next/link";
function Header() {
  const annapurnaTrekData = useGetAnnapurnTrekDataQuery();
  const everestTreKData = useGetEverestTrekDataQuery();
  const manasluTrekData = useGetManasluTrekDataQuery();
  const langtangTrekData = useGetLangtangTrekDataQuery();
  const offBeatenTrekData = useGetOffBeatenTrekDataQuery();
  const peakClimbingData = useGetPeakClimbingDataQuery();
  const expeditionData = useGetExpeditionDataQuery();
  const dayexcursionData = useGetDayExcursionDataQuery();
  const vehicleTour = useGetVehicleTourDataQuery();
  const hikingData = useGetHikingDataQuery();

  return (
    <Navbar bg="light" expand="lg" style={{ height: "6rem" }} variant="sticky">
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
                {everestTreKData?.data?.everestTrek?.map((data) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={{
                        pathname:"/trekking",
                        query:data,
                      }}
                      style={{ width: "100%" }}
                      key={data._id}
                    >
                      {data.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Annapurna " id="navbarScrollingDropdown">
                {annapurnaTrekData?.data?.annapurnaTrek?.map((data) => {
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
                {manasluTrekData?.data?.manasluTrek?.map((data) => {
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
              <NavDropdown title="Langtang " id="navbarScrollingDropdown">
                {langtangTrekData?.data?.langtangTrek?.map((data) => {
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
                {offBeatenTrekData?.data?.offbeatenTrek?.map((data) => {
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
              {peakClimbingData?.data?.allPeakClimbing?.map((data) => {
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
              {expeditionData?.data?.allExpedition?.map((data) => {
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
              {dayexcursionData?.data?.allDayExcursion?.map((data) => {
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
              {vehicleTour?.data?.allVehicleTour?.map((data) => {
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
              {hikingData?.data?.hiking?.map((data) => {
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
            style={{ paddingRight: "30px", color: "blue", cursor: "pointer" }}
          >
            FAQ
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/review"
            style={{ color: "blue", cursor: "pointer" }}
          >
            POST A REVIEW
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// {console.log(hikingData)}
export default Header;
