import React from "react";
import { Zip } from "@/assets/svg";
import Image from "next/image";
import { Facebook, Insta, Twitter, Intranet, Read } from "@/assets/svg";
const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3px",
      }}
    >
      <Image src={Zip}></Image>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Folder1
        </p>
        <p
          style={{
            fontWeight: "500",
            fontSize: "12px",
            color: "#9E9E9E",
          }}
        >
          24.3mg
        </p>
      </span>
    </div>
  );
};

export default Card;
