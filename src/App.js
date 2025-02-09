import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './routes/login';
import Header from "./components/header";
import Footer from "./components/footer";

function App() {

  return (
    <div id="root">
      <BrowserRouter>
        {/* 모든 페이지에 헤더가 보일수있게 고정*/}
        <Header />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Loginpage />} />
          </Routes>
        </div>
        {/* 모든 페이지에 푸터가 보일수있게 고정*/}
        <Footer /> 
      </BrowserRouter>
    </div>

  );
}

export default App;
