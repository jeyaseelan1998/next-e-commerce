import { useState } from "react";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

import style from "./style.module.scss";

const Field = ({ label, type = "text", name, value, onChange, id, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className={style.fieldWrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <div className={style.inputWrapper}>
        {["text", "email", "number", "password"].includes(type) && (
          <input
            className={style.typoInput}
            type={isVisible ? "text" : type}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            {...rest}
          />
        )}
        {type === "password" && <button type="button" onClick={() => setIsVisible(prev => !prev)}>
          {isVisible && <FaRegEye className={style.icon} />}
          {!isVisible && <FaRegEyeSlash  className={style.icon} />}
        </button>}
      </div>
    </div>
  );
};

export default Field;
