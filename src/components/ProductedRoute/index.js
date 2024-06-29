"use client";

import { redirect } from "next/navigation";
import { getCookie } from "@/helpers/cookies";

const productedRoute = (WrappedComponent) => {
  const ProductedRoute = (props) => {
    if (!getCookie("auth_login")) {
      redirect("/auth")
    }

    return <WrappedComponent {...props} />;
  };

  ProductedRoute.displayName = `productedRoute(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return ProductedRoute;
};

export default productedRoute;
