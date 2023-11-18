"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Makgeolli } from "@/types";
import styled from "styled-components";
import Image from "next/image";
import { imageToBase64 } from "@/util/image";

export default function MakgeolliCard(props: Makgeolli) {
  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push("/makgeolliView")}>
      <div className="info">
        <h3 className="mak_name">{props.name}</h3>
        <div className="mak_price">
          {props.price
            ? props.price.toLocaleString() + "원"
            : "가격정보가 없음"}
        </div>

        {props.flavor && (
          <ul className="mak_flavor">
            {Object.entries(props.flavor).map((flv, i) => {
              const [key, value] = flv;

              return (
                <li key={i}>
                  <span className={`mark ${key}`}></span>{" "}
                  <strong>{value}</strong>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="thumb">
        <Image
          src={`/images/mak0${props.id}.jpg`}
          // placeholder="blur"
          width={100}
          height={100}
          alt="makgeolli"
          loading="lazy"
        />
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px;
  border: 1px var(--surface) solid;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px var(--primary) solid;
  }

  .info {
    margin-bottom: 10px;
    text-align: center;
    .mak_name {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: 600;
    }
    .mak_price {
      color: #989898;
    }
    .mak_flavor {
      display: flex;
      gap: 12px;
      margin-top: 4px;

      .mark {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        &.sweet {
          background-color: var(--primary);
        }
        &.acid {
          background-color: var(--secondary);
        }
        &.carbonic {
          background-color: var(--error);
        }
        &.body {
          background-color: var(--surface);
        }
      }
    }
  }

  .thumb {
  }
`;
