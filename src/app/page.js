"use client"

import ProductedRoute from "@/components/ProductedRoute";
import Section from "../components/Section";

import styles from "./page.module.css";

const Home = () => {
  return (
    <Section>
      <h1>Home</h1>      
    </Section>
  );
}

const d = ProductedRoute(Home);
// export default Home;
export default d;