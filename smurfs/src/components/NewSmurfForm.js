import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      console.log("post users status: ", status);
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <Form>
      <h2 className="heading">Welcome, new guy! Create a new account.</h2>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <div className="ui fluid input">
        <Field type="name" name="name" placeholder="Smurf's Name" />
      </div>
      <div className="ui fluid input">
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field
          type="number"
          name="age"
          placeholder="age"
          className="ui fluid input"
        />
      </div>
      <div className="ui fluid input">
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field
          type="number"
          name="height"
          placeholder="height in cm"
          className="ui fluid input"
        />
      </div>

      <button disabled={isSubmitting} type="submit" className="ui button">
        Submit
      </button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },

  //   validationSchema: Yup.object().shape({
  //     name: Yup.string().required(),
  //     age: Yup.number()
  //       .age("age is not valid")
  //       .required("age is required"),
  //     height: Yup.number().required("A height is required")
  //   }),

  handleSubmit(values, { setErrors, resetForm, setSubmitting, setStatus }) {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
        window.alert(`Smurfed an account.`);
      })
      .catch(err => {
        console.log("this is an error:", err);
      });
    console.log(values);
    setTimeout(() => {
      //I cant get the submit button to no work while loading
      setSubmitting(false);
    }, 2000);
  }
})(UserForm);

export default FormikApp;
