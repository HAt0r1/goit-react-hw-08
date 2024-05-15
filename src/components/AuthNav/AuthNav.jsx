import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link>LogIn</Link>
        </li>
        <li>
          <Link>Registration</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
