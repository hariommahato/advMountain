"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadImage } from "../../../../../services/upload";
import { formDataFactory } from "../../../../../helpers/factories";
import React, { useEffect, useState } from "react";
import { useCreateHikingMutation } from "../../../../../services/adminInteraction";
import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
const Hiking = () => {
  const [highlights, setHighlights] = useState([]);
  const [usefulInfo, setUsefulInfo] = useState([]);
  const [homeImageCarousel, setHomeImageCarousel] = useState([]);
  const [tourImages, setTourImages] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [priceExcluded, setPriceExcluded] = useState([]);
  const [priceIncluded, setPriceIncluded] = useState([]);
  const [firstAidKit, setFirstAidKit] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [ourGuides, setOurGuides] = useState([]);
  const [usefulInfoTitle, setUsefulInfoTitle] = useState("");
  const [country, setCountry] = useState("");
  const [discount, setDiscount] = useState("");
  const [usefulInfoDescription, setUsefulInfoDescription] = useState("");
  const [highlightsTitle, setHighlightsTitle] = useState();
  const [name, setName] = useState("");
  const [totalTime, setTotalTime] = useState();
  const [price, setPrice] = useState();
  const [overview, setOverview] = useState("");
  const [comprehensiveGuide, setComprehensiveGuide] = useState("");

  const [guidesTitle, setGuidesTitle] = useState("");
  const [map, setMap] = useState("");
  const [itineraryTitle, setItineraryTitle] = useState("");
  const [itineraryDescription, setItineraryDescription] = useState("");
  const [priceIncludedItem, setPriceIncludedItem] = useState("");
  const [priceExcludedItem, setPriceExcludeditem] = useState("");
  const [firstAidKitItem, setFirstAidKitItem] = useState("");
  const [equipmentItem, setEquipmentItem] = useState("");
  const [createHiking, { isSuccess }] = useCreateHikingMutation();
  const [experienceRequired, setExperienceRequired] = useState("");
  const [bestTimeToTravel, setBestTimeToTravel] = useState("");
  const [visaAndEntryProcedure, setVisaAndEntryProcedure] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard/hiking");
    }
  }, [isSuccess]);

  function handleOnChange(e) {
    setImage(e.target.files[0]);
  }
  async function handleImageMultipleAdd() {
    const formData = formDataFactory(image, "reactupload");
    const response = await uploadImage(formData);
    homeImageCarousel.push({ carouselImage: response.data.data.url });
    alert("Success");
    return;
  }
  async function handleTourImageAdd() {
    const formData = formDataFactory(image, "reactupload");
    const response = await uploadImage(formData);
    tourImages.push({ tourImage: response.data.data.url });
    alert("success");
    return;
  }
  async function handleMapAdd() {
    const formData = formDataFactory(image, "reactupload");
    const response = await uploadImage(formData);
    setMap(response.data.data.url);
    alert("success");
    return;
  }

  const handleHighlightAdd = (e) => {
    e.preventDefault();
    if (highlightsTitle !== "") {
      highlights.push({ highlightsTitle: highlightsTitle });
      setHighlightsTitle("");
    }
  };

  const handleItineraryAdd = (e) => {
    e.preventDefault();
    if (itineraryTitle !== "" && itineraryDescription !== "") {
      itinerary.push({
        title: itineraryTitle,
        description: itineraryDescription,
      });
      setItineraryTitle(""), setItineraryDescription("");
    }
  };
  const handlePriceIncludedAdd = (e) => {
    e.preventDefault();
    if (priceIncludedItem !== "") {
      priceIncluded.push({ priceIncludedItem: priceIncludedItem });
      setPriceIncludedItem("");
    }
  };
  const handleUsefulInfoAdd = (e) => {
    e.preventDefault();
    if (usefulInfoTitle !== "" && usefulInfoDescription !== "") {
      usefulInfo.push({
        usefulInfoTitle: usefulInfoTitle,
        usefulInfoDescription: usefulInfoDescription,
      });
      setUsefulInfoTitle("");
      setUsefulInfoDescription("");
    }
  };
  const handlePriceExcludedAdd = (e) => {
    e.preventDefault();
    if (priceExcludedItem !== "") {
      priceExcluded.push({ priceExcludedItem: priceExcludedItem });
      setPriceExcludeditem("");
    }
  };
  const handleFirstAidKitAdd = (e) => {
    e.preventDefault();
    if (firstAidKitItem !== "") {
      firstAidKit.push({ firstAidKitItem: firstAidKitItem });
      setFirstAidKitItem("");
    }
  };
  const handleAddMoreEquipment = (e) => {
    e.preventDefault();
    if (equipmentItem !== "") {
      equipment.push({
        equipmentItem: equipmentItem,
      });
      setEquipmentItem("");
    }
  };
  const handleAddOurGuides = (e) => {
    e.preventDefault();
    if (guidesTitle !== "") {
      ourGuides.push({
        guidesTitle: guidesTitle,
      });
      setGuidesTitle("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createHiking({
      name: name,
      totalTime: totalTime,
      price: price,
      discount: discount,
      overview: overview,
      comprehensiveGuide: comprehensiveGuide,
      map: map,
      homeImageCarousel: homeImageCarousel,
      highlights: highlights,
      tourImages: tourImages,
      itinerary: itinerary,
      priceIncluded: priceIncluded,
      priceExcluded: priceExcluded,
      usefulInfo: usefulInfo,
      country: country,
      firstAidKit: firstAidKit,
      equipment: equipment,
      ourGuides: ourGuides,
      experienceRequired: experienceRequired,
      bestTimeToTravel: bestTimeToTravel,
      visaAndEntryProcedure: visaAndEntryProcedure,
    });
  };
  {
    console.log(equipment);
  }
  {
    console.log(bestTimeToTravel);
  }
  {
    console.log(visaAndEntryProcedure);
  }
  {
    console.log(ourGuides);
  }
  return (
    <Container>
      <h1>Add Hiking Data</h1>
      {/* TOur Name Data........... */}
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Label>Tour Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name "
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
        {/* Total No of days Data.............. */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Label>Tour Total Time(No of Days)</Form.Label>
          <Form.Control
            type="number"
            placeholder="totatlTime "
            name="totalTime"
            value={totalTime}
            onChange={(e) => {
              setTotalTime(e.target.value);
            }}
          />
        </Col>
      </Row>

      <Row>
        {/* TOur Cost Data............ */}
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Discount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Discount "
            name="discount"
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="price "
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Col>
        {/* Tour Overview Data................. */}
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Tour Overview</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="tour overview "
            name="overview"
            value={overview}
            onChange={(e) => {
              setOverview(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        {/* BEst time to travel  Data........ */}
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Best Time To Travel </Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="Best Time To Travel "
            name=" bestTimeToTravel"
            value={bestTimeToTravel}
            onChange={(e) => {
              setBestTimeToTravel(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Visa And Entry Procedure</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="Visa And Entry Procedure"
            name="visaAndEntryProcedure"
            value={visaAndEntryProcedure}
            onChange={(e) => {
              setVisaAndEntryProcedure(e.target.value);
            }}
          />
        </Col>
      </Row>

      <Row>
        {/* Comprehensive guide Data........ */}
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Comprehensive Guide</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="Comprehensive Guide "
            name="comprehensive Guide"
            value={comprehensiveGuide}
            onChange={(e) => {
              setComprehensiveGuide(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>Experience Required </Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="Experience Requiredd "
            name="experienceRequired"
            value={experienceRequired}
            onChange={(e) => {
              setExperienceRequired(e.target.value);
            }}
          />
        </Col>
        {/* Highlights Data ..................... */}
        <Col xs={12} sm={12} md={6} lg={4}>
          <Form.Label>highlights</Form.Label>
          <Form.Control
            type="text"
            placeholder="highlights"
            name="highlightsTitle"
            value={highlightsTitle}
            onChange={(e) => {
              setHighlightsTitle(e.target.value);
            }}
          />

          {highlights.map((item, key) => {
            return (
              <div>
                <span>{item.highlightsTitle}</span>
              </div>
            );
          })}

          <div style={{ marginTop: ".3rem", display: "flex", gap: "10px" }}>
            <Button onClick={handleHighlightAdd}>Add More</Button>
            <Button
              variant="danger"
              onClick={() => {
                setHighlights([]);
              }}
            >
              Delete highlights
            </Button>
          </div>
        </Col>
      </Row>

      {/* Useful Info Data............. */}
      <Row>
        <h5>Useful Info</h5>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Label>Useful Info</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="useInfoTitle"
            value={usefulInfoTitle}
            onChange={(e) => {
              setUsefulInfoTitle(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Label>UsefulInfo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="use"
            name="usefulInfoDescription"
            value={usefulInfoDescription}
            onChange={(e) => {
              setUsefulInfoDescription(e.target.value);
            }}
          />
        </Col>
        {usefulInfo.map((item, key) => {
          return (
            <div>
              <span>Title: {item.usefulInfoTitle}</span>
              <br></br>
              <span>Description : {item.usefulInfoDescription}</span>
            </div>
          );
        })}
        <div style={{ marginTop: ".3rem", display: "flex", gap: "10px" }}>
          <Button onClick={handleUsefulInfoAdd} style={{ marginTop: ".3rem" }}>
            Add More
          </Button>
          <Button
            style={{ marginTop: ".3rem" }}
            variant="danger"
            onClick={() => {
              setUsefulInfo([]);
            }}
          >
            Delete UsefulInfo
          </Button>
        </div>
      </Row>
      {/* Home IMage Carousel DAta ................. */}
      <Row style={{ marginTop: "2rem" }}>
        <h5>Add Images For the Carousel</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <input type="file" onChange={handleOnChange} />
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={handleImageMultipleAdd}>Add More</Button>
            <Button
              variant="danger"
              onClick={() => {
                setHomeImageCarousel([]);
              }}
            >
              Delete HomeImageCarousel
            </Button>
          </div>
        </Col>
        <div style={{ display: "flex", gap: "10px" }}>
          {homeImageCarousel.map((item) => {
            return (
              <img
                src={item.carouselImage}
                style={{ height: "100px", width: "100px" }}
              />
            );
          })}
        </div>
      </Row>
      {/* Tour Images Data........... */}
      <Row style={{ marginTop: "2rem" }}>
        <h5>Choose image that are seen when people go there</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <input type="file" onChange={handleOnChange} />
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={handleTourImageAdd}>Add More</Button>
            <Button
              variant="danger"
              onClick={() => {
                setTourImages([]);
              }}
            >
              Delete TourImages
            </Button>
          </div>
        </Col>
        <div style={{ display: "flex", gap: "10px" }}>
          {tourImages.map((item) => {
            return (
              <img
                src={item.tourImage}
                style={{ height: "100px", width: "100px" }}
              />
            );
          })}
        </div>
      </Row>
      {/* Tour Map Data  */}
      <Row>
        <h5>Add Map Of The Tour</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <input type="file" onChange={handleOnChange} />
        </Col>
        <Button variant="primary" onClick={handleMapAdd}>
          Add
        </Button>

        <img src={map} style={{ height: "100px", width: "100px" }} alt="map" />
      </Row>
      <Row>
        <h5>Add Itinerary</h5>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Control
            type="text"
            placeholder="itinerary title "
            name="itineraryTitle"
            value={itineraryTitle}
            onChange={(e) => {
              setItineraryTitle(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form.Control
            type="text"
            placeholder="itinerary description "
            name="itineraryDescription"
            value={itineraryDescription}
            onChange={(e) => {
              setItineraryDescription(e.target.value);
            }}
          />
        </Col>
        {itinerary.map((item) => {
          return (
            <div>
              <span>{item.title}</span>
              <br></br>
              <span>{item.description}</span>
            </div>
          );
        })}
        <div style={{ marginTop: ".3rem", display: "flex", gap: "10px" }}>
          <Button onClick={handleItineraryAdd}>Add More</Button>

          <Button
            variant="danger"
            onClick={() => {
              setItinerary([]);
            }}
          >
            Delete Itinerary
          </Button>
        </div>
      </Row>

      {/* Price Included Data........................... */}
      <Row>
        <h5>Add Data Which are included in that price</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form.Control
            type="text"
            placeholder=" Price included items "
            name="priceIncludedItem"
            value={priceIncludedItem}
            onChange={(e) => {
              setPriceIncludedItem(e.target.value);
            }}
          />
        </Col>
        {priceIncluded.map((item) => {
          return <p>{item.priceIncludedItem}</p>;
        })}
        <div style={{ marginTop: ".5rem", display: "flex", gap: "10px" }}>
          <Button onClick={handlePriceIncludedAdd}>Add More</Button>
          <Button
            variant="danger"
            onClick={() => {
              setPriceIncluded([]);
            }}
          >
            Delete PriceIncluded
          </Button>
        </div>
      </Row>

      {/* Price Excluded Data........................... */}
      <Row>
        <h5>Add Data Which are not included in that price</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form.Control
            type="text"
            placeholder=" Price Excluded items "
            name="priceExcludedItem"
            value={priceExcludedItem}
            onChange={(e) => {
              setPriceExcludeditem(e.target.value);
            }}
          />
        </Col>
        {priceExcluded.map((item) => {
          return <p>{item.priceExcludedItem}</p>;
        })}
        <div style={{ marginTop: ".5rem", display: "flex", gap: "10px" }}>
          <Button onClick={handlePriceExcludedAdd}>Add More</Button>
          <Button
            variant="danger"
            onClick={() => {
              setPriceExcluded([]);
            }}
          >
            Delete priceExcluded
          </Button>
        </div>
      </Row>
      {/* First AId kIt Included  Item */}
      <Row>
        <h5>What are thing included in the first aid</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form.Control
            type="text"
            placeholder="Included things in firstAid Kit "
            name="firstAidKitItem"
            value={firstAidKitItem}
            onChange={(e) => {
              setFirstAidKitItem(e.target.value);
            }}
          />
        </Col>
        {firstAidKit.map((item) => {
          return <p>{item.firstAidKitItem}</p>;
        })}
        <div style={{ marginTop: ".5rem", display: "flex", gap: "10px" }}>
          <Button onClick={handleFirstAidKitAdd}>Add More</Button>

          <Button
            variant="danger"
            onClick={() => {
              setFirstAidKit([]);
            }}
          >
            Delete FirstAidKit
          </Button>
        </div>
      </Row>

      {/* Equipment and Packaging list  Included  Item */}
      <Row>
        <h5>Equipment And Packaging List Item</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form.Control
            type="text"
            name="equipmentItem"
            value={equipmentItem}
            onChange={(e) => {
              setEquipmentItem(e.target.value);
            }}
          />
        </Col>
        {equipment.map((item) => {
          return <p>{item.equipmentItem}</p>;
        })}
        {console.log(equipment)}
        <div style={{ marginTop: ".5rem", display: "flex", gap: "10px" }}>
          <Button onClick={handleAddMoreEquipment}>Add More</Button>

          <Button
            variant="danger"
            onClick={() => {
              setEquipment([]);
            }}
          >
            Delete Equipment
          </Button>
        </div>
      </Row>

      {/* Our Guides Item */}
      <Row>
        <h5>Our Guides Item</h5>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form.Control
            type="text"
            name="guidesTitle"
            value={guidesTitle}
            onChange={(e) => {
              setGuidesTitle(e.target.value);
            }}
          />
        </Col>
        {ourGuides.map((item) => {
          return <p>{item.guidesTitle}</p>;
        })}
        {console.log(ourGuides)}
        <div style={{ marginTop: ".5rem", display: "flex", gap: "10px" }}>
          <Button onClick={handleAddOurGuides}>Add More</Button>

          <Button
            variant="danger"
            onClick={() => {
              setOurGuides([]);
            }}
          >
            Delete OurGuide
          </Button>
        </div>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h5>Country</h5>
          <Form.Check
            type="radio"
            id="nepal"
            label="nepal"
            value={"nepal"}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            id="india"
            label="india"
            value={"india"}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            id="bhutan"
            name="country"
            label="bhutan"
            value={"bhutan"}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            id="pakistan"
            label="pakistan"
            value={"pakistan"}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            id="tibet"
            label="tibet"
            name="country"
            value={"tibet"}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            id="srilanka"
            label="srilanka"
            value={"srilanka"}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Col>
      </Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default Hiking;
