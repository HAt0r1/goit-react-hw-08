import AuthNav from "../AuthNav/AuthNav";
import NavLinks from "../NavLinks/NavLinks";
import UserNav from "../UserNav/UserNav";
const NavBar = () => {
  return (
    <header>
      <NavLinks />
      <UserNav />
      <AuthNav />
    </header>
  );
};

export default NavBar;
