import React from "react";

import { Container, ActionButtonIcon, ActionButton, ActionButtonTitle } from "./styles";

function MatchActionButton({ background, icon, title }) {
  return (
    <Container>
      <ActionButton background={background}>
        <ActionButtonIcon type={icon} theme="filled" />
      </ActionButton>

      <ActionButtonTitle>{title}</ActionButtonTitle>
    </Container>
  );
}

export default MatchActionButton;
