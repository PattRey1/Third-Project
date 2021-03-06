import React, { useState } from "react";
import { createNewPost } from "../services/post";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useInputs";

const Eroteca = () => {
  const [form, handleInputs] = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    createNewPost(form)
      .then(res => {
        push("/eroteca");
        console.log("esto es la res", res);
      })
      .catch(err => console.log("este es el error", err));
  };

  return (
    <div>
      <div className="uk-container">
        <h1>Crear un post</h1>
        <form className="uk-form-stacked" onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label htmlFor="">Título del post</label>
            <input
              onChange={handleInputs}
              className="uk-input"
              type="text"
              name="title"
              placeholder="Input"
            />
          </div>
          <div className="uk-margin">
            <textarea
              onChange={handleInputs}
              className="uk-textarea"
              name="description"
              rows="5"
              placeholder="Textarea"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Eroteca;
