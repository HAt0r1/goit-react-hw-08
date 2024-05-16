import { Link } from "react-router-dom";
import style from "./UserNav.module.css";

const UserNav = () => {
  return (
    <div className={style.container}>
      <p className={style.username}>UserName</p>
      <Link className={style.logOut}>Logout</Link>
    </div>
  );
};

export default UserNav;
