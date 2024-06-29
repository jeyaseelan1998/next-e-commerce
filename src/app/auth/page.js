"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

import Login from "./Login";
import Register from "./Register";
import Section from "@/components/Section";

import { getCookie } from "@/helpers/cookies";

import style from "./style.module.scss";

const Auth = () => {
  const router = useRouter();
  const [isNewLogin, setIsNewLogin] = useState(false);

  if(getCookie("auth_login")) {
    router.replace("/")
  }

  const toggleIsNewLogin = () => setIsNewLogin((prev) => !prev);

  return (
    <Section authPage>
      <Login
        className={`${style.wrapper}${!isNewLogin ? ` ${style.active}` : ""}`}
        toggler={toggleIsNewLogin}
      />
      <Register
        className={`${style.wrapper}${isNewLogin ? ` ${style.active}` : ""}`}
        toggler={toggleIsNewLogin}
      />

      <Link className={style.btn} href={"/"}>
        <MdOutlineArrowBack className={style.icon} />
        <p>Back to home</p>
      </Link>
    </Section>
  );
};

export default Auth;
