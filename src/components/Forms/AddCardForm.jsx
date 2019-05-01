import React from "react";
import { Field, reduxForm } from "redux-form";

let AddCardForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <Field
          className="input"
          name="title"
          component="input"
          type="text"
          placeholder="Title of Card"
        />
      </div>
      <div className="field">
        <Field
          className="input"
          name="description"
          component="input"
          type="text"
          placeholder="Description of Card"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
AddCardForm = reduxForm({
  form: "addLane"
})(AddCardForm);
export default AddCardForm;
