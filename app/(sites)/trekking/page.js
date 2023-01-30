"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Trekking = () => {
  const router = useRouter();
  const  params= useSearchParams();
  const id=params.get('_id')
  const image=params.get('image')
  console.log(id)
  console.log(image)
  return <div></div>;
};

export default Trekking;
