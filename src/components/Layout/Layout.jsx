import NavBar from "../NavBar/NavBar";

const Layot = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layot;
