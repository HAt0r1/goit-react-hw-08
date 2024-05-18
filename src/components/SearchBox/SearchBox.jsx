import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filterId = useId();

  const changeFilterName = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        onChange={changeFilterName}
        name={filter}
        className={style.input}
        type="text"
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;
