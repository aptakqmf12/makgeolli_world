"use client";
import { useState, useEffect } from "react";
import { Makgeolli } from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Layout from "@/component/layout/layout";
import Image from "next/image";
import styled from "styled-components";
import { Rating } from "@mui/material";
import CommonPieChart from "@/component/chart/pie";

export default function MakgeolliView() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [info, setInfo] = useState<Makgeolli>();

  const record = async () => {
    const res = await axios.get(`/makgeolliView?id=${id}`);
    setInfo(res.data);
  };

  useEffect(() => {
    record();
  }, [id]);

  if (!info) return <>정보가 없습니다.</>;

  return (
    <Layout>
      <div.summary>
        <div className="thumb">
          <Image
            src={`/images/mak0${info?.id}.jpg`}
            fill={true}
            alt="makgeolli"
            priority
          />
        </div>

        <div className="content">
          <h2 className="content__title">{info?.name}</h2>
          <div className="content__price">
            {info?.price
              ? info?.price.toLocaleString() + "원"
              : "가격정보가 없습니다."}
          </div>

          {info?.comment && <p className="content__comment">{info?.comment}</p>}

          <ul className="content__flavor">
            {[
              { label: "단맛", score: info?.flavor?.sweet },
              { label: "신맛", score: info?.flavor?.acid },
              { label: "탄산", score: info?.flavor?.carbonic },
              { label: "바디감", score: info?.flavor?.body },
            ].map((obj, i) => (
              <li key={i}>
                <div className="label">{obj.label}</div>
                <div className="score">
                  <Rating value={obj.score} readOnly />
                </div>
              </li>
            ))}
          </ul>

          <div className="content__chart">
            <CommonPieChart />
          </div>
        </div>
      </div.summary>

      <div.detail>상세정보 작업중...</div.detail>
    </Layout>
  );
}

const div = {
  summary: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .thumb {
      position: relative;
      width: 50%;
      height: 500px;
      border: 1px var(--surface) solid;

      image {
        width: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 50%;
      &__title {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 600;
      }
      &__price {
        color: var(--font);
      }
      &__comment {
        padding: 12px;
        border: 1px var(--surface) solid;
        border-radius: 8px;
        background-color: var(--surface);
        color: var(--onSurface);
      }
      &__chart {
        width: 200px;
        height: 200px;
      }
      &__flavor {
        display: flex;
        flex-direction: column;
        gap: 4px;
        > li {
          display: flex;
          justify-content: flex-start;

          .label {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--secondary);
            color: var(--onSecondary);
            font-weight: 600;
            min-width: 60px;
            border-radius: 4px;
          }
          .score {
          }
        }
      }
    }
  `,

  detail: styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
  `,
};
