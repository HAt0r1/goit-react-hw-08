import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import NavLinks from "../Navigation/Navigation";
import UserNav from "../UserMenu/UserMenu";

import style from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={style.header}>
      <NavLinks />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </header>
  );
};

export default NavBar;
