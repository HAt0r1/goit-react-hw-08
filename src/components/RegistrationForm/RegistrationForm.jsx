import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { signUser } from "../../redux/auth/operations";
import { useToast } from "../Toast/Toast";

import style from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const { successToast, errorToast } = useToast();

  const handleSignUp = (values, actions) => {
    dispatch(signUser(values)).unwrap().then(successToast).catch(errorToast);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSignUp}
      >
        <Form className={style.form}>
          <div>
            <label className={style.label} htmlFor={usernameId}>
              Username
            </label>
            <Field
              className={style.input}
              name="name"
              type="text"
              id={usernameId}
            />
          </div>
          <div>
            <label className={style.label} htmlFor={emailId}>
              Email
            </label>
            <Field
              className={style.input}
              name="email"
              type="email"
              id={emailId}
            />
          </div>
          <div>
            <label className={style.label} htmlFor={passwordId}>
              Password
            </label>
            <Field
              className={style.input}
              name="password"
              type="password"
              id={passwordId}
            />
          </div>
          <button className={style.button} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
