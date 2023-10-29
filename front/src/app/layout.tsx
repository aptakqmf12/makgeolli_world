"use client";
import Header from "@/component/layout/header";
import { GlobalStyle } from "./globalStyle";
import StyledComponentsRegistry from "./register";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />

        <Header />

        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
