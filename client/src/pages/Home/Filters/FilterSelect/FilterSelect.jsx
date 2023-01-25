import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterCountries } from "../../../../redux/actions";

import s from "./SelectStyles.module.css";

function FilterSelect({ options, name }) {
  const globalValue = useSelector((state) => state.filters[name]);
  const [localValue, setLocalValue] = useState(globalValue);
  const dispatch = useDispatch();
  console.log(globalValue);

  useEffect(() => {
    !globalValue ? setLocalValue(options[0]) : setLocalValue(globalValue);
  }, [globalValue]);

  const handleChange = (e) => {
    const inpValue = e.target.value;
    dispatch(
      filterCountries({
        filter: name,
        value: inpValue === options[0] ? "" : inpValue,
      })
    );
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

export default FilterSelect;

// select => dispatch(  actionCreator( {name:"..",value:"..."} )  )
