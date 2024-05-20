import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <ul className={style.list}>
        <li>
          <NavLink to="/login" className={style.link}>
            LogIn
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={style.link}>
            Registration
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
