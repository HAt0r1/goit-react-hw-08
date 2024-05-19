import { Toaster } from "react-hot-toast";
import NavBar from "../NavBar/NavBar";

const Layot = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Toaster />
    </div>
  );
};

export default Layot;
