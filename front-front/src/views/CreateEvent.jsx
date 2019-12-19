import React from "react";
import UIkit from "uikit";

const CreateEvent = () => {
  return (
    <div>
      <div className="uk-container">
        <form className="uk-form-stacked">
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Input" />
          </div>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Textarea" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
