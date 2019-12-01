import styled from "styled-components";
import { Input } from "antd";

const TextAreaANTD = Input.TextArea;

export const TextArea = styled(TextAreaANTD)`
  width: 100% !important;
  border-radius: 4px;
  overflow: hidden;

  border: none !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
`;
