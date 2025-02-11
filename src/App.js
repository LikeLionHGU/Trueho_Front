import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './pages/login';
import GradLoginpage from './pages/gradLogin';
import ChatHomepage from './pages/chathome';
import HansumPage from './pages/hansum';
import Loading from './pages/loading';


import Header from "./components/header";
import Footer from "./components/footer";

function App() {

  return (
    <div id="root">
      <BrowserRouter>
        {/* 모든 페이지에 푸터가 보일수있게 고정*/}
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/gradlogin" element={<GradLoginpage />} />
            <Route path="/chathome" element={<ChatHomepage />} />
            <Route path="/hansum" element={<HansumPage />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </div>
        <Footer>

        </Footer>
      </BrowserRouter>
    </div>

  );
}

export default App;
