import React, { Fragment } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Header = () => {
  return (
    <Fragment>
      <Mobile />
      <Desktop />
    </Fragment>
  );
}

export default Header;