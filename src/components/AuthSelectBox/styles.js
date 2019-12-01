import styled from "styled-components";
import { Select as SelectANTD } from "antd";

export const Select = styled(SelectANTD)`
  & .ant-select-selection {
    height: 52px !important;

    border: none !important;
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
`;
