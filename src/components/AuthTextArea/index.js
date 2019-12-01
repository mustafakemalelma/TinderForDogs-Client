import React, { forwardRef } from "react";

import { TextArea } from "./styles";

//A component for Text Areas in Login and Register Pages
const AuthTextArea = forwardRef(({ icon, ...props }, ref) => {
  return <TextArea ref={ref} {...props} />;
});

export default AuthTextArea;
