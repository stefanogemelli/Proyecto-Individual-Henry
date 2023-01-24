import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortCountries } from "../../../../redux/actions";

import s from "./SelectStyles.module.css";

function Select({ options, name }) {
  const globalValue = useSelector((state) => state.sorts[name]); // {type,value}
  const [localValue, setLocalValue] = useState(globalValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inpValue = e.target.value;
    setLocalValue(inpValue);
    if (inpValue !== options[0]) {
      dispatch(
        sortCountries({
          sort: name,
          value: inpValue,
        })
      );
    }
  };
  return (
    <select
      className={`${s.select}`}
      onChange={handleChange}
      name={name}
      value={localValue}
    >
      {options.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default Select;

// select => dispatch(  actionCreator( {name:"..",value:"..."} )  )
