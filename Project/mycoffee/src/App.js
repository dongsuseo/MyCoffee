import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Top from "./components/Top/Top";

function App() {

  return (
    <RecoilRoot>
      <Top />
    </RecoilRoot>
  );
}

export default App;
