"use client";

import { useEffect, useState } from "react";

import Button from "../Button";

import { getCookie, removeCookie } from "@/helpers/cookies";

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
      {!isLoggedin && <Button href={"/auth"}>Login / Register</Button>}
      {isLoggedin && <Button bgColor="danger" callback={onLogout}>Logout</Button>}
    </>
  );
};

export default Logout;
