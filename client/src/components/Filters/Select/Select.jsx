import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./SelectStyles.module.css";

function Select({ defaultOption, options }) {
  const val = useSelector((state) => state.filter);
  const handleChange = (e) => {};
  return (
    <select
      className={`${s.select}`}
      onChange={handleChange}
      name="continent"
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

// const Select = styled.select`
//   font-size: 1.5rem;
//   margin-top: 2rem;
// `;
