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
import UserDetailPage from "./pages/userdetail";
import Newprofile from "./pages/Newprofile";
import Editprofile from "./pages/Editprofile";
import Test from "./pages/imsi";

import Beforemessage from "./pages/Beforemessage";
import BeforeHansumPage from "./pages/Beforehansum";




// import AwardList from "./components/awardlist";
import Header from "./components/header";


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
        {/* <Route path="/user/:name" element={<UserDetailPage />} /> */}
        {/* <Route path="/profile/:userId" element={<UserDetailPage />} /> */}
        <Route path="/user/:userId" element={<UserDetailPage />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
        <Route path="/newprofile" element={<Newprofile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/test" element={<Test />} />

        <Route path="/beforemessage" element={<Beforemessage />} />
        <Route path="/beforehansum" element={<BeforeHansumPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;