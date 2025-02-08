import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './routes/login';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
