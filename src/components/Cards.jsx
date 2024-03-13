'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Clock, More } from "@/assets/svg";
import Card from "./common/Card";
import { Message, Timer } from "@/assets/svg";
import { Facebook, Insta, Twitter, Intranet, Read } from "@/assets/svg";
import global from '@/global.module.css'

const Cards = () => {

  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: "1rem",
        margin: "1rem",
        marginInline: "2rem",
        borderRadius: "3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        columnGap: "1rem",
        rowGap: "1rem",
      }}
    >
      {data.map((item, index) => {
        return (
          <CardItem key={index}/>
        );
      })}
    </div>
  );
};

export default Cards;

const CardItem = () => {
  const [showMenu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!showMenu);
  }

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          background: "#FAFAFA",
          padding: "10px",
          borderRadius: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Economics 2nd Year
          </p>
          <Image src={More} alt="More Image" style={{ cursor: 'pointer' }} onClick={handleMenu}></Image>
        </span>
        <p
          style={{
            color: "#757575",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          A short Description should be written here in the space
          allocated here
        </p>
        
        {showMenu &&
          <div style={{ position: 'absolute', backgroundColor: '#ECEAEA', padding: '15px', borderRadius: '10px', right: '10px', top: '35px', display:'flex', flexDirection:'column', gap:'10px'}}>
            <span
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <Card></Card>
              <Card></Card>
            </span>
            <span
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <Image src={Facebook}></Image>
              <Image src={Intranet}></Image>
              <Image src={Read}></Image>
            </span>
          </div>
        }

        <span
          style={{
            display: "flex",
            gap: "8px",
            marginTop:'20px'
          }}
        >
          <span
            style={{
              background: "#C7EBB0",
              display: "flex",
              alignItems: "center",
              borderRadius: "2rem",
              paddingInline: "9px",
            }}
          >
            <Image src={Message} width={40} height={40}></Image>
            <p
              style={{
                fontWeight: "700",
                fontSize: "14px",
                color:'#596A4F'
              }}
            >
              Open Chat
            </p>
          </span>
          <div style={{ cursor: 'pointer', height: '40px', backgroundColor: '#F3D7D6', borderRadius: '50px', padding: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Image src={Clock} alt="clock" className={`${global.image}`} />
            <p style={{ flexShrink: 0, color: '#842B2A', fontWeight: 600 }}>15 days</p>
          </div>
        </span>
      </span>
    </div>
  )
}
