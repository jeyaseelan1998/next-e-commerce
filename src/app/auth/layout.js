export async function generateMetadata() {
  return {
    title: "Ecommerce Login / Register",
    description: "Please login or register to continue shopping",
  };
}

export default function AuthLayout({ children }) {
  return <>{children}</>;
}
