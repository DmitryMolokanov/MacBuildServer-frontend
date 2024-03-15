"use client";

import Authentication from "./authentication-page/page";
import MainPage from "./main-page/page";
import { useSelector } from "react-redux";
import { authTypes } from "@/types/authTypes";

export default function Auth() {
  const selector = useSelector((state: authTypes) => state.token);

  if (selector.length > 0) return <MainPage />;
  return <Authentication />;
}
