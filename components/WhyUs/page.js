"use client";
import Image from "next/image";
import React from "react";

import styles from "../../Styles/WhyChooseUs.module.scss";

const WhyUs = ({ data }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1 style={{ textAlign: "center", color: "gray" }}>
        why we are different from other?
      </h1>
      <div className={styles.whychooseusMain}>
        {data?.allChooseUs?.map((data) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "Center",
              }}
              key={data._id}
            >
              <Image
                src={data.image}
                alt="/"
                width={"130"}
                height={"130"}
                style={{ borderRadius: "50%" }}
              />
              <h6>{data.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
