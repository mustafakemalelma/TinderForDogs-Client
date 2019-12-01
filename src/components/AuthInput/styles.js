import styled from "styled-components";
import { Icon, Input as InputANTD } from "antd";

export const Input = styled(InputANTD)`
  width: 100% !important;
  border-radius: 4px;
  overflow: hidden;

  & input {
    height: 52px !important;
    border: none !important;
    background-color: rgba(255, 255, 255, 0.5) !important;
  }

  & .ant-input-group-addon {
    width: 80px;
    border: none !important;
    background-color: white;
  }
`;

export const InputPrefixIcon = styled(Icon)`
  font-size: 28px;

  color: #b0b0b0 !important;
`;
