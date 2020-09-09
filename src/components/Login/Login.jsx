import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/formControls/FormControls";
import { requiredField } from "../common/validators/Validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]} />
      </div>
      <div>
        <Field placeholder={"Password "} name={"password"} type={"password"} component={Input} validate={[requiredField]} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
        Please, remember me there...
      </div>
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

  return (
    <div>
      <header className={s.header}>
        <div className={s.loginBlock}>LOGIN</div>
      </header>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, {login} )(Login);
