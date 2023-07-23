"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);

  return (
    <>
      <h2>HOME</h2>
      <div>
        <p>안녕하세요 {name}님!</p>
      </div>
    </>
  );
}
