import React from "react";
import { Layout } from "antd";

import LeftSider from "../LeftSider";

import { OuterLayout, ContentArea } from "./styles";

//This component creates the base layout for the homepage
function BaseLayout({ children }) {
  return (
    <OuterLayout>
      <LeftSider />

      <Layout>
        <ContentArea>{children}</ContentArea>
      </Layout>
    </OuterLayout>
  );
}

export default BaseLayout;
