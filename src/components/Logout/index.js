"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getCookie, removeCookie } from "@/helpers/cookies";

import style from "./style.module.scss";

const Logout = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (getCookie("auth_login")) {
      setIsLoggedin(() => true);
    }
  }, []);

  const onLogout = () => {
    removeCookie("auth_login");
    window.location.href = "/";
  };

  return (
    <>
      {!isLoggedin && <Link href={"/auth"}>Login / Register</Link>}
      {isLoggedin && <button className={style.logout} onClick={onLogout}>Logout</button>}
    </>
  );
};

export default Logout;
