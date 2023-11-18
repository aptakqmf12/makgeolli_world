"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { Switch } from "@mui/material";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <StyledHeader>
      <ul className="nav">
        <Link href={"/"}>home</Link>
        <Link href={"/users"}>users</Link>
        <Link href={"/signin"}>signin</Link>
      </ul>

      <div className="utils">
        <Switch
          checked={theme === "dark"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  background-color: #006bc9;

  .nav {
    display: flex;
    justify-content: flex-start;

    > a {
      color: #fff;
      &:hover {
        color: #e0e0e0;
      }
    }
  }
  .utils {
  }
`;
