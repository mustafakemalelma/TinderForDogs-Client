import React from "react";
import { Layout } from "antd";

import LeftSider from "../LeftSider";
import RightSider from "../RightSider";

import { OuterLayout, ContentArea } from "./styles";

function BaseLayout({ children }) {
  return (
    <OuterLayout>
      <LeftSider />

      <Layout>
        <ContentArea>{children}</ContentArea>
      </Layout>

      <RightSider />
    </OuterLayout>
  );
}

export default BaseLayout;
