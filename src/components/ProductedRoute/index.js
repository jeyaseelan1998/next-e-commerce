import { redirect } from "next/navigation";
import { getCookie } from "@/helpers/cookies";

const productedRoute = (WrappedComponent) => {
  if (!getCookie("auth_login")) {
    redirect("/auth");
  }

  const ProductedRoute = (props) => {
    return <WrappedComponent {...props} />;
  };

  ProductedRoute.displayName = `productedRoute(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return ProductedRoute;
};

export default productedRoute;
