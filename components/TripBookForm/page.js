"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";
const TripBookForm = ({ price, discount }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [noofPeople, setNoofPeople] = useState(0);
  const discountPercent=discount;
  const discountAmount=((price/100)*discountPercent)
  console.log(discountAmount)
  console.log(discountPercent)
  const handleIncrease=()=>{
    setNoofPeople(noofPeople+1)
    setTotalPrice((totalPrice+totalPrice)-discountAmount)
  }
  const handleDecrease=()=>{
    setNoofPeople(noofPeople-1)
    setTotalPrice((totalPrice)-(discountAmount+price))

  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        position: "sticky",
      }}
    >
      <h5>All Inclusive Price</h5>
      <h6>Rs {totalPrice}</h6>
      <DropdownButton id="dropdown-basic-button" title="Show Group Price">
        <Table striped hover>
          <thead>
            <tr>
              <th>No of People</th>
              <th>Price Per/Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rs 1400</td>
            </tr>
            <tr>
              <td>2-4</td>
              <td>Rs 1300</td>
            </tr>
            <tr>
              <td>5-8</td>
              <td colSpan={2}>Rs 1100</td>
            </tr>
          </tbody>
        </Table>
      </DropdownButton>
      <div>
        <input
          type="date"
          placeholder="Pick Your Date"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            width: "100%",
            marginTop: "3px",
          }}
        />
        <input
          type="number"
          placeholder="No of Person"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            width: "100%",
            marginTop: "3px",
          }}
          value={noofPeople}
        />
      </div>
      <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <Button variant="danger" onClick={handleDecrease}>
          -
        </Button>
        <Button variant="success" onClick={handleIncrease}>
          +
        </Button>
      </div>
      <div>
        <Button
          style={{
            width: "100%",
            marginTop: "3px",
            backgroundColor: "#89CFFD",
          }}
        >
          Book My Trip
        </Button>
      </div>
    </div>
  );
};

export default TripBookForm;
