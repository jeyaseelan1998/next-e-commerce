"use client";

import { getCookie } from "@/helpers/cookies";

const productedRoute = (WrappedComponent) => {
  if (!getCookie("auth_login")) {
    window.location.replace("/auth");
    return <></>;
  }

  return WrappedComponent;
};

export default productedRoute;
