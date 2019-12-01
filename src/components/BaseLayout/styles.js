import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const OuterLayout = styled(Layout)`
  height: 100vh;
`;

export const ContentArea = styled(Content)`
  background-color: #fafafa !important;
`;
