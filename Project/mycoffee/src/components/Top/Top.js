import React, {useState} from "react";

import Login from "./Menu/Login/Login";
import Title from "./Title";
import Menu from "./Menu/Menu";

const Top = () => {
  
  return(
      <div>
          <Title></Title>
          <Login></Login>
          <Menu></Menu>
      </div>
  );
};

export default Top;
