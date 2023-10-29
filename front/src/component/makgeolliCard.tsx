"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Makgeolli } from "@/types";
import styled from "styled-components";

export default function MakgeolliCard(props: Makgeolli) {
  const router = useRouter();
  return (
    <StyledCard onClick={() => router.push("/makgeolliView")}>
      <h3 className="mak_name">{props.name}</h3>
      <div className="mak_price">
        {props.price ? props.price.toLocaleString() + "원" : "가격정보가 없음"}
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 8px;
  border: 1px gray solid;
  border-radius: 4px;

  .mak_name {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
  }
  .mak_price {
    color: #989898;
  }
`;
