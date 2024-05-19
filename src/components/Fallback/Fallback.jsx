import { TailSpin } from "react-loader-spinner";
import style from "./Fallback.module.css";
const Fallback = () => {
  return (
    <TailSpin color="#2077e1" visible={true} wrapperClass={style.loader} />
  );
};

export default Fallback;
