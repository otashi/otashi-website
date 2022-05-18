import styled from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  padding: 16px 8px;
  border-radius: 4px;
  border: none;
  text-align: center;
  display: inline;
  background-color: var(--t200);
  color: white;
  text-decoration: none;
  box-shadow: 1px 2px 3px 1px var(--n40);
`;

const StyledAnchorButton = styled.a`
  width: 150px;
  padding: 16px 8px;
  border-radius: 4px;
  border: none;
  text-align: center;
  display: inline;
  background-color: var(--t200);
  color: white;
  text-decoration: none;
  box-shadow: 1px 2px 3px 1px var(--n40);
`;

export { StyledButton, StyledAnchorButton };
