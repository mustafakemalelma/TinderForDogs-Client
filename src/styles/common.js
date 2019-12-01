import styled from "styled-components";

export const CircleImage = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  border-radius: 50%;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
