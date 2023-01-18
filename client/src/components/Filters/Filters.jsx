import styled from "styled-components";
function Filters() {
  return (
    <Aside>
      <label></label>
      <Select>
        <option hidden>sadfdsf</option>
        <option value="a">sadfdsf</option>
        <option value="a">sadfdsf</option>
        <option value="a">sadfdsf</option>
      </Select>
    </Aside>
  );
}

export default Filters;

const Aside = styled.aside`
  border: 1px solid white;
  width: 300px;
  height: 75vh;
  padding: 1rem;
  position: absolute;
  left: 1rem;
`;
const Select = styled.select`
  font-size: 1.5rem;
`;
