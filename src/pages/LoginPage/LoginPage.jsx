import LoginForm from "../../components/LoginForm/LoginForm";

import style from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <main className={style.container}>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
