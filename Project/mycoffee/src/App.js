import React from "react";
import {useRecoilValue} from 'recoil';

import Top from "./components/Top/Top";
import SideBar from "./components/Top/Menu/SIdeBar/SideBar";
import {isClickedSideBarState} from './atoms/atoms';

function App() {
  const isClickedSideBar = useRecoilValue(isClickedSideBarState);
  return (
    <div>
      <Top />
      {isClickedSideBar?<SideBar/>:<div/>}
    </div>
  );
}

export default App;
