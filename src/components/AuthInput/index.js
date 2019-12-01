import React, { forwardRef } from "react";

import { InputPrefixIcon, Input } from "./styles";

//A component for Text Inputs in Login and Register Pages
const AuthInput = forwardRef(({ icon, ...props }, ref) => {
  return <Input ref={ref} addonBefore={<InputPrefixIcon type={icon} />} {...props} />;
});

export default AuthInput;
