import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";

const Signup = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    signup(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/home");
        UIkit.notification({
          message: `<span uk-icon='check'></span> cuenta creada con éxito`,
          pos: "top-right",
          status: "success"
        });
      })
      .catch(res => {
        const { error } = res.response.data;
        UIkit.notification({
          message: `<span uk-icon='close'></span> ${error}`,
          pos: "top-right",
          status: "danger"
        });
      });
  };
  return (
    <div className="uk-section ">
      <h1 className="uk-text-center ">Registro</h1>
      <div
        className="uk-container uk-flex uk-flex-center uk-flex-middle "
        uk-height-viewport="expand: true"
      >
        <AuthForm
          submit={handleSubmit}
          action="signup"
          handleChange={handleInput}
          {...form}
        />
      </div>
    </div>
  );
};

export default Signup;
