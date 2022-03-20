import React from "react";
import ReactDOM from "react-dom";

import RouterBase from "./components/UI/Router";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterBase />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
