"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { worker } from "@/mock/worker";
import { Makgeolli } from "@/types";
import MakgeolliCard from "@/component/makgeolliCard";

worker.start();

export default function Home() {
  const [makgeolliList, setMakgeolliList] = useState<Makgeolli[]>([]);

  const getMakgeollis = async () => {
    const res = await axios.get("/makgeolli");

    setMakgeolliList(res.data);
  };

  useEffect(() => {
    getMakgeollis();
  }, []);

  return (
    <Styled.Wrap>
      <Styled.Heading>막걸리 리스트</Styled.Heading>

      <Styled.ListBox>
        {makgeolliList.map((makgeolli, i) => (
          <li key={i}>
            <MakgeolliCard {...makgeolli} />
          </li>
        ))}
      </Styled.ListBox>
    </Styled.Wrap>
  );
}

const Styled = {
  Wrap: styled.div`
    padding: 10px;
  `,
  Heading: styled.h2`
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 800;
  `,
  ListBox: styled.ul`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
  `,
};
