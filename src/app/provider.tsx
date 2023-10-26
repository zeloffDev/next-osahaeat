"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Header from "./component/Header";
import Footer from "./component/Footer";

type Props = { children: React.ReactNode };
const listPathHidenHeader: string[] = ["/login"];

export default function Provider({ children }: Props) {
  const pathName = usePathname();
  const isLoginPage = listPathHidenHeader.includes(pathName);
  if (isLoginPage) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
  }

  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className="">{children}</div>
      <Footer/>
    </ThemeProvider>
  );
}
