import React, { forwardRef } from "react";

import { Select } from "./styles";

const AuthSelectBox = forwardRef((props, ref) => {
  return <Select ref={ref} {...props} />;
});

export default AuthSelectBox;
