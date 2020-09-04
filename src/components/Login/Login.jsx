import React from "react";
import s from "./Login.module.css";

const Login = (props) => {
  return (
    <div>
      <header className={s.header}>
        <div className={s.loginBlock}>LOGIN</div>
      </header>
      <form>
        <div>
          <input placeholder={"Login"} />
        </div>
        <div>
          <input placeholder={"Password "} />
        </div>
        <div>
          <input type="checkbox" />
          Please, remember me there...
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
