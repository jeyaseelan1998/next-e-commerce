import Link from "next/link";

import Section from "../components/Section";
import Logout from "@/components/Logout";
import Button from "@/components/Button";

import styles from "./page.module.css";

const Home = () => {
  return (
    <Section>
      <nav className={styles.nav}>
        <Button href={"/about"}>About</Button>
        <Logout />
      </nav>
      <h1>Home</h1>
    </Section>
  );
};

export default Home;
