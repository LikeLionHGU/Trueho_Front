import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ChatHome from "./pages/Chathome";
import ChatRoom from "./pages/Chatroom";
import GradLogin from "./pages/gradLogin";
import HansumPage from "./pages/hansum";
import ImsiPage from "./pages/imsi";
import LoadingPage from "./pages/login/loading";
import LoginPage from "./pages/login/login";
import MyPage from "./pages/mypage";
import UserDetail from "./pages/userdetail";
import Newprofile from "./pages/Newprofile";

// import AwardList from "./components/awardlist";
import Header from "./components/header";
import Footer from "./components/footer";



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
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<HansumPage />} />
        <Route path="/user/:name" element={<UserDetail />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
        <Route path="/newprofile" element={<Newprofile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;