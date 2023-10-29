"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Link href={"/"}>home</Link>
      <Link href={"/users"}>users</Link>
      <Link href={"/signin"}>signin</Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 8px;
  background-color: #006bc9;
  > a {
    color: #fff;
    &:hover {
      color: #e0e0e0;
    }
  }
`;
