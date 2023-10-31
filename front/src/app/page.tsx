"use client";

import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
import { Makgeolli } from "@/types";
import MakgeolliCard from "@/component/makgeolliCard";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <Styled.Wrap>
      <Styled.Heading>막걸리 리스트</Styled.Heading>

      <MakgeolliList />
    </Styled.Wrap>
  );
}

const MakgeolliList = () => {
  const router = useRouter();

  const [makgeolliList, setMakgeolliList] = useState<Makgeolli[]>([]);

  const getMakgeollis = async () => {
    const res = await axios.get("/makgeolliList");
    // const res = await fetch("/makgeolliList", { cache: "force-cache" }); // SSG
    // const res = await fetch("/makgeolliList", { cache: "no-store" }); // == SSR
    //const res = await fetch("/makgeolliList", { next: { revalidate: 10 } }); // == ISR
    // const data = await res.json();
    setMakgeolliList(res.data);
  };

  useEffect(() => {
    getMakgeollis();
  }, []);
  return (
    <Styled.ListBox>
      {makgeolliList?.map((makgeolli, i) => (
        <li
          onClick={() => router.push(`../makgeolliView?id=${makgeolli.id}`)}
          key={i}
        >
          <MakgeolliCard {...makgeolli} />
        </li>
      ))}
    </Styled.ListBox>
  );
};

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
