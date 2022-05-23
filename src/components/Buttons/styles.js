import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  transition: width 0.5s ease-out;
  width: ${({ status }) => {
    if (status === "" || status === "loading") {
      return "150px";
    } else {
      return "100%";
    }
  }};

  background-color: ${({ status }) => {
    switch (status) {
      case "loading":
        return "var(--n30)";
      case "error":
        return "var(--r400)";
      case "success":
        return "var(--g200)";
      default:
        return "var(--t200)";
    }
  }};

  padding: 16px 8px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-size: 16px;
  display: inline;
  color: white;
  text-decoration: none;
  box-shadow: 1px 2px 3px 1px var(--n40);
  cursor: pointer;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButtonIcon = styled.img`
  width: 18px;
  height: 18px;
  animation: ${rotate} 2s linear infinite;
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

  @media screen and (max-width: 550px) {
    width: 120px;
    padding: 8px 16px;
  }
`;

export { StyledButton, StyledButtonIcon, StyledAnchorButton };
