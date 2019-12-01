import styled from "styled-components";
import { Layout, Button, Divider } from "antd";
import { CircleImage } from "../../styles/common";

const SiderANTD = Layout.Sider;

export const Sider = styled(SiderANTD)`
  background-color: #fed7d7 !important;

  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25) !important;

  & .ant-layout-sider-children {
    display: flex !important;
    flex-direction: column;

    padding: 32px 16px;
  }
`;

export const ProfileImage = styled(CircleImage)`
  align-self: center;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  color: #000000;

  text-align: center;

  margin-top: 24px;
  margin-bottom: 12px;
`;

export const SiderActionButton = styled(Button)`
  color: #a48b8b !important;
  border-color: #a48b8b !important;

  margin: 6px 0px;

  &:hover {
    color: #5f4b8b !important;
    border-color: #5f4b8b !important;
  }
`;

export const InfoLabelDivider = styled(Divider)`
  background-color: rgba(164, 139, 139, 0.5) !important;

  margin: 12px 0px !important;
`;

export const InfoLabel = styled.p`
  margin-bottom: 6px;
  color: #a48b8b;

  font-size: 14px;
`;

export const InfoValue = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  font-weight: 600;
`;
