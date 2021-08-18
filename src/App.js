import React, { Fragment } from "react";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <Fragment>
      <div className="topPanel"></div>
      <Header />
      <Content />
    </Fragment>
  );
}

export default App;