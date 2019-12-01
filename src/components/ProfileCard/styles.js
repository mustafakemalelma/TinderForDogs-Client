import styled from "styled-components";
import { Card as CardANTD, Icon, Divider } from "antd";

export const Card = styled(CardANTD)`
  border: none !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 800;

  color: black;

  margin-bottom: 6px;
`;

export const BreedAndAge = styled.span`
  font-size: 16px;

  color: #323232;
`;

export const BreedInfoIcon = styled(Icon)`
  margin-left: 6px;
`;

export const CardLabel = styled.p`
  font-size: 14px;
  font-weight: 600;

  color: #b0b0b0;

  margin-top: 24px;
  margin-bottom: 6px;
`;

export const CardLabelDivider = styled(Divider)`
  margin-top: 0px !important;
  margin-bottom: 6px !important;
`;

export const CardValue = styled.p`
  font-size: 16px;
  color: #323232;
`;
