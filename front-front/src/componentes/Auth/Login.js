import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import useForm from "../../hooks/useForm";
import { login } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";
import { from } from "rxjs";

const Login = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);

    login(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/home");
      })
      .catch(res => {
        const { errormsg } = res.response.data;
        UIkit.notification({
          message: `${errormsg}`,
          pos: "top-center",
          status: "danger"
        });
      });
  };

  return (
    <div className="uk-section " uk-height-viewport="expand: true">
      <h1 className="uk-text-center uk-margin-medium-bottom">Entrar</h1>
      <div className="uk-container uk-flex uk-flex-center uk-flex-middle">
        <AuthForm
          submit={handleSubmit}
          action="login"
          handleChange={handleInput}
          {...form}
        />
      </div>
    </div>
  );
};

export default Login;
