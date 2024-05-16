import { Formik, Form, Field } from "formik";
import { useId } from "react";

import style from "./LoginForm.module.css";

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  return (
    <>
      <Formik>
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
