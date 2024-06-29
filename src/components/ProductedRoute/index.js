"use client";

import { getCookie } from "@/helpers/cookies";
import { redirect } from "next/dist/server/api-utils";

const productedRoute = (WrappedComponent) => {
  const ProductedRoute = (props) => {
    if (!getCookie("auth_login")) {
      redirect("/auth")
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  ProductedRoute.displayName = `productedRoute(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return ProductedRoute;
};

export default productedRoute;
