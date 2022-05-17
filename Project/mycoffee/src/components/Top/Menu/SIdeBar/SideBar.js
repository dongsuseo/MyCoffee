import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = ()=>{
    return (
      <div>
        <Link to={"/Info"}>
          <div>브랜드 소개</div>
        </Link>
        <Link to={"/MyPage"}>
          <div>마이 페이지</div>
        </Link>
        <Link to={"/Baverage"}>
          <div>음료 소개</div>
        </Link>
        <Link to={"/CustomerQuestion"}>
          <div>고객문의</div>
        </Link>
      </div>
    );
}

export default SideBar;