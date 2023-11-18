"use client";

import {
  useState,
  useEffect,
  Suspense,
  useDeferredValue,
  useTransition,
} from "react";
import axios from "axios";
import styled from "styled-components";
import { Makgeolli } from "@/types";
import MakgeolliCard from "@/component/makgeolliCard";
import { useRouter } from "next/navigation";
import Layout from "@/component/layout/layout";
import CommonSelect from "@/component/common/select";
import CommonInput from "@/component/common/input";

export default function Home() {
  return (
    <Layout>
      <Styled.Heading>막걸리 리스트</Styled.Heading>

      <Suspense fallback={<div>막걸리 리스트 준비중...</div>}>
        <MakgeolliList />
      </Suspense>
    </Layout>
  );
}

const MakgeolliList = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [makgeolliList, setMakgeolliList] = useState<Makgeolli[]>([]);
  const [sort, setSort] = useState(0);

  const menuList = [
    { code: 0, codeName: "전체보기" },
    { code: 1, codeName: "1만원 미만" },
    { code: 2, codeName: "1만원 ~ 2만원" },
    { code: 3, codeName: "2만원 이상" },
  ];

  const getMakgeollis = async () => {
    const res = await axios.get("/makgeolliList"); // CSR
    setMakgeolliList(res.data);

    //const res = await fetch("/makgeolliList", { cache: "no-store" }); // == SSR
    // const res = await fetch("/makgeolliList", { cache: "force-cache" }); // SSG
    // const res = await fetch("/makgeolliList", { next: { revalidate: 10 } }); // == ISR
    // const data = await res.json();
    // setMakgeolliList(data);
  };

  useEffect(() => {
    getMakgeollis();
  }, []);

  const sortedMakgeolliList =
    sort === 0
      ? makgeolliList
      : makgeolliList.filter((mak) => {
          const price = mak.price || 0;

          if (price < sort * 10000 && price > (sort - 1) * 10000) {
            return mak;
          }
        });

  return (
    <>
      <Styled.Utils>
        <CommonInput value={searchText} setValue={setSearchText} />

        <CommonSelect value={sort} setValue={setSort} menuList={menuList} />
      </Styled.Utils>

      <Styled.ListBox>
        {sortedMakgeolliList
          .filter((makgeolli) => makgeolli.name.includes(searchText))
          .map((makgeolli, i) => (
            <li
              onClick={() => router.push(`../makgeolliView?id=${makgeolli.id}`)}
              key={i}
            >
              <MakgeolliCard {...makgeolli} />
            </li>
          ))}
      </Styled.ListBox>
    </>
  );
};

const Styled = {
  Utils: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  `,
  Heading: styled.h2`
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 800;
  `,
  ListBox: styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  `,
};
