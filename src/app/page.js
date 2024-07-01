import Link from "next/link";

import Section from "../components/Section";
import Logout from "@/components/Logout";

import styles from "./page.module.css";

const Home = () => {
  return (
    <Section>
      <nav className={styles.nav}>
        <Link href={"/about"}>About</Link>
        <Logout />
      </nav>
      <h1>Home</h1>
    </Section>
  );
};

export default Home;
