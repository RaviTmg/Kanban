import React from "react";
import { Field, reduxForm } from "redux-form";

let AddLaneForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <Field
          className="input"
          name="name"
          component="input"
          type="text"
          placeholder="Name of Lane"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
AddLaneForm = reduxForm({
  form: "addLane"
})(AddLaneForm);
export default AddLaneForm;
