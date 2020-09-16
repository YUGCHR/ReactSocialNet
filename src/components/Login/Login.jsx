import React from "react";
import s from "./Login.module.css";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/formControls/FormControls";
import { requiredField } from "../common/validators/Validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [requiredField])}
      {createField("Password", "password", Input, [requiredField], { type: "password" })}
      {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "Please, remember me there...")}
      {/* <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]} />
      </div>
      <div>
        <Field placeholder={"Password "} name={"password"} type={"password"} component={Input} validate={[requiredField]} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
        Please, remember me there...
      </div> */}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <header className={s.header}>
        <div className={s.loginBlock}>LOGIN</div>
      </header>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
