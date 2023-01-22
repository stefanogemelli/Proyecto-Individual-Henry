import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./SelectStyles.module.css";

function Select({ options, actionCreator, name }) {
  const globalValue = useSelector((state) => state.filter);
  const [localValue, setLocalValue] = useState(globalValue);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;

    dispatch(actionCreator(value));
  };
  return (
    <select
      className={`${s.select}`}
      onChange={handleChange}
      name={name}
      // value={}
    >
      {/* <option hidden>{defaultOption}</option> */}
      {options.map((c) => (
        <option value={c}>{c}</option>
      ))}
    </select>
  );
}

export default Select;

// select => dispatch(  actionCreator( {name:"..",value:"..."} )  )
