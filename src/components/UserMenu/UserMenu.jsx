import { Link } from "react-router-dom";
import style from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

const UserNav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <p className={style.username}>Welcome, {user.name}</p>
      <Link onClick={() => dispatch(logOut())} className={style.logOut}>
        Logout
      </Link>
    </div>
  );
};

export default UserNav;
