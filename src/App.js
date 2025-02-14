import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ChatHome from "./pages/chathome";
import GradLogin from "./pages/gradLogin";
import HansumPage from "./pages/hansum";
import ImsiPage from "./pages/imsi";
import LoadingPage from "./pages/loading";
import LoginPage from "./pages/login";
import MessagePage from "./pages/message";
import MyPage from "./pages/mypage";
import UserDetail from "./pages/userdetail";

import Header from "./components/header";
import Footer from "./components/footer";

const sampleUsers = [
  {
    name: "춤추는땅강아지",
    major: "경영경제학부",
    jobTitle: "자산운용사",
    profileImage: "/images/profile1.png",
    years: "2015 ~ 2020",
    achievements: ["2016년 한국투자증권 모의투자 대회 우수상", "20xx ○○대학 ○○○○전공 석사"]
  }
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/chathome" element={<ChatHome />} />
        <Route path="/gradlogin" element={<GradLogin />} />
        <Route path="/hansum" element={<HansumPage />} />
        <Route path="/imsi" element={<ImsiPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<HansumPage />} />
        <Route path="/user/:name" element={<UserDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
