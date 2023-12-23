import React from "react";
import { Toggle } from "./toggle";
import { Navigation } from "./navigation";
import { Wrapper } from "./wrapper";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
