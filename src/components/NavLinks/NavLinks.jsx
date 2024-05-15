import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
