import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";

const Layot = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster />
    </div>
  );
};

export default Layot;
