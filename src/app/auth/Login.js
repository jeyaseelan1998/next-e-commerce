import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Field from "@/components/Field";

import { showToast, toastTypes } from "@/helpers/toast";

import style from "./style.module.scss";
import { submitLoginDetails } from "@/api/authentication";

const Login = ({ className, toggler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      showToast("Minimum 6 chars required", toastTypes.error);
      return;
    } else if (password.length > 12) {
      showToast("12 letters is enough", toastTypes.error);
      return;
    }

    const response = await submitLoginDetails({email: "test@test.com", password: "testing1234"});
    console.log(response);

    if (response?.statusText === "OK") {
      showToast("Login success", toastTypes.success);
    } else {
      showToast("Login failed, Try again", toastTypes.error); //! update with error message
    }
  };

  return (
    <>
      <form
        className={`${style.login}${className ? ` ${className}` : ""}`}
        onSubmit={onSubmit}
      >
        <h3 className={style.heading}>welcome</h3>
        <Field
          label="Username *"
          name="username"
          id="login_username"
          placeholder="Enter username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field
          label="Password *"
          id="login_password"
          name="password"
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={style.submitBtn}>Login</button>
        <p className={style.question}>
          Don&#39;t you have an account?{" "}
          <button onClick={toggler} type="button">
            Click here
          </button>
        </p>
      </form>

      <ToastContainer />
    </>
  );
};

export default Login;
