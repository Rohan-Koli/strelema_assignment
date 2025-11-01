import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Narbar from "./components/Narbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    {/* <Narbar /> */}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
