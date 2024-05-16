import { NavLink } from "react-router-dom";
import style from "./NavLinks.module.css";
import clsx from "clsx";

const styleLink = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const NavLinks = () => {
  return (
    <>
      <ul className={style.list}>
        <li>
          <NavLink to="/" className={styleLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={styleLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
