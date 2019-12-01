import styled from "styled-components";
import { Col, Row, Button, Form } from "antd";

export const RegisterContainer = styled(Row)`
  width: 100%;
  height: 100vh;

  background-color: #fed7d7;
`;

export const LeftCol = styled(Col)`
  height: 100vh;

  display: flex !important;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 48px;
`;

export const Logo = styled.p`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 140px;
  line-height: 150px;

  color: #5f4b8b;

  margin-bottom: 0;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 36px;
  letter-spacing: 0.595em;

  /* Ultraviolet */
  color: #5f4b8b;

  margin-bottom: 52px !important;
`;

export const BottomDogImage = styled.img`
  height: 470px;
`;

export const RightCol = styled(LeftCol)`
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(Form)`
  width: 420px !important;
`;

export const LoginButton = styled(Button)`
  float: right;

  min-width: 110px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25) !important;
`;
