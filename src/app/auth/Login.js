import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Field from "../../components/Field";

import { showToast, toastTypes } from "../../helpers/toast";
import { setCookie } from "../../helpers/cookies";
import { submitUserLoginDetails } from "../../api/authentication";

import style from "./style.module.scss";

const Login = ({ className, toggler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      showToast("Minimum 6 chars required", toastTypes.error);
      return;
    }

    setFetching(() => true);
    const response = await submitUserLoginDetails({
      username,
      password,
    });

    if (!response) return;

    if (response?.status === 200) {
      showToast("Login success", toastTypes.success);
      setCookie("auth_login", response.data.jwt_token);
      window.location.href = "/";
    } else {
      showToast("Login failed, Try again", toastTypes.error);
    }
    setFetching(() => false);
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
          maxLength={10}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={style.submitBtn} disabled={fetching}>
          {!fetching && "Login"}
          {fetching && "Fetching"}
        </button>
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
