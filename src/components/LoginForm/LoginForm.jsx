import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { loginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useToast } from "../Toast/Toast";

import style from "./LoginForm.module.css";

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const { successToast, errorToast } = useToast();

  const handleLogin = (values, actions) => {
    dispatch(loginUser(values)).unwrap().then(successToast).catch(errorToast);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        <Form className={style.form}>
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
            LogIn
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
