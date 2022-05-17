import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import App from "../../App";
import LoginModal from "../Top/Login/LoginModal";
import Info from '../Top/Menu/SIdeBar/Info';
import MyPage from "../Top/Menu/SIdeBar/MyPage";
import Baverage from "../Top/Menu/SIdeBar/Baverage";
import CustomerQuestion from "../Top/Menu/SIdeBar/CustomerQuestion";

function RouterBase(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Baverage" element={<Baverage />} />
          <Route path="/CustomerQuestion" element={<CustomerQuestion />} />
        </Routes>
      </Router>
    );
}

export default RouterBase;