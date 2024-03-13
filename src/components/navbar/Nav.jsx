"use client";
import React, { useState } from "react";
import styles from "./nav.module.css";
import global from "@/global.module.css";
import Image from "next/image";
import { ArrowDown, Avtar, Info, Logo, Setting } from "@/assets/svg/index";
const Nav = ({ selected, setSelect }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <Image src={Logo} alt="logo" className={`${global.image}`} />
        <h3
          style={{
            flexShrink: 0,
            fontSize: "24px",
            color: "#2B2579",
            fontWeight: 700,
          }}
        >
          Radiant AI Dashboard
        </h3>
      </div>

      <div className={`${styles.switch}`}>
        {btnArray.map((item, index) => (
          <button
            key={index}
            className={`${
              selected === index ? styles.selected : styles.unselected
            }`}
            onClick={() => {
              setSelect(index);
              item.click();
            }}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className={`${styles.menu}`}>
        {menuIconArray.map((item, index) => (
          <Image
            key={index}
            src={item.icon}
            alt={item.alt}
            style={{ cursor: "pointer" }}
          />
        ))}
        <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Image
            src={Avtar}
            alt="user"
            style={{ height: "45px", objectFit: "cover" }}
          />
          <span style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
            <p style={{ fontSize: "16px", fontWeight: 600 }}>Oliver Watson</p>
            <Image src={ArrowDown} alt="expand" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Nav;

const btnArray = [
  { title: "Creating AI Forum", click: () => {} },
  { title: "Manage AI Forums", click: () => {} },
];

const menuIconArray = [
  { icon: Setting, alt: "Setting", click: () => {} },
  { icon: Info, alt: "Info", click: () => {} },
];
