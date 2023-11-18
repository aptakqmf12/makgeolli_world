"use client";
import Header from "@/component/layout/header";
import { GlobalStyle } from "../style/globalStyle";
import StyledComponentsRegistry from "./register";
import { worker } from "@/mock/worker";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

worker.start();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextThemesProvider storageKey="data-theme" attribute="data-theme">
          <GlobalStyle />

          <Header />

          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextThemesProvider>
      </body>
    </html>
  );
}
