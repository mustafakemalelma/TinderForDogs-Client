import React, { forwardRef } from "react";

import { TextArea } from "./styles";

const AuthTextArea = forwardRef(({ icon, ...props }, ref) => {
  return <TextArea ref={ref} {...props} />;
});

export default AuthTextArea;
