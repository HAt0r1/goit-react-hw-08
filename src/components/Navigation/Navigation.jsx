import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";
import clsx from "clsx";

const styleLink = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const NavLinks = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <ul className={style.list}>
        <li>
          <NavLink to="/" className={styleLink}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts" className={styleLink}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
