import Field from "@/components/Field";

import style from "./style.module.scss";

const Register = ({ className, toggler }) => {
  return (
    <form className={`${style.register}${className ? ` ${className}` : ""}`}>
      <h3 className={style.heading}>Create an account</h3>
      <Field label="Display name *" id="display_name" name="display_name" placeholder="Enter display name" required />
      <Field label="Email *" id="reg_email" name="email" type="email" placeholder="Enter email" required />
      <Field label="Mobile" id="reg_mobile" name="mobile" placeholder="Enter mobile no." />
      <Field label="Username *" id="reg_username" name="username" placeholder="Enter username" required />
      <Field
        label="Password *"
        name="password"
        id="reg_password"
        type="password"
        placeholder="Enter password"
        required
      />
      <Field
        label="Confirm password *"
        name="confirm_password"
        id="reg_confirm_password"
        type="password"
        placeholder="Enter confirm password"
        required
      />
      <button className={style.submitBtn}>Register</button>
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
