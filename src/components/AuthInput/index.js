import React, { forwardRef } from "react";

import { InputPrefixIcon, Input } from "./styles";

const AuthInput = forwardRef(({ icon, ...props }, ref) => {
  return <Input ref={ref} addonBefore={<InputPrefixIcon type={icon} />} {...props} />;
});

export default AuthInput;
