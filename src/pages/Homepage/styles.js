import styled from "styled-components";
import { Row } from "antd";

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
