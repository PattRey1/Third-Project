import React from "react";
import { createNewPost } from "../services/post";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useInputs";

const CreatePost = () => {
  const [form, handleInputs] = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    createNewPost(form)
      .then(res => {
        push("/blog");
        console.log("esto es la res", res);
      })
      .catch(err => console.log("este es el error", err));
  };

  return (
    <div>
      <div className="uk-container uk-margin-medium-top">
        <h1 className="uk-text-center">Cuéntanos tu historia</h1>
        <form className="uk-form-stacked" onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label htmlFor="">Título del post</label>
            <input
              onChange={handleInputs}
              className="uk-input"
              type="text"
              name="title"
            />
          </div>
          <div className="uk-margin">
            <textarea
              onChange={handleInputs}
              className="uk-textarea"
              name="description"
              rows="5"
              placeholder="Platícanos..."
            />
          </div>
          <button
            className="uk-button uk-button-primary regular-btn uk-margin-top uk-align-right@m uk-margin-remove-adjacent"
            type="submit"
          >
            Enviar >>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
