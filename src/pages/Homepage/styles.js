import styled from "styled-components";
import { Row } from "antd";
import { CircleImage } from "../../styles/common";

export const HomepageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionsContainer = styled(Row)`
  width: 320px;

  margin-top: 32px;
`;

export const NoDogsLeftText = styled.span`
  font-size: 24px;
  font-family: Lobster;

  text-align: center;
`;

export const MatchModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MatchImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatchImage = styled(CircleImage)`
  position: relative;
  left: ${props => props.left}px;
  right: ${props => props.right}px;
`;

export const MatchText = styled.p`
  font-size: 24px;
  font-family: Lobster;
  text-align: center;

  margin-top: 48px;
`;
