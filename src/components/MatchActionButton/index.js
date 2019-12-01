import React from "react";

import { Container, ActionButtonIcon, ActionButton, ActionButtonTitle } from "./styles";

function MatchActionButton({ background, icon, title, onClick }) {
  return (
    <Container>
      <ActionButton background={background} onClick={onClick}>
        <ActionButtonIcon type={icon} theme="filled" />
      </ActionButton>

      <ActionButtonTitle>{title}</ActionButtonTitle>
    </Container>
  );
}

export default MatchActionButton;
