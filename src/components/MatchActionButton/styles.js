import styled from "styled-components";
import { Icon, Button } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionButton = styled(Button)`
  width: 84px !important;
  height: 84px !important;

  background-color: ${props => props.background} !important;

  border: none !important;
  border-radius: 50% !important;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25) !important;
`;

export const ActionButtonIcon = styled(Icon)`
  font-size: 28px;

  color: white !important;
`;

export const ActionButtonTitle = styled.p`
  font-size: 18px;
  font-weight: 600;

  color: #323232;

  margin-top: 12px;
`;
