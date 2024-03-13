"use client";
import FormLeft from "@/components/FormLeft";
import FormRight from "@/components/FormRight";
import Nav from "@/components/navbar/Nav";
import { useState } from "react";
import Cards from "@/components/Cards";
export default function Home() {
  const [selected, setSelect] = useState(0);
  const [breadActiveCount, setBreadActiveCount] = useState(1);
  return (
    <main>
      <Nav selected={selected} setSelect={setSelect} />
      {selected == 0 ? (
        <div
          style={{
            width: "100%",
            // marginTop: "1rem",
            display: "flex",
            gap: "25px",
            padding: "2rem",
            justifyContent: "space-between",
          }}
        >
          <FormLeft breadActiveCount={breadActiveCount} />
          <FormRight
            setBreadActiveCount={setBreadActiveCount}
            breadActiveCount={breadActiveCount}
          />
        </div>
      ) : (
        <Cards />
      )}
    </main>
  );
}
