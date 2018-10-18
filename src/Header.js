import styled from "styled-components";

export const Header = styled.div`
  background-color: ${props => props.color || "#282c34"};
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
