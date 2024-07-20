"use client";

import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";

import Login from "./Login";
import Register from "./Register";
import Section from "@/components/Section";
import Button from "@/components/Button";

import { getCookie } from "@/helpers/cookies";

import style from "./style.module.scss";

const Auth = () => {
  const [isNewLogin, setIsNewLogin] = useState(false);

  if (typeof(window) !== "undefined" && getCookie("auth_login")) {
    window.location.replace("/");
  }

  const toggleIsNewLogin = () => setIsNewLogin((prev) => !prev);

  return (
    <Section authPage>
      <Button animated href={"/"}>
        <MdOutlineArrowBack className={style.icon} />
        <p dangerouslySetInnerHTML={{__html: "Back to home"}} />
      </Button>
      <Login
        className={`${style.wrapper}${!isNewLogin ? ` ${style.active}` : ""}`}
        toggler={toggleIsNewLogin}
      />
      <Register
        className={`${style.wrapper}${isNewLogin ? ` ${style.active}` : ""}`}
        toggler={toggleIsNewLogin}
      />
    </Section>
  );
};

export default Auth;
