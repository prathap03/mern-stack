import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./error-page";
import HireMe from "./HireMe";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SetState from "./SetState";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hireMe" element={<HireMe/>} />
        <Route path="/useState" element={<SetState/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
