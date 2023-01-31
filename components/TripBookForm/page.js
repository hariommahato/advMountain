"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
const TripBookForm = ({ price, discount }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [noofPeople, setNoofPeople] = useState(1);
  const [oldPrice, setOldPrice] = useState(price);
  const discountAmount = oldPrice * (discount / 100);

  useEffect(() => {
    if (price) {
      setTotalPrice(price);
      setOldPrice(price);
    }
  }, [price]);
  const handlePeopleChange = (event) => {
    setNoofPeople(event.target.value);
  };
  {
    console.log(oldPrice);
  }
  {
    console.log(noofPeople);
  }

  const calculatePrice = () => {
    if (noofPeople == 1) {
      setTotalPrice(noofPeople * oldPrice);
    } else {
      setTotalPrice(noofPeople * oldPrice - discountAmount);
    }
  };

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

      <div>
        <label>No of Person</label>
        <input
          value={noofPeople}
          type="number"
          placeholder="No of Person"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            width: "100%",
            marginTop: "3px",
          }}
          onChange={handlePeopleChange}
        />
      </div>
      <Button onClick={calculatePrice} variant="danger" style={{marginTop:"3px"}}>
        Calculate Price
      </Button>

      <div>
        <Link href={"/booktrip"}>
          <Button
            variant="primary"
            style={{
              width: "100%",
              marginTop: "3px",
            }}
          >
            Book My Trip
          </Button>
        </Link>
      </div>
      <div>
        <Link href={"/customizetrip"}>
          <Button
            variant="success"
            style={{
              width: "100%",
              marginTop: "3px",
            }}
          >
            customizetrip
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TripBookForm;
