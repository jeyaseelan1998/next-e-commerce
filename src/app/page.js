import Link from "next/link";
import Section from "../components/Section";

import styles from "./page.module.css";

const Home = () => {
  return (
    <Section>
      <h1>Home</h1>
      <Link href={"/about"}>About</Link>      
    </Section>
  );
}

export default Home;