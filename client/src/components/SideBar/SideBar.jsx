import SearchCountry from "../SearchCountry/SearchCountry";

import styled from "styled-components";
import Filters from "../Filters/Filters";
import Sorts from "../Sorts/Sorts";

function SideBar() {
  return (
    <Container>
      <SearchCountry />

      <Filters />

      <Sorts />
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  padding: 2rem;
  border: 1px solid white;
  width: 250px;
  height: min-content;
  position: absolute;
  left: 10px;
  top: 100px;
  display: flex;
  flex-direction: column;
`;
