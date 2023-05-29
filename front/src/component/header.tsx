"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <nav.header>
      <Link href={"/"}>home</Link>
      <Link href={"/users"}>users</Link>
    </nav.header>
  );
}

const nav = {
  header: styled.nav`
    display: flex;
    gap: 10px;
  `,
};
