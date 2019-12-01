import React, { forwardRef } from "react";

import { Select } from "./styles";

//A component for Select Boxes in Login and Register Pages
const AuthSelectBox = forwardRef((props, ref) => {
  return <Select ref={ref} {...props} />;
});

export default AuthSelectBox;
