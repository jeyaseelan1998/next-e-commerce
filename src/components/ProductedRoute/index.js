"use client";

import { getCookie } from "@/helpers/cookies";

const productedRoute = (WrappedComponent) => {
  const ProductedRoute = (props) => {
    if (!getCookie("auth_login")) {
      window.location.replace("/auth");
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
