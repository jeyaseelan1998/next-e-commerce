import { useState } from "react";

import Field from "../../components/Field";
import { showToast, toastTypes } from "../../helpers/toast";
import {
  submitUserLoginDetails,
  submitUserRegisterationDetails,
} from "../../api/authentication";

import style from "./style.module.scss";
import { setCookie } from "@/helpers/cookies";

const apiStatuses = {
  initial: "initial",
  registering: "Creating user",
  signing: "Almost done",
}

const Register = ({ className, toggler }) => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [apiStatus, setApiStatus] = useState(apiStatuses.initial);

  const autoLogin = async () => {
    setApiStatus(() => apiStatuses.signing);

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
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast("Passwords not matched", toastTypes.error);
      return;
    }
    if (password.length < 6) {
      showToast("Minimum 6 chars required", toastTypes.error);
      return;
    }

    setApiStatus(() => apiStatuses.registering);
    const response = await submitUserRegisterationDetails({
      username,
      password,
      displayName,
      email,
      mobile,
    });

    if (!response) return;

    if (response?.status === 200) {
      showToast("Registeration success", toastTypes.success);
      await autoLogin();
    } else {
      showToast("Registeration failed, Try again", toastTypes.error);
    }
    setApiStatus(() => apiStatuses.initial);
  };

  return (
    <form
      className={`${style.register}${className ? ` ${className}` : ""}`}
      onSubmit={onSubmit}
    >
      <h3 className={style.heading}>Create an account</h3>
      <Field
        label="Display name *"
        id="display_name"
        name="display_name"
        placeholder="Enter display name"
        required
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <Field
        label="Email *"
        id="reg_email"
        name="email"
        type="email"
        placeholder="Enter email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Field
        label="Mobile"
        id="reg_mobile"
        name="mobile"
        placeholder="Enter mobile no."
        maxLength={10}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <Field
        label="Username *"
        id="reg_username"
        name="username"
        placeholder="Enter username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Field
        label="Password *"
        name="password"
        id="reg_password"
        type="password"
        placeholder="Enter password"
        required
        maxLength={12}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Field
        label="Confirm password *"
        name="confirm_password"
        id="reg_confirm_password"
        type="password"
        placeholder="Enter confirm password"
        required
        maxLength={12}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className={style.submitBtn} disabled={apiStatus !== "initial"}>
        {apiStatus === "initial" && "Register"}
        {apiStatus !== "initial" && apiStatus}
      </button>
      <p className={style.question}>
        Already have an account?{" "}
        <button onClick={toggler} type="button">
          Click here
        </button>
      </p>
    </form>
  );
};

export default Register;
