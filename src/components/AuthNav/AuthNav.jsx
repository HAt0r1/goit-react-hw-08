import { Link } from "react-router-dom";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <ul className={style.list}>
        <li>
          <Link to="/login" className={style.link}>
            LogIn
          </Link>
        </li>
        <li>
          <Link to="/signup" className={style.link}>
            Registration
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
