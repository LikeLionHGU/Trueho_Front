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
        <Route path="/message" element={<MessagePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
