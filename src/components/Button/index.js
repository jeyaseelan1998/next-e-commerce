"use client";

import Link from "next/link";

import style from "./style.module.scss";

const Button = ({
  href,
  label,
  children,
  type = "button",
  bgColor = "secondary",
  animated = false,
  disabled = false,
  fetching = false,
  callback = () => {},
}) => {
  
  const classes = () => {
    let cls = style.button;
    if(bgColor === "primary") cls += ` ${style.primary}`;
    if(bgColor === "danger") cls += ` ${style.danger}`;
    if(animated == true) cls += ` ${style.animated}`;
    if(bgColor === "transparent") cls += ` ${style.transparent}`;
    return cls;
  }

  return (
    <>
      {href && <Link className={classes()} href={href}>{children ? children : label}</Link>}
      {!href && (
        <button className={classes()} type={type} disabled={disabled} onClick={callback}>
          {children ? children : label}
        </button>
      )}
    </>
  );
};

export default Button;
