import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <section.layout>{children}</section.layout>;
}

const section = {
  layout: styled.section`
    padding: 24px;
  `,
};
